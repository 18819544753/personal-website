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
    <div class="goodai_list" v-show="isActive == 0">
      <div class="goodai_item_one"></div>
      <div class="goodai_item_two"></div>
      <div class="goodai_item_three"></div>
      <div class="goodai_item_four"></div>
      <div class="goodai_item_five"></div>
    </div>
    <div class="goodai_list" v-show="isActive == 1">
      <!-- <div class="goodai_item_one"></div>
      <div class="goodai_item_two"></div> -->
      <div class="goodai_item_three"></div>
      <div class="goodai_item_four"></div>
      <div class="goodai_item_five"></div>
    </div>
    <div class="goodai_list" v-show="isActive == 2">
      <!-- <div class="goodai_item_one"></div>
      <div class="goodai_item_two"></div> -->
      <div class="goodai_item_three"></div>
      <div class="goodai_item_four"></div>
      <div class="goodai_item_five"></div>
    </div>
    <div class="goodai_list" v-show="isActive == 3">
      <!-- <div class="goodai_item_one"></div>
      <div class="goodai_item_two"></div> -->
      <div class="goodai_item_three"></div>
      <div class="goodai_item_four"></div>
      <div class="goodai_item_five"></div>
    </div>
    <div class="goodai_list" v-show="isActive == 4">
      <!-- <div class="goodai_item_one"></div>
      <div class="goodai_item_two"></div> -->
      <div class="goodai_item_three"></div>
      <div class="goodai_item_four"></div>
      <div class="goodai_item_five"></div>
    </div>
    <div class="goodai_list" v-show="isActive == 5">
      <!-- <div class="goodai_item_one"></div>
      <div class="goodai_item_two"></div> -->
      <div class="goodai_item_three"></div>
      <div class="goodai_item_four"></div>
      <div class="goodai_item_five"></div>
    </div>
    <div class="goodai_list" v-show="isActive == 6">
      <!-- <div class="goodai_item_one"></div>
      <div class="goodai_item_two"></div> -->
      <div class="goodai_item_three"></div>
      <div class="goodai_item_four"></div>
      <div class="goodai_item_five"></div>
    </div>
    <div class="goodai_list" v-show="isActive == 7">
      <!-- <div class="goodai_item_one"></div>
      <div class="goodai_item_two"></div> -->
      <div class="goodai_item_three"></div>
      <div class="goodai_item_four"></div>
      <div class="goodai_item_five"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "project_experience",
  data() {
    return {
      classNameList: [
        { name: "冠袋桌球" },
        { name: "立刻健康" },
        { name: "赚钱宝" },
        { name: "普惠健康" },
        { name: "organic work" },
        { name: "金洛克智能锁" },
        { name: "WAX" },
      ],
      isActive: 0,
    };
  },
  methods: {
    navItemClick(index) {
      this.isActive = index;
      // console.log(document.querySelector(`.goodai_list`).className);
      // document.querySelector(`.goodai_list`).className = "goodai_list";
      // document.querySelector(`.goodai_list`).className =
      //   "goodai_list list_transiton";
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
    background: url(../assets/images/Group_2.png);
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
  .goodai_list {
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
    .goodai_item_one,
    .goodai_item_two,
    .goodai_item_three,
    .goodai_item_four,
    .goodai_item_five {
      cursor: pointer;
      width: 100%;
      height: 500px;
      margin-bottom: 66px;
      background: url(../assets/images/goodai_1.jpg) #000000;
      background-size: cover;
      mix-blend-mode: normal;
      border: 16px solid #24262d;
      box-shadow: 2px 3px 6px 2px rgba(0, 0, 0, 0.25);
    }
    .goodai_item_one:hover,
    .goodai_item_two:hover,
    .goodai_item_three:hover,
    .goodai_item_four:hover,
    .goodai_item_five:hover {
      border: 16px solid #5d616d;
    }
    .goodai_item_two {
      background: url(../assets/images/goodai_2.jpg) #000000;
      background-size: cover;
    }
    .goodai_item_three {
      background: url(../assets/images/goodai_3.jpg) #000000;
      background-size: cover;
    }
    .goodai_item_four {
      background: url(../assets/images/goodai_4.jpg) #000000;
      background-size: cover;
    }
    .goodai_item_five {
      background: url(../assets/images/goodai_5.jpg) #000000;
      background-size: cover;
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