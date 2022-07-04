const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';


function MyPromise(executor) {
    this.state = PENDING;
    this.value = null;
    this.reason = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
        if (this.state === PENDING) {
            this.state = FULFILLED;
            this.value = value;
            this.onFulfilledCallbacks.forEach(fun => {
                fun();
            });
        }
    }

    const reject = (reason) => {
        if (this.state === PENDING) {
            this.state = REJECTED;
            this.reason = reason;
            this.onRejectedCallbacks.forEach(fun => {
                fun();
            });
        }
    }

    try {
        executor(resolve, reject);
    } catch (reason) {
        reject(reason);
    }
}


MyPromise.prototype.then = function (onFulfilled, onRejected) {
    if (typeof onFulfilled != 'function') {
        onFulfilled = function (value) {
            return value;
        }
    }
    if (typeof onRejected != 'function') {
        onRejected = function (reason) {
            throw reason;
        }
    }

    const promise2 = new MyPromise((resolve, reject) => {
        switch (this.state) {
            case FULFILLED:
                setTimeout(() => {
                    try {
                        const x = onFulfilled(this.value);
                        resolve(x);
                    } catch (reason) {
                        reject(reason);
                    }
                }, 0);
                break;
            case REJECTED:
                setTimeout(() => {
                    try {
                        const x = onRejected(this.reason);
                        resolve(x);
                    } catch (reason) {
                        reject(reason);
                    }
                }, 0);
                break;
            case PENDING:
                this.onFulfilledCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            const x = onFulfilled(this.value);
                            resolve(x);
                        } catch (reason) {
                            reject(reason);
                        }
                    }, 0);
                })
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            const x = onRejected(this.reason);
                            resolve(x);
                        } catch (reason) {
                            reject(reason);
                        }
                    }, 0);
                })
                break;
        }
    })
    return promise2;
}


MyPromise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
};

MyPromise.prototype.finally = function (fn) {
    return this.then(value => {
        fn();
        return value;
    }, reason => {
        fn();
        throw reason;
    });
};


MyPromise.reject = function (value) {
    return new MyPromise((resolve, reject) => {
        resolve(value);
    });
};


MyPromise.reject = function (reason) {
    return new MyPromise((resolve, reject) => {
        reject(reason);
    });
};


MyPromise.all = function (promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) {
            resolve([]);
        } else {
            let result = [];
            let index = 0;
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(data => {
                    result[i] = data;
                    if (++index === promises.length) {
                        resolve(result);
                    }
                }, err => {
                    reject(err);
                    return;
                });
            }
        }
    });
}


MyPromise.race = function (promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) {
            resolve();
        } else {
            let index = 0;
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(data => {
                    resolve(data);
                }, err => {
                    reject(err);
                    return;
                });
            }
        }
    });
}