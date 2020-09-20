const fs = require("fs");

const data = "こんにちは";

// 書き込みファイルパス, 書き込みたいデータ(UTF-8), コールバック
fs.writeFile("./data/hello.txt", data, (error) => {
    if(error){
        console.log(error.message);
        return;
    }
    console.log("書き込み完了");
});