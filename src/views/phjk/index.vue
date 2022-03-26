<template>
  <div class="phjk">
    <img :src="`${$cdnUrl}/phjk/phjk.jpg`" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scope>
.phjk {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>