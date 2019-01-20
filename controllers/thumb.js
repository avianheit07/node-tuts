const Thumbs = require('../models/thumbs.js');

exports.addThumb = (req, res, next) => {
  const siteId = req.params.siteId;
  res.render('add_thumb', {props_siteId: siteId, isNew: true})
}
exports.saveThumb = (req, res, next) => {
  const thumbName = req.body.name;
  const siteId    = req.body.siteId;
  const thumb     = new Thumbs(null, thumbName, '', '', '', siteId);
  thumb.save()
  .then( () => {
    res.redirect("/admin/site");
  })
  .catch( (err) => {
    res.json(err)
  })
}
exports.editThumb = (req, res, next) => {
  const thumbId = req.params.thumbId;
  Thumbs.fetchById(thumbId)
  .then( (data) => {
    const result = data[0][0];
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
  result.id = req.params.thumbId;
  Thumbs.edit(result)
  .then( () => {
    res.redirect("/admin/site");
  })
  .catch( (err) => {
    console.log(err)
  });
}
exports.showAll = (req, res, next) => {
  Thumbs.fetchAll()
  .then( (results) => {
    res.render('thumbs-all', {props_thumbs: results[0], props_active: 'thumbs-all'})
  })
  .catch( (err) => {
    res.json(err)
  })
}
exports.deleteThumb = (req, res, next) => {
  const thumbId = req.params.thumbId;
  Thumbs.deleteThumb(thumbId)
  .then( () => {
    res.redirect('/admin/thumb/all')
  })
  .catch( (err) => {
    res.json(err)
  })
}
