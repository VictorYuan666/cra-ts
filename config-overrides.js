const { override, fixBabelImports, addLessLoader,addDecoratorsLegacy, addWebpackPlugin } = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
// 热跟新
const hotLoader = () => (config, env) => {
  config = rewireReactHotLoader(config, env)
  return config
}
module.exports = override(
  hotLoader(),
  addDecoratorsLegacy(),
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#25b864' },
  }),
);
