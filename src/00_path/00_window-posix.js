// path 模块的默认操作因 Node.js 应用程序运行所在的操作系统而异。
// 在 Windows 操作系统上运行时， path 模块将假定正在使用 Windows 风格的路径
// 例如使用path.basename在不同的系统中，会返回不同的结果

const path = require('path')

// 在posix(可以理解为类unix系统)上
console.log(path.basename('C:\\temp\\myfile.html'))
// 返回: 'C:\\temp\\myfile.html'

// 在 Windows 上:
console.log(path.basename('C:\\temp\\myfile.html'))
// 返回: 'myfile.html'

// 需要返回统一的风格，可以使用path.win32或path.posix上的basename方法

// 总是返回windows风格
console.log(path.win32.basename('C:\\temp\\myfile.html'))
// 返回: 'myfile.html'

// 总是返回posix风格
console.log(path.posix.basename('C:\\temp\\myfile.html'))
// 返回: 'C:\\temp\\myfile.html'
