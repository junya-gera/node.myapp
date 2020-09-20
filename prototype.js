// アロー関数はnewできないので通常関数で書く
var User = function(name, age) {
    this.name = name;
    this.age = age;

    // プロトタイプを使わないメソッド定義
    // インスタンスを生成するたびにコピーされるのでメモリを圧迫する
    this.getName = () => {
        return this.name;
    };
}

// プロトタイプを使ったメソッド定義
// 各インスタンスには参照が渡される→メモリを圧迫しない
User.prototype.getName = () => {
    return this.name;
};

// 複数のメソッドをプロトタイプで定義
// メソッドが多くなる時はこちらの方がメンテしやすい
User.prototype = {
    getAge: () => {
        return this.age;
    },
    getStatus: () => {
        return this.age,this.name;
    }
}

var taro = new User('太郎', 30);

console.log( taro );

// プロトタイプチェーン
// 中身が空っぽのオブジェクト3つ
const Teacher = function() {};
const MemberA = function() {};
const MemberB = function() {};

// MemberAのプロトタイプにTeacherオブジェクトのインスタンスを代入
// MemberAとTeacherはそれぞれ参照できるようになる
MemberA.prototype = new Teacher();

// MemberBのプロトタイプにMemberAオブジェクトのインスタンスを代入
// MemberBとMemberAはそれぞれ参照できるようになる
// MemberBとTeacherもそれぞれ参照できるようになる
MemberB.prototype = new MemberA();

// Teacherオブジェクトにhelloメソッドをプロトタイプで定義
Teacher.prototype.hello = () => {
    return 'Hello!';
};

const maki = new Teacher();
const niko = new MemberA();

// MemberAのインスタンスのnikoもhelloメソッドが使える
console.log(maki.hello());
console.log(niko.hello());