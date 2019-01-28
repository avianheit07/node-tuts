"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const database_1 = require("../config/database");
exports.Site = database_1.sequelize.define('site', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    url: Sequelize.STRING,
    acronym: Sequelize.STRING,
    site_order: Sequelize.STRING,
    description: Sequelize.STRING,
    tags: Sequelize.STRING,
    niche: Sequelize.STRING,
    bg_image: Sequelize.STRING,
    header_images: Sequelize.STRING,
    site_logo: Sequelize.STRING,
    site_thumbnail: Sequelize.STRING,
    trailer_link: Sequelize.STRING,
    site_color: Sequelize.STRING,
    site_color_hover: Sequelize.STRING,
    trailer_trap_link: Sequelize.STRING,
    picture_trap_link: Sequelize.STRING,
    main_join_link: Sequelize.STRING,
    slug: Sequelize.STRING,
    hidden_in_tours: Sequelize.STRING,
    has_bestof_video: Sequelize.STRING,
    sitefolder: Sequelize.STRING,
    sitecolor: Sequelize.STRING,
    sitecolorhover: Sequelize.STRING,
    natssiteid: Sequelize.STRING,
    mobile_ma_site_order: Sequelize.STRING,
    mobile_clicks: Sequelize.STRING,
    live: Sequelize.STRING,
    createdAt: Sequelize.BOOLEAN,
    updatedAt: Sequelize.BOOLEAN
}, { timestamps: false, createdAt: false, updatedAt: false });
// const lorem        = require('lorem-ipsum')
// const randomString = require('random-string');
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
//# sourceMappingURL=site.js.map