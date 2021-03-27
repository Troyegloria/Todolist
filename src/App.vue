<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
body{
  width: 100%;
  max-width:750px;
  min-width: 360px;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  background-color: rgb(235, 241, 225);
  list-style: none;
  overflow: hidden;
}
</style>
