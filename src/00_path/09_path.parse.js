// path.parse(path)
// path.parse() 方法返回一个对象，其属性表示 path 的重要元素。 尾部的目录分隔符将被忽略
// 是path.format()的逆操作
const path = require('path')

// POSIX风格路径
console.log(path.parse('/home/user/dir/file.txt'))
// {
//   root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file'
// }
// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘
// （"" 行中的所有空格都应该被忽略，它们纯粹是为了格式化）

// Windows风格路径
console.log(path.parse('C:\\path\\dir\\file.txt'))
// 返回:
// { root: 'C:\\',
//   dir: 'C:\\path\\dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// " C:\      path\dir   \ file  .txt "
// └──────┴──────────────┴──────┴─────┘
// （"" 行中的所有空格都应该被忽略，它们纯粹是为了格式化）
