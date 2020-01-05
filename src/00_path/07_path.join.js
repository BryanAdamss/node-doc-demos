// path.join([...paths])
// path.join() 方法使用平台特定的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径。
// 零长度的 path 片段会被忽略。 如果连接的路径字符串是零长度的字符串，则返回 '.'，表示当前工作目录。
// ! 单纯的将给定的路径片段使用path.sep进行拼接，并用path.normalize进行规范化

const path = require('path')

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'))
// 返回: '/foo/bar/baz/asdf'

console.log(path.join('foo', {}, 'bar'))
// 抛出 'TypeError: Path must be a string. Received {}'
