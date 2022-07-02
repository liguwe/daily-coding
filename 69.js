/*************************************************
 * @tag 设计模式
 * 发布订阅模式
 ************************************************/

class Event {
    constructor(props) {
        this._events = Object.create(null);
    }

    // 优先级
    add(type, fn, prepend) {
        this._events[type].push(fn);
    }

    remove(type, fn) {
        // 找this._events[type]下的fn
        // remove 它
    }

    once(type, fn) {
        const only = (...args) => {
            fn.apply(this, args);
            this.remove(type, fn);
        }
        only.origin = fn;
        this.add(type, only);
    }

    dispatch(type, ...args) {
        if (Array.isArray(this._events[type])) {
            this._events[type].forEach(fn => {
                fn.apply(this, args);
            });
        }
    }

}
