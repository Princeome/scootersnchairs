// eslint-disable-next-line no-undef
module.exports = {
  siteUrl: "https://scootersnchairs.com",
  changefreq: null,
  priority: null,
  transform: async (config, path) => {
    var date = new Date().toISOString();
    return {
      loc: path,
      changefreq: null,
      priority: null,
      lastmod: date,
    };
  },
};
