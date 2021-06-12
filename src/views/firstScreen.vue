<template>
  <div class="first_screen">
    <div class="top_cover"></div>
    <div class="cover_main">
      <ul class="nav">
        <li class="nav_text">App</li>
        <li class="nav_text">网站</li>
        <li class="nav_text">小程序</li>
        <li class="nav_text">后台管理系统</li>
        <li class="nav_text">运营设计</li>
        <li class="nav_text">物料设计</li>
      </ul>
      <div class="rough_cast_glass"></div>
      <div class="title"></div>
    </div>
    <div class="bottom_cover"></div>
  </div>
</template>

<script>
export default {
  name: "first_screen",
};
</script>

<style  lang="less" scope>
.first_screen {
  width: 100%;
  background-color: #030910;
}
.top_cover {
  position: absolute;
  width: 100%;
  height: 304px;
  // z-index: 9;
  background: linear-gradient(
    0deg,
    rgba(3, 9, 16, 0.46) 0%,
    rgba(3, 9, 16, 0) 100%
  );
}
.cover_main {
  position: relative;
  z-index: 1;
  top: 156px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 1200px;
  height: 677px;
  border: 20px solid #18191c;
  box-shadow: 0 0 10px #030910;
  .multiply_img {
    width: 100%;
    height: 128px;
    mix-blend-mode: multiply;
  }
  .nav {
    position: relative;
    display: flex;
    justify-content: space-around;
    padding: 0 20px;
    width: 100%;
    height: 128px;
    overflow: hidden;
    background-color: rgba(3, 9, 16, 0.5);
    .nav_text {
      cursor: pointer;
      font-size: 24px;
      font-family: PingFang-SC-Light;
      color: #ffffff;
      line-height: 120px;
    }
  }
  .nav::before {
    z-index: -1;
    background-position: -381px -175px;
    background-color: #3e3e3e;
    background-blend-mode: luminosity;
  }
  .rough_cast_glass {
    position: relative;
    width: 100%;
    height: 127px;
    border: 1px solid #fff;
    background: rgba(200, 225, 255, 0.3);
    overflow: hidden;
  }
  .rough_cast_glass::before {
    z-index: -1;
    -webkit-filter: blur(4px);
    filter: blur(4px);
    background-position: -351px -272px;
    margin: -30px;
  }
  .title {
    width: 100%;
    height: 384px;
    background: url(../assets/images/firstScreen_title.png) #030910;
    background-size: 100% 100%;
  }
}
.bottom_cover {
  position: absolute;
  top: 431px;
  width: 100%;
  height: 344px;
  background: linear-gradient(
    0deg,
    rgba(3, 9, 16, 0) 0%,
    rgba(3, 9, 16, 0.46) 100%
  );
}

.nav::before,
.rough_cast_glass::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2900px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  // z-index: -1;
  background: url(../assets/images/bg.png);
  background-size: 2000px 1871px;
  background-repeat: no-repeat;
  animation: move 20s;
  -moz-animation: move 20s; /* Firefox */
  -webkit-animation: move 20s; /* Safari and Chrome */
  -o-animation: move 20s; /* Opera */
  animation-iteration-count: infinite; /*动画只执行一次*/
  -moz-animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  -o-animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  -moz-animation-timing-function: ease-in-out;
  -webkit-animation-timing-function: ease-in-out;
  -o-animation-timing-function: ease-in-out;
}
@keyframes move {
  /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
  0% {
    transform: scale(1);
    /*开始为原始大小*/
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>