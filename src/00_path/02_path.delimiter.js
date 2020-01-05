// path.delimiter
// 返回平台特定的路径定界符
// Windows返回分号(;)
// POSIX返回冒号(:)

const path = require('path')

console.log(path.delimiter) // window平台返回分号(;)、Posix平台返回冒号(:)

console.log(path.win32.delimiter) // 总是返回分号(;)
console.log(path.posix.delimiter) // 总是返回冒号(:)
