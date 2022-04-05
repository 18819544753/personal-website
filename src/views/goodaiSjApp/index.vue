<template>
  <div class="goodaiSjApp">
    <img :src="`${$cdnUrl}/goodaiSjApp/goodaiSjApp.jpeg`" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scope>
.goodaiSjApp {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>