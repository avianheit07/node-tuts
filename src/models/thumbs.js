const randomString = require('random-string');
const lorem        = require('lorem-ipsum');
const DB           = require('../config/database');


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
    return DB.query('INSERT INTO thumbs SET ?', this)
  }
  static fetchAllBySite(siteId) {
    return DB.query('SELECT * FROM thumbs WHERE siteId = ?', [siteId]);
  }

  static fetchById(thumbId) {
    return DB.query('SELECT * FROM thumbs WHERE id = ?', [thumbId])
  }

  static fetchAll() {
    return DB.query('SELECT * FROM thumbs');
  }
  static edit(data) {
    return DB.query('UPDATE thumbs SET name = ?, folder = ?, image = ?, title = ?, siteId = ?, live = ? WHERE id = ?',
    [data.name, data.folder, data.image, data.title, data.siteId, data.live, data.id])
  }
  static deleteThumb(id) {
    return DB.query('DELETE FROM thumbs where id = ?', [id]);
  }
}
