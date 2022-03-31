<template>
  <div class="project_experience">
    <div class="project_experience_title"></div>
    <div class="project_experience_nav">
      <div
        v-for="(item, index) in classNameList"
        :key="index"
        class="project_experience_nav_item"
        :class="isActive == index ? 'active' : ''"
        @click="navItemClick(index)"
      >
        {{ item.name }}
      </div>
    </div>
    <div
      v-for="(item, index) in classNameList"
      :key="index"
      class="project_list"
      v-show="isActive == index"
    >
      <div
        v-for="(imgItem, imgIndex) in item.imgList"
        :key="imgIndex"
        class="project_item"
        :style="{
          'background-image': `url(${$cdnUrl}/project/${imgItem}.jpg)`,
        }"
        @click="projectItemClick(imgItem)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "project_experience",
  data() {
    return {
      classNameList: [
        { name: "iOOQi", imgList: ["iOOQi", "yddh"] },
        {
          name: "冠袋桌球",
          imgList: [
            "goodaiMini",
            "goodaiGuanlixt",
            "goodaiGw",
            "goodaiSjApp",
            "goodaiYhdd",
          ],
        },
        { name: "普惠健康", imgList: ["phjk"] },
        { name: "赚钱宝", imgList: ["zqb"] },
        { name: "立刻健康", imgList: ["lkjk"] },
        { name: "organic work", imgList: ["ow"] },
        { name: "金洛克智能锁", imgList: ["jlk"] },
      ],
      isActive: 0,
    };
  },
  methods: {
    navItemClick(index) {
      this.isActive = index;
    },
    projectItemClick(name) {
      if (name == "goodaiGw") {
        window.location.href = "http://www.phelink.com/";
        return false;
      }
      this.$router.push({ name });
    },
  },
};
</script>

<style lang="less" scope>
.project_experience {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #030910;
  .project_experience_title {
    position: absolute;
    top: 108px;
    right: 256px;
    background: url("@{url-prefix}/Group_2.png");
    background-size: cover;
    height: 140px;
    width: 498px;
  }
  .project_experience_nav {
    position: relative;
    top: 336px;
    left: 50%;
    display: flex;
    justify-content: space-between;
    transform: translate(-50%, 0);
    width: 1200px;
    height: 32px;
    .project_experience_nav_item {
      cursor: pointer;
      font-size: 24px;
      line-height: 26px;
      color: #67696f;
    }
    .project_experience_nav_item:hover {
      color: #fff;
    }
    .active {
      font-size: 30px;
      color: #fff;
    }
  }
  .project_list {
    margin: 376px auto 0;
    width: 1200px;
    animation: opacity 1s;
    -moz-animation: opacity 1s; /* Firefox */
    -webkit-animation: opacity 1s; /* Safari and Chrome */
    -o-animation: opacity 1s; /* Opera */
    animation-iteration-count: 1; /*动画只执行一次*/
    -moz-animation-iteration-count: 1;
    -webkit-animation-iteration-count: 1;
    -o-animation-iteration-count: 1;
    .project_item {
      cursor: pointer;
      width: 100%;
      height: 500px;
      margin-bottom: 66px;
      background-color: #000000;
      background-repeat: no-repeat;
      background-size: cover;
      mix-blend-mode: normal;
      border: 16px solid #24262d;
      box-shadow: 2px 3px 6px 2px rgba(0, 0, 0, 0.25);
      background-size: cover;
    }
    .project_item:hover {
      border: 16px solid #5d616d;
    }
  }
  // .list_transiton {
  //   opacity: 1;
  // }
  @keyframes opacity {
    /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>