<template>
  <div class="other_works">
    <div class="other_works_title"></div>
    <div class="other_works_main">
      <div class="item1" @click="$router.push({ name: 'wordEffect' })"></div>
      <div class="item2" @click="$router.push({ name: 'dynamicEffect' })"></div>
      <div class="item3" @click="$router.push({ name: 'illustrator' })"></div>
    </div>
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
    // position: relative;
    width: 100%;
    height: 645px;
    .item1,
    .item2,
    .item3 {
      transition: transform 1s;
    }
    .item1:hover,
    .item2:hover,
    .item3:hover {
      transform: scale(1.05); /*放大1.1倍*/
    }
    .item1 {
      cursor: pointer;
      position: absolute;
      top: 26%;
      left: 28%;
      width: 400px;
      height: 800px;
      background: url("@{url-prefix}/other_works_main_item1.jpg") no-repeat 100%
        100%;
      background-size: contain;
    }
    .item2 {
      cursor: pointer;
      position: absolute;
      top: 24%;
      right: 27%;
      width: 400px;
      height: 400px;
      background: url("@{url-prefix}/other_works_main_item2.png") no-repeat 100%
        100%;
      background-size: contain;
    }
    .item3 {
      cursor: pointer;
      position: absolute;
      top: 57%;
      right: 27%;
      width: 400px;
      height: 400px;
      background: url("@{url-prefix}/other_works_main_item3.png") no-repeat 100%
        100%;
      background-size: contain;
    }
  }
}
</style>