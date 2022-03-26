<template>
  <div class="goodaiMini">
    <img :src="`${$cdnUrl}/goodaiGuanlixt/goodaiGuanlixt.jpg`" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scope>
.goodaiMini {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>