<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  padding: 20px 15%;
}

body {
  background-color: #3f4041ff;
}
button {
  width: 100%;
  padding: 20px 60px;
  outline: none;
  background-color: #282c34;
  border: none;
  border-radius: 5px;
  -webkit-box-shadow: 0 9px #95a5a6;
  box-shadow: 0 9px #95a5a6;
  font-size: 1.2em;
  color: #fff;
}
</style>
