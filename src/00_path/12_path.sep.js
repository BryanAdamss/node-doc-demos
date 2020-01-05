// path.sep
// 提供平台特定的路径片段分隔符：

// Windows 上是 \。
// POSIX 上是 /
const path = require('path')

console.log(path.posix.sep) // /
console.log(path.win32.sep) // \
