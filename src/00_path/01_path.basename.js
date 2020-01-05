// path.basename(path[, ext])
// path.basename() 方法返回 path 的最后一部分，类似于 Unix 的 basename 命令
// 尾部的目录分隔符将被忽略

const path = require('path')
// /foo/bar/zoo/test.js/
// 最后一部分为test.js(左后一个斜线被忽略了)
const str = '/foo/bar/zoo/test.js/'

console.log(path.basename(str)) // test.js
console.log(path.basename(str, '.js')) // test;传入ext时，会将ext的部分从返回字符串中剔除
