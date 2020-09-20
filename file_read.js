// file systemモジュールを読み込む
const fs = require("fs");

// readFileメソッドでsample.jsonを読み込む
fs.readFile("./data/sample.json", "utf8", (error, data) => {
    if(error){
        console.log(error.message);
        return;
    }
    console.log(data);
});