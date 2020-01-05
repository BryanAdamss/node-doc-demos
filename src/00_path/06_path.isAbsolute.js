// path.isAbsolute(path)
// path.isAbsolute() 方法检测 path 是否为绝对路径。

const path = require('path')
// posix
console.log(path.isAbsolute('/foo/bar')) // true
console.log(path.isAbsolute('/baz/..')) // true
console.log(path.isAbsolute('qux/')) // false
console.log(path.isAbsolute('.')) // false

// windows
console.log(path.isAbsolute('//server')) // true
console.log(path.isAbsolute('\\\\server')) // true
console.log(path.isAbsolute('C:/foo/..')) // true
console.log(path.isAbsolute('C:\\foo\\..')) // true
console.log(path.isAbsolute('bar\\baz')) // false
console.log(path.isAbsolute('bar/baz')) // false
console.log(path.isAbsolute('.')) // false
