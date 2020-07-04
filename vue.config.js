module.exports = {
  devServer: {
    host: "localhost",
    port: 8084,
    proxy: {
      "/api": {
        target: "http://localhost:8099",
        changedTouches: true,
      },
      "/web": {
        target: "http://localhost:8099",
        changedTouches: true,
      }
    }
  },
  lintOnSave: false
};
