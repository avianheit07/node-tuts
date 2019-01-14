const sites = require('fs');

exports.getSitelist = (req, res, next) => {
    const site_content = sites.readFileSync(__dirname + '/../dummy_data/sites.json');
    res.json({data: JSON.parse(site_content), message: 'success', error: null})
}
