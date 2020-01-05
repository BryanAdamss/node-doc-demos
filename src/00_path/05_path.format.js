// path.format(pathObject)
// path.format() 方法从对象返回路径字符串。 与 path.parse() 相反

// pathObject可以有以下属性
// dir <string> 目录
// root <string> 根
// base <string> 基础名
// name <string> 名称
// ext <string> 扩展名
// ! 中间使用path.sep连接；path.sep会受系统影响；windows是\(反斜杠)；posix是/(正斜杠)

// 路径的组成
// POSIX系统
// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘
// （"" 行中的所有空格都应该被忽略，它们纯粹是为了格式化）

// windows系统
// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// " C:\      path\dir   \ file  .txt "
// └──────┴──────────────┴──────┴─────┘
// （"" 行中的所有空格都应该被忽略，它们纯粹是为了格式化）

// ! 如果提供了 pathObject.dir，则忽略 pathObject.root。
// ! 如果 pathObject.base 存在，则忽略 pathObject.ext 和 pathObject.name。

const path = require('path')

console.log(
  path.win32.format({
    dir: 'c:\\foo\\zoo\\bar',
    base: 'test.js'
  })
) // c:\foo\zoo\bar\test.js

// 如果提供了 `dir`、 `root` 和 `base`，
// 则返回 `${dir}${path.sep}${base}`。
// `root` 会被忽略。
console.log(
  path.posix.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
  })
)
// 返回: '/home/user/dir/file.txt'

// 如果未指定 `dir`，则使用 `root`。
// 如果只提供 `root`，或 'dir` 等于 `root`，则将不包括平台分隔符。
// `ext` 将被忽略。
path.posix.format({
  root: '/',
  base: 'file.txt',
  ext: 'ignored'
})
// 返回: '/file.txt'

// 如果未指定 `base`，则使用 `name` + `ext`。
path.posix.format({
  root: '/',
  name: 'file',
  ext: '.txt'
})
// 返回: '/file.txt'
