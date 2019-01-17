const fs = require('fs');
const path = require('path');
const randomString = require('random-string');
const file_path = path.join(__dirname, '..', 'dummy_data', 'sites.json');

module.exports = class Site {
  constructor(new_site) {
    this.id = Math.ceil(Math.random() * (100000 - 1));
    this.name = new_site;
    this.url = 'www.' + randomString({length:10}) + '.com';
    this.acronym = randomString({length:3})
    this.site_order = Math.ceil(Math.random() * (100 - 1));
    this.description = randomString({length: 100})
    this.tags = randomString({length: 100})
    this.niche = randomString({length: 100})
    this.bg_image = ''
    this.header_image = ''
    this.site_logo = ''
    this.site_thumbnail = ''
    this.trailer_link = ''
    this.site_color = ''
    this.site_color_hover = ''
    this.trailer_trap_link = ''
    this.picture_trap_link = ''
    this.main_join_link = ''
    this.slug = randomString({length: 20})
    this.hidden_in_tours = 'no'
    this.has_bestof_videos = 'yes'
    this.sitefolder = 'girls'
    this.sitecolorhover = ''
    this.natsiteid = Math.ceil(Math.random() * (100 - 1))
    this.mobile_ma_site_order = 0
    this.mobile_clicks = 0
    this.live = 1

  }

  save() {
    fs.readFile(file_path, (err, data) => {
      let sites = [];
      if (!err) {
        sites = JSON.parse(data);
        sites.push(this);
        fs.writeFile(file_path, JSON.stringify(sites), (err) => {
          if(err) {
            return false;
          } else {
            return true;
          }
        })
      } else {
        return false;
      }
    });
  }

  editOne(id, siteObj) {
    fs.readFile(file_path, (err, data) => {
      let sites = [];
      if (!err) {
        sites = JSON.parse(data);
        const new_sites = sites.map((site) => {
          if(site.id == id) {
            // console.log('found you', id, site.id, siteObj)
            return siteObj
          }
          return site
        });
        fs.writeFile(file_path, JSON.stringify(new_sites), (err) => {
          if(err) {
            return false;
          } else {
            return true;
          }
        })
      } else {
        return false;
      }
    });
  }
  static edit(id, name, cb) {
      const sites = this.fetchAll();
      const new_sites = sites.map((s) => {
        if(s.id === id){
          s.name = name;
        }
        return s;
      }, id, name);

      fs.writeFile(file_path, JSON.stringify(new_sites), (err)=> {
        return cb();
      });
      // fs.readFile(file_path, (err, data) => {
      //   let sites = [];
      //   if (!err) {
      //     sites = JSON.parse(data);
      //     const new_sites = sites.map((s) => {
      //       if(s.id === id){
      //         s.name = name;
      //         console.log(name);
      //       }
      //       return s;
      //     }, id, name);
      //
      //     fs.writeFile(file_path, JSON.stringify(new_sites), (err) => {
      //       return true;
      //     });
      //   }
      // });
  }
  static fetchAll() {
    return JSON.parse(fs.readFileSync(file_path));
  }

  static fetchOne(id) {
    const sites = this.fetchAll();
    return sites.find((site) => {
      if(site.id == id) {
        return site;
      }
    }, id);
  }
}
