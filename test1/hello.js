const http = require('http');//node自带http server处理模块
const PORT = 8085;//server 端口号
const server = new http.Server();//创建server


/** 监听server 请求 */
server.on("request", function (req, res) {
    res.send('哈哈');
});
server.listen(PORT);
console.log('Server running at http://127.0.0.1:' + PORT + '/');