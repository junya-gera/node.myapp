const sample = ms =>  new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise');
    }, ms);
});

// sample.then((result) => {
//     console.log(result);
// });

// sampleが終わるのを待つので1と2の間に3秒間
let taskA = async () => {
    // return 100;
    // throw new Error('エラーが発生');
    console.log(1);
    await sample(3000);
    console.log(2);
};

// Promise.resolveが実行される
// taskA().then(value => console.log(value));
taskA();
// throwされた場合はこちらが呼び出され、Promise.rejectが実行される
// taskA().catch(error => console.log(error.message));
