<template>
  <div class="goodaiMini">
    <img :src="`${$cdnUrl}/goodaiMini/goodaiMini_1.jpg`" />
    <img :src="`${$cdnUrl}/goodaiMini/goodaiMini_2.jpg`" />
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