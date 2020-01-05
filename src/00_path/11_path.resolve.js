// path.resolve([...paths])
// path.resolve() 方法将路径或路径片段的序列解析为绝对路径
// 给定的路径序列从右到左进行处理，每个后续的 path 前置，直到构造出一个绝对路径。
// 例如，给定的路径片段序列：/foo、 /bar、 baz，调用 path.resolve('/foo', '/bar', 'baz') 将返回 /bar/baz。
// ! 从右向左构建路径，后续的path会前置，再规范化path.normalize()
// baz
// /bar/baz 已经是一个绝对路径，结束直接返回当前拼接的绝对路径，忽略/foo

// ! 如果在处理完所有给定的 path 片段之后还未生成绝对路径，则再加上当前工作目录

// 同path.join的不同
// path.join是单纯的路径拼接，返回的是一个路径，可能是相对路径也可能是绝对路径
// path.resolve必须返回一个绝对路径

const path = require('path')

console.log(path.posix.resolve('/foo/bar', './baz'))
// ./baz
// /foo/bar/baz 绝对路径，返回
// 返回: '/foo/bar/baz'

console.log(path.posix.resolve('/foo/bar', '/tmp////////file/'))
// 返回: '/tmp/file'

console.log(
  path.posix.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')
)
// ../gif/image.gif
// static_files/png/../gif/image.gif
// wwwroot/static_files/png/../gif/image.gif 非绝对路径，需要加上process.cwd()

// 如果当前工作目录是 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'
