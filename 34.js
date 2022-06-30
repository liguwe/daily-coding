/**
 * 输入顺序
 * */
new Promise((resolve, reject)=>{
    reject(1);
    console.log(2);
}).catch((err)=>{
    console.log('err:',err)
    console.log(3)
}).then(
    ()=>{console.log(4)},
    (v)=>{console.log(v,'v')},
).then(
    console.log
)

console.log(5);

// 2
// 5
// err: 1
// 3
// 4

setTimeout(()=>{

    console.log('***=============>');


    var p1 = new Promise(function(resolve, reject) {
        resolve('Success');
    });

    p1.then(function(value) {
        console.log(value); // "Success!"
        throw 'oh, no!';
    }).catch(function(e) {
        console.log(e); // "oh, no!"
    }).then(function(){
        console.log('after a catch the chain is restored');
    }, function () {
        console.log('Not fired due to the catch');
    }).then(console.log,console.log(9));


})
