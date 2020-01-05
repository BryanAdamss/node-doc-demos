// path.relative(from, to)
// path.relative() 方法根据当前工作目录(process.cwd()运行node目录)返回 from 到 to 的相对路径。 如果 from 和 to 各自解析到相同的路径（分别调用 path.resolve() 之后），则返回零长度的字符串。
// 如果将零长度的字符串传入 from 或 to，则使用当前工作目录代替该零长度的字符串。

// ! 使用什么样的相对路径，可以从from到to路径

const path = require('path')

console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'))
// 返回: '../../impl/bbb');
