<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script>
import {reactive, effect} from "@vue/reactivity";

const obj = {foo: 1};
effect(() => {
  console.log('effect', obj.foo)
})
const p = reactive(obj);
p.foo = 2;


setTimeout(() => {
  p.foo = 3;
}, 1000)
// console.log('p.foo', p.foo)

</script>
