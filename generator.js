module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    dependencies: {
      'axios': '^0.19.0'
    }
  })
  // 修改 `package.json` 里的字段
  // api.extendPackage({
    // scripts: {
      // test: 'jest'
    // }
  // })

  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render('./template')
  
  // api.render(files => {
    // Object.keys(files)
      // .forEach(path => console.log(files[path]));
  // });
}