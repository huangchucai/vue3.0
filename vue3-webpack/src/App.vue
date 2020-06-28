<template>
  <h1>Hello Vue 3!</h1>
  <p>count: {{ count }}</p>
  <router-link to="/">Home</router-link>
  <router-link to="/page1">Page1</router-link>
  <router-link to="/page2">Page2</router-link>

  <router-view></router-view>
</template>

<script>
import { toRefs } from "vue";
import store from "./store";

export default {
  setup() {
    let data = store.getState();
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style scoped>
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
a + a {
  margin-left: 10px;
}
</style>
