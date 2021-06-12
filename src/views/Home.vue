<template>
  <div class="home">
    <first-screen />
    <job-skill />
    <project />
    <other-works />
    <contact-way />
    <fixedNav />
  </div>
</template>

<script>
import firstScreen from "./firstScreen.vue";
import jobSkill from "./jobSkill.vue";
import project from "./project.vue";
import otherWorks from "./otherWorks.vue";
import contactWay from "./contactWay.vue";
import fixedNav from "../components/fixedNav.vue";
export default {
  name: "Home",
  components: { 
    firstScreen,
    jobSkill,
    project,
    otherWorks,
    contactWay,
    fixedNav,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scope>
.home {
  position: relative;
  width: 100%;
  // height: 100%;
  background-color: #030910;
}
.home::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2900px;
  // background-color: #030910;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url(../assets/images/bg.jpg);
  background-size: 2000px 1871px;
  background-repeat: no-repeat;
  animation: move 20s;
  -moz-animation: move 20s; /* Firefox */
  -webkit-animation: move 20s; /* Safari and Chrome */
  -o-animation: move 20s; /* Opera */
  animation-iteration-count: infinite; /*动画循环播放*/
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
