 class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    getUserStats() {
        return `
        Name: ${this.name}
        Age: ${this.age}
        Email: ${this.email}
        `;
    }
}

// ::::导出 { User: [class User] }
exports.User = User;
// :::: 默认直接导出User
// module.exports = User;  默认直接导出User
