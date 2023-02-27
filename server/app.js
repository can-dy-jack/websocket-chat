var ws = require("nodejs-websocket");

var server = ws.createServer(function (conn) {
    console.log("New connection.");

    conn.on("text", function (str) {
        // console.log("Received "+str)
        conn.sendText(str.toUpperCase()+"!") // 返回给客户端信息
    })

    conn.on("close", function (code, reason) {
        console.log("Connection closed.")
    })

    // 阻止页面刷新导致的 socket 连接断开
    conn.on("error", function (err){
        console.log("Connection error: " + err)
    })
})

server.listen(8001, () => {
    console.log('server is running at port 8001')
})
