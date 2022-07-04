
const {User} = require('./1.js'); // export.User = User;
const User = require('./1.js'); //  export.module = User;
console.log(User);
const jack = new User('Jack', 21, 'jack@example.com');
console.log(jack.getUserStats());


function classNames(...args) {
    console.log(args);
    // 先打平
    args = flatten(args)
    // 其他逻辑 TODO
}
