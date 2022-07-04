
const {User} = require('./user.cjs'); // export.User = User;
// const User = require('./1.js'); //  export.module = User;
console.log(User);
const jack = new User('Jack', 21, 'jack@example.com');
console.log(jack.getUserStats());

