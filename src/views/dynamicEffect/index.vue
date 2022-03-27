<template>
  <div class="dynamicEffect">
    <img :src="`${$cdnUrl}/other_works/afterEffects.gif`" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scope>
.dynamicEffect {
  padding: 100px 500px 100px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>