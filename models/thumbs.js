const fs           = require('fs');
const path         = require('path');
const randomString = require('random-string');
const file_path    = path.join(__dirname, '..', 'dummy_data', 'thumbs.json');
const lorem        = require('lorem-ipsum');


const getThumbsFromFile = (callback) => {
  fs.readFile(file_path, (err, data) => {
    let sites = [];
    sites = JSON.parse(data);
    callback(sites);
  });
}

module.exports = class Thumbs {
  constructor(id, name, folder, image, title, siteId, live = null) {
    this.id     = id;
    this.name   = name;
    this.folder = folder;
    this.image  = image;
    this.title  = title;
    this.siteId = siteId;
    this.live   = (live === null) ? false : (live === 'on' ? true : false);
  }
  save() {
    fs.readFile(file_path, (err, data) => {
      let thumbs = [];
        if (!err) {
          thumbs = JSON.parse(data);

          if(this.id) { // update
            const index = thumbs.findIndex( (thumb) => thumb.id == this.id)
            thumbs[index] = this;
          } else { // create
            this.id = (this.id === null) ? Math.ceil(Math.random() * (100000 - 1)) : this.id;
            thumbs.push(this);
          }
          console.log(thumbs);
          fs.writeFile(file_path, JSON.stringify(thumbs), (err) => {
            if(err) {
              return false;
            } else {
              return true;
            }
          })
        } else {
          console.log(err);
        }
    });
  }
  static fetchAllBySite(siteId, cb) {
    getThumbsFromFile( thumbs => {
      let new_thumbs = [];
      if( thumbs )
        new_thumbs = thumbs.filter( thumb => thumb.siteId == siteId);

      cb(new_thumbs);
    })
  }
  static fetchById(thumbId, cb) {
    getThumbsFromFile( thumbs => {
      let new_thumbs = [...thumbs];
      let index_thumb = new_thumbs.findIndex( (thumb) => thumb.id == thumbId);
      cb(new_thumbs[index_thumb]);
    })
  }

  static fetchAll(cb) {
    getThumbsFromFile(cb);
  }
}
