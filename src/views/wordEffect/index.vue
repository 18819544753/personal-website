<template>
  <div class="wordEffect">
    <img :src="`${$cdnUrl}/other_works/cinema.jpg`" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scope>
.wordEffect {
  padding: 100px 500px 100px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>