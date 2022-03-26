<template>
  <div class="zqb">
    <img :src="`${$cdnUrl}/zqb/zqb.jpg`" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scope>
.zqb {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>