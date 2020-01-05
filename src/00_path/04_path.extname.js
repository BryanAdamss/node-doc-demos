// path.extname(path)
// path.extname() 方法返回 path 的扩展名，从最后一次出现 .（句点）字符到 path 最后一部分的字符串结束（包含句点部分）。
//  如果在 path 的最后一部分中没有 . ，或者如果 path 的基本名称（参阅 path.basename()）除了第一个字符以外没有 .，则返回空字符串。

const path = require('path')

const pathStr = '/foo/zoo/bar/test.js'

console.log(path.extname(pathStr))
// .js

console.log(path.extname('index.html'))
// 返回: '.html'

console.log(path.extname('index.coffee.md'))
// 返回: '.md'；返回最后一个句点到结束

console.log(path.extname('index.'))
// 返回: '.'；返回的值包含最后一个句点

console.log(path.extname('index'))
// 返回: ''；无句点，返回空字符串

console.log(path.extname('test/.index'))
// ! 返回: ''；此路径的basename(.index)除了首字母为句点外，没有其他句点，所以返回空字符串

console.log(path.extname('.index.md'))
// 返回: '.md'
