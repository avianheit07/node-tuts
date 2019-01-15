const sites = [];

module.exports = class Site {
  constructor(new_site) {
    this.name = new_site;
  }

  save() {
    sites.push(this);
    console.log(sites);
  }

  static fetchAll() {
    return this.sites;
  }
}
