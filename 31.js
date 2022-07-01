/**
 * 观察者模式
 * https://www.nowcoder.com/practice/557ec9ca35d542feaa06261385711323?tpId=274&tqId=39540&rp=1&ru=/exam/oj&qru=/exam/oj&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26pageSize%3D50%26search%3D%26tab%3DJS%25E7%25AF%2587%26topicId%3D274&difficulty=undefined&judgeStatus=undefined&tags=&title=
 * */



// 被观察者
class Observerd {
    /**
     * @param name 保存被观察者姓名
     * @param state 保存被观察者状态
     * @param observers 用于保存观察者们
     * */
    constructor(name, state = '走路', observers = []) {
        this.name = name;
        this.state = "走路";
        this.observers = [];
    }
    // 保存观察者
    setObserver(observer) {
        this.observers.push(observer);
    }

    // 用于设置该观察者"state"并且通知所有观察者
    setState(state) {
        // 设置被观察者的属性
        this.state = state;
        // 并通知所有的观察者
        let that = this;
        this.observers.forEach((item, index) => {
            item.publish(that);
        })
    }
}

// 观察者
class Observer {
    constructor() {

    }
    // 将被观察者对象当做参数传入
    publish(observer) {
        console.log(observer.name + "正在" + observer.state)
    }
}

let b1 = new Observer();
let b2 = new Observer();
let b3 = new Observer();

let a = new Observerd('李广卫');
// 设置观察者
a.setObserver(b1)
a.setObserver(b2)
a.setObserver(b3)

a.setState('吃饭')

// 李广卫正在吃饭
// 李广卫正在吃饭
// 李广卫正在吃饭
