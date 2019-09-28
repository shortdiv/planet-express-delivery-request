<template>
  <div>
    <h1>Good News! Your Request has been submitted!</h1>
    <router-link to="/">
      <button>Back to form</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SubmissionSuccess"
};
</script>

<style scoped lang="scss">
li {
  &:not(:first-child) {
    margin-top: 0.5em;
  }
}
span {
  display: inline-block;
  margin: 0 10px;
  padding: 5px 0;
  font-size: 1em;
}

button {
  margin-top: 1em;
}
</style>
