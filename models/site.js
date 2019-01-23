const lorem        = require('lorem-ipsum');
const randomString = require('random-string');
const getDb        = require('../config/database').getDb;
const mongodb      = require('mongodb');
// const DB           = require('../config/database')
//
// module.exports = class Site {
//   constructor(new_site) {
//     this.id = Math.ceil(Math.random() * (100000 - 1));
//     this.name = new_site;
//     this.url = 'www.' + randomString({length:10}) + '.com';
//     this.acronym = randomString({length:3})
//     this.site_order = Math.ceil(Math.random() * (100 - 1));
//     this.description = lorem({count: 2, units:'paragraphs'})
//     this.tags = randomString({length: 100})
//     this.niche = randomString({length: 100})
//     this.bg_image = ''
//     this.header_images = ''
//     this.site_logo = ''
//     this.site_thumbnail = ''
//     this.trailer_link = ''
//     this.site_color = ''
//     this.site_color_hover = ''
//     this.trailer_trap_link = ''
//     this.picture_trap_link = ''
//     this.main_join_link = ''
//     this.slug = randomString({length: 20})
//     this.hidden_in_tours = 'no'
//     this.has_bestof_video = 'yes'
//     this.sitefolder = 'girls'
//     this.sitecolor = ''
//     this.sitecolorhover = ''
//     this.natssiteid = Math.ceil(Math.random() * (100 - 1))
//     this.mobile_ma_site_order = 0
//     this.mobile_clicks = 0
//     this.live = 1
//
//   }
//
//   save() {
//     return DB.query('INSERT INTO sites SET ?', this)
//   }
//
//   static edit(id, toEdit, cb) {
//       return DB.query('UPDATE sites SET name = ?, url = ? WHERE id = ?', [toEdit.name, toEdit.url, id]);
//   }
//
//   static fetchAll() {
//     return DB.query('SELECT * FROM sites');
//   }
//   static fetchOne(id) {
//     return DB.query('SELECT * FROM sites WHERE id = ?', [id])
//   }
//
//   static deleteOne(id) {
//     return DB.query('DELETE FROM sites WHERE id = ?', [id])
//   }
// }

class Site {
  constructor(new_site) {
      this.id = Math.ceil(Math.random() * (100000 - 1));
      this.name = new_site;
      this.url = 'www.' + randomString({length:10}) + '.com';
      this.acronym = randomString({length:3})
      this.site_order = Math.ceil(Math.random() * (100 - 1));
      this.description = lorem({count: 2, units:'paragraphs'})
      this.tags = randomString({length: 100})
      this.niche = randomString({length: 100})
      this.bg_image = ''
      this.header_images = ''
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
      this.has_bestof_video = 'yes'
      this.sitefolder = 'girls'
      this.sitecolor = ''
      this.sitecolorhover = ''
      this.natssiteid = Math.ceil(Math.random() * (100 - 1))
      this.mobile_ma_site_order = 0
      this.mobile_clicks = 0
      this.live = 1
  }

  save() {
    const db = getDb();
    return db.collection('sites')
    .insertOne(this)
    .then( result => {
      console.log(result);
    })
    .catch( err => {
      console.log(err);
    });
  }

  static fetchAll() {
    const db = getDb();
    return db.collection('sites')
    .find()
    .toArray()
    .then( result => {
      return result;
    })
    .catch( err => {
      console.log(err);
    });
  }

  static fetchOne(id) {
    const db = getDb();
    return db.collection('sites')
    .find({ _id: new mongodb.ObjectId(id)})
    .next()
    .then( result => {
      return result;
    })
    .catch( err => {
      console.log(err);
    })
  }

  static update(id, data) {
    const db = getDb();
    return db.collection('sites')
    .findOneAndUpdate(
      { _id: new mongodb.ObjectId(id)},
      {$set: data}
    )
    .then( result => {
      console.log(result);
      return result;
    })
    .catch( err => {
      console.log(err);
    })
  }
  static delete(id) {
    const db = getDb();
    return db.collection('sites')
    .findOneAndDelete(
      {_id: new mongodb.ObjectId(id)}
    ).then( result => {
      console.log(result);
    }).catch( (err) => {
      console.log(err)
    })
  }
}

module.exports = Site;
