const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.performance
      .maxAssetSize(10000000) // زيادة الحد الأقصى لحجم الأصول (8MB مثالاً)
      .maxEntrypointSize(10000000) // زيادة الحد الأقصى لحجم نقاط الدخول
      .hints(false); // تعطيل التحذيرات المتعلقة بالأداء
  },
  configureWebpack: {
    performance: {
      hints: false, // تعطيل التحذيرات المتعلقة بالأداء بشكل كامل
    },
  },
});
