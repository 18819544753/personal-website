<template>
  <div class="home">
    <first-screen />
    <job-skill ref="jobSkill" />
    <project />
    <other-works />
    <contact-way />
    <fixedNav ref="fixedNav" />
    <div class="beian">
      <a href="http://beian.miit.gov.cn/" target="_blank"
        >粤ICP备2021064501号</a
      >
    </div>
  </div>
</template>

<script>
import firstScreen from "./components/firstScreen.vue";
import jobSkill from "./components/jobSkill.vue";
import project from "./components/project.vue";
import otherWorks from "./components/otherWorks.vue";
import contactWay from "./components/contactWay.vue";
import fixedNav from "@/components/fixedNav.vue";
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
    return {
      homeTop: 0,
    };
  },
  methods: {},
  mounted() {
    window.addEventListener("scroll", this.$refs.jobSkill.handleScroll, true);
    window.addEventListener("scroll", this.$refs.fixedNav.handleScroll, true);
  },
  activated() {
    window.addEventListener("scroll", this.$refs.jobSkill.handleScroll, true);
    window.addEventListener("scroll", this.$refs.fixedNav.handleScroll, true);
    this.$nextTick(() => {
      document.body.scrollTop = this.$homeScroll;
    });
  },
  beforeDestroy() {
    window.addEventListener("scroll", this.$refs.jobSkill.handleScroll, true);
    window.addEventListener("scroll", this.$refs.fixedNav.handleScroll, true);
  },
  beforeRouteLeave(to, from, next) {
    window.removeEventListener(
      "scroll",
      this.$refs.jobSkill.handleScroll,
      true
    );
    window.removeEventListener(
      "scroll",
      this.$refs.fixedNav.handleScroll,
      true
    );
    //全局变量homeScroll默认为0 离开页面时 记录当前的页面滚动值
    this.$homeScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    next();
  },
};
</script>

<style lang="less" scope>
.home {
  position: relative;
  width: 100%;
  // scroll-behavior: smooth;
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
  background: url("@{url-prefix}/bg.jpg");
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
.beian {
  position: absolute;
  bottom: 0;
  background-color: #030910;
  height: 50px;
  width: 100%;
  line-height: 50px;
  text-align: center;
  a:hover {
    color: orange;
  }
}
</style>
