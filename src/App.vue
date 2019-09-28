<template>
  <div id="app">
    <DeliveryForm />
  </div>
</template>

<script>
import DeliveryForm from "./components/DeliveryForm.vue";

export default {
  name: "app",
  components: {
    DeliveryForm
  }
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
</style>
