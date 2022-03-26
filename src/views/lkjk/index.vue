<template>
  <div class="lkjk">
    <img :src="`${$cdnUrl}/lkjk/lkjk.jpg`" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scope>
.lkjk {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>