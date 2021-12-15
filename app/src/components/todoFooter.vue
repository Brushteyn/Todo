<template>
  <div class="footer">
    <div class="error" v-if="hasError">Вы ничего не ввели!</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  .error {
    color: blue;
    font-size: 20px;
  }
}
</style>
