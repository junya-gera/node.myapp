// 環境変数はオブジェクトになっている
//　環境変数に何が定義されているか確認できる
// コマンドプロンプトでsetを実行したときに確認できる環境変数の一覧と同じもの

for(let key in process.env){
    console.log(`${key} : ${process.env[key]}`);
}

// カレントディレクトリを取得する
console.log(process.cwd());