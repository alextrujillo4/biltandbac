module.exports = {
  lintOnSave: false,
  transpileDependencies: [
    'vuetify',
  ],
  devServer: {
    proxy: 'https://backend.test/',
  }
};
