module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/examples/vue-json-print'
    : '/',
  css: { extract: false },
};
