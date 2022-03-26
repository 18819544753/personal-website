<template>
  <div class="other_works">
    <div class="other_works_title"></div>
    <div class="other_works_main"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scope>
.other_works {
  position: relative;
  margin-top: 200px;
  width: 100%;
  background: url("@{url-prefix}/other_works_bg.jpg") #fff;
  background-size: 100% 100%;
  .other_works_title {
    width: 100%;
    height: 555px;
    background: url("@{url-prefix}/Group_3.png");
    background-size: cover;
  }
  .other_works_main {
    width: 100%;
    height: 1000px;
  }
}
</style>