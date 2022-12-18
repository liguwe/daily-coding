/**
 * 输入顺序
 * */
new Promise((resolve, reject)=>{
    reject(3);
    console.log(1);
}).catch((err)=>{
    console.log(err);
    console.log(4)
}).then(
    ()=>{console.log(5)},
    (v)=>{console.log(v,'v')},
).then(
    console.log
)

console.log(2);



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
