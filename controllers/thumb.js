const Thumbs = require('../models/thumbs.js');

exports.addThumb = (req, res, next) => {
  const siteId = req.params.siteId;
  res.render('add_thumb', {props_siteId: siteId, isNew: true})
}
exports.saveThumb = (req, res, next) => {
  const thumbName = req.body.name;
  const siteId    = req.body.siteId;
  const thumb     = new Thumbs(null, thumbName, '', '', '', siteId);
  thumb.save();
  res.redirect("/admin/site");
}
exports.editThumb = (req, res, next) => {
  const thumbId = req.params.thumbId;
  Thumbs.fetchById(thumbId, (result) => {
    console.log({
      props_id: result.id,
      props_siteId: result.siteId,
      isNew: false,
      props_name: result.name,
      props_folder: result.folder,
      props_image: result.image,
      props_title: result.title,
      props_live: result.live
    })
    res.render('add_thumb',
    {
      props_id: result.id,
      props_siteId: result.siteId,
      isNew: false,
      props_name: result.name,
      props_folder: result.folder,
      props_image: result.image,
      props_title: result.title,
      props_live: result.live
    })
  });
}

exports.updateThumb = (req, res, next) => {
  const result = req.body;
  const thumb = new Thumbs( req.params.thumbId, result.name, result.folder, result.image, result.title, result.siteId, result.live);
  console.log(thumb);
  thumb.save();
  res.redirect("/admin/site");

}

exports.showAll = (req, res, next) => {
  Thumbs.fetchAll( (results) => {
    res.render('thumbs-all', {props_thumbs: results, props_active: 'thumbs-all'})
  })
}
