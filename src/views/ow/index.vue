<template>
  <div class="ow">
    <img :src="`${$cdnUrl}/ow/ow_1.jpg`" />
    <img :src="`${$cdnUrl}/ow/ow_2.jpg`" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scope>
.ow {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>