<template>
  <div class="illustrator">
    <img :src="`${$cdnUrl}/other_works/illustrator.jpg`" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scope>
.illustrator {
  padding: 100px 500px 100px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>