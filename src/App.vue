<template>
  <div id="app">
    <router-link :to="{ path: '/' }">home</router-link>
    <router-link :to="{ path: '/user' }">user</router-link>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
