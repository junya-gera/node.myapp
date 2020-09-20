const http = require("http");

http.createServer((request, response) => {
    // ヘッダー書き込み
    // (statusCode, キーバリューでheader)を指定
    response.writeHead(200, {"content-Type": "text/plain"});
    // 書き込み完了
    response.end("Hello World 1.");
}).listen(3000); // 接続受付の開始、待機状態に入る


