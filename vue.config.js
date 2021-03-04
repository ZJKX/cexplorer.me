module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        //@ 指代src
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/assets',
        'views': '@/views',
      }
    }
  }
};
