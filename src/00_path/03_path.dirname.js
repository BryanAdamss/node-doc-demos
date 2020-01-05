// path.dirname(path)
// path.dirname() 方法返回 path 中的目录名，类似于 Unix 的 dirname 命令。 尾部的目录分隔符将被忽略
// 一个路径path = dirname + basename
// /foo/zoo/bar/test.js
// basename:test.js
// dirname:/foo/zoo/bar

const path = require('path')

const pathStr = '/foo/zoo/bar/test.js'

console.log(path.dirname(pathStr)) // /foo/zoo/bar
console.log(path.basename(pathStr)) // test.js
