const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: './index.js',
  plugins: [
    new ManifestPlugin({
      filter: desc => {
        // 只记录 js 文件的 manifest
        return desc.path.endsWith('.js');
      },
    }),
  ],
};
