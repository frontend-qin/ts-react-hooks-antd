const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  addWebpackPlugin
} = require('customize-cra')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')
const path = require('path')
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  // 配置皮肤
  addLessLoader({
    javascriptEnabled: true
    // modifyVars: { '@primary-color': '#1DA57A' }
  }),
  //   配置别名
  addWebpackAlias({
    src: path.resolve(__dirname, 'src')
  }),
  //   添加插件
  addWebpackPlugin(
    new ProgressBarPlugin({
      complete: '█',
      format: `${chalk.green('Building')} [ ${chalk.green(
        ':bar'
      )} ] ':msg:' ${chalk.bold('(:percent)')}`,
      clear: true
    })
  )
)
