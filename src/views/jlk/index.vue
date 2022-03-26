<template>
  <div class="jlk">
    <img :src="`${$cdnUrl}/jlk/jlk.jpg`" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scope>
.jlk {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>