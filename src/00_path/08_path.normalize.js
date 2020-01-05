// path.normalize(path)
// path.normalize() 方法对给定的path进行规范化，并解析 '..' 和 '.' 片段。
// 当找到多个连续的路径段分隔字符(path.sep)时（例如 POSIX 上的 /、Windows 上的 \ 或 /），则它们将被替换为单个平台特定的路径段分隔符（POSIX 上的 /、Windows 上的 \）。 尾部的分隔符会保留
// 如果 path 是零长度的字符串，则返回 '.'，表示当前工作目录。

// 规范化主要做了两件事
// 1.合并连续的多个path.sep
// 2.解析'..'、'.'

const path = require('path')

console.log(path.posix.normalize('/foo/bar//baz/asdf/quux/..'))
// 返回: '/foo/bar/baz/asdf'；..代表返回上一层目录，所以遇到..，在返回时，..前的一个目录可以当做没有；例如，此处quux在返回时被忽略了

// 由于 Windows 识别多种路径分隔符(正反斜杠都可识别)，因此这些分隔符都将被替换为 Windows 首选的分隔符（\）
console.log(path.win32.normalize('C:////temp\\\\/\\/\\/foo/bar'))
// 返回: 'C:\\temp\\foo\\bar'；在win中混用/\会被替换成\
