import './assets/main.css'

import {createApp, reactive, effect, readonly} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'


const obj = reactive({foo: 1, bar: 2});
const newObj = {
    foo: {
        get value() {
            return obj.foo
        }
    },
    bar: {
        get value() {
            return bar.foo
        }
    }
}

effect(() => {
    // 这里会触发 get value() ，从而访问了 obj.foo ，从而触发收集依赖
    console.log(newObj.foo);
})

obj.foo = 2;


// const app = createApp(App)
// app.use(createPinia())
// app.use(router)
//
// app.mount('#app')
