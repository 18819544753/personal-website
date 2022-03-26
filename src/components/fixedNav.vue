<template>
  <div class="fixed_nav">
    <div
      @mouseover="navItemMouseOver"
      @mouseout="navItemMouseOut"
      @click.stop="navItemClick"
      v-for="(item, index) in list"
      :key="index"
      :class="[item.className]"
    >
      {{ item.name }}
    </div>
    <div ref="move_active" class="move_active" style="top: 0"></div>
  </div>
</template>

<script>
export default {
  name: "move_active",
  data() {
    return {
      list: [
        { name: "工作技能", className: "fixed_nav_item_one" },
        { name: "项目经验", className: "fixed_nav_item_two" },
        { name: "其他作品", className: "fixed_nav_item_three" },
        { name: "联系方式", className: "fixed_nav_item_four" },
      ],
      moveActiveTop: "0px",
      currentClassName: "fixed_nav_item_one",
      isScorll: false,
      timeId: null,
    };
  },
  methods: {
    navItemMouseOver(e) {
      this.$refs.move_active.style.top = e.target.offsetTop + "px";
      document.querySelector(`.${e.target.className}`).style.color = "#000";
      this.list.map((item) => {
        if (e.target.className != item.className) {
          document.querySelector(`.${item.className}`).style.color = "#999";
        }
      });
    },
    navItemMouseOut() {
      this.$refs.move_active.style.top = this.moveActiveTop;
      document.querySelector(`.${this.currentClassName}`).style.color = "#000";
      this.list.map((item) => {
        if (this.currentClassName != item.className) {
          document.querySelector(`.${item.className}`).style.color = "#999";
        }
      });
    },
    navItemClick(e) {
      clearTimeout(this.timeId);
      this.isScorll = true;
      this.moveActiveTop = e.target.offsetTop + "px";
      this.$refs.move_active.style.top = e.target.offsetTop + "px";
      this.currentClassName = e.target.className;
      document.querySelector(`.${e.target.className}`).style.color = "#000";
      switch (e.target.className) {
        case "fixed_nav_item_one":
          document.querySelector(".job_skill").scrollIntoView({
            behavior: "smooth", // 平滑过渡
            block: "start", // 上边框与视窗顶部平齐。默认值
          });
          break;
        case "fixed_nav_item_two":
          document.querySelector(".project_experience").scrollIntoView({
            behavior: "smooth", // 平滑过渡
            block: "start", // 上边框与视窗顶部平齐。默认值
          });
          break;
        case "fixed_nav_item_three":
          document.querySelector(".other_works").scrollIntoView({
            behavior: "smooth", // 平滑过渡
            block: "start", // 上边框与视窗顶部平齐。默认值
          });
          break;
        case "fixed_nav_item_four":
          document.querySelector(".contact_way").scrollIntoView({
            behavior: "smooth", // 平滑过渡
            block: "start", // 上边框与视窗顶部平齐。默认值
          });
          break;
      }
      // this.$nextTick(() => {
      //   this.isScorll = false;
      // });
      this.timeId = setTimeout(() => {
        this.isScorll = false;
      }, 1000);
    },
    scrollChangeClass(className) {
      this.moveActiveTop =
        document.querySelector(`.${className}`).offsetTop + "px";
      this.$refs.move_active.style.top =
        document.querySelector(`.${className}`).offsetTop + "px";
      this.currentClassName = document.querySelector(`.${className}`).className;
      document.querySelector(
        `.${document.querySelector(`.${className}`).className}`
      ).style.color = "#000";
    },
    handleScroll(e) {
      // console.log(e);
      let oneTop = document.querySelector(".job_skill").offsetTop;
      let twoTop = document.querySelector(".project_experience").offsetTop;
      let threeTop = document.querySelector(".other_works").offsetTop;
      let fourTop = document.querySelector(".contact_way").offsetTop;
      // 是否显示固定定位右侧导航栏
      if (
        e.target.scrollTop > oneTop - 500 &&
        e.target.scrollTop < oneTop + 100
      ) {
        document.querySelector(".fixed_nav").className =
          "fixed_nav fixed_nav_transiton";
      } else if (e.target.scrollTop < oneTop - 500) {
        document.querySelector(".fixed_nav").className = "fixed_nav";
      }

      if (!this.isScorll) {
        // 滚动到工作技能
        if (e.target.scrollTop > oneTop && e.target.scrollTop < twoTop - 300) {
          this.scrollChangeClass("fixed_nav_item_one");
          this.navItemMouseOut();
        }
        // 滚动到项目经验
        else if (
          e.target.scrollTop > twoTop &&
          e.target.scrollTop < threeTop - 300
        ) {
          this.scrollChangeClass("fixed_nav_item_two");
          this.navItemMouseOut();
        }
        // 滚动到其他作品
        else if (
          e.target.scrollTop > threeTop - 300 &&
          e.target.scrollTop < fourTop - 300
        ) {
          this.scrollChangeClass("fixed_nav_item_three");
          this.navItemMouseOut();
        }
        // 滚动到联系方式
        else if (e.target.scrollTop > fourTop - 300) {
          this.scrollChangeClass("fixed_nav_item_four");
          this.navItemMouseOut();
        }
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll, true);
  },
};
</script>

<style lang="less" scope>
.fixed_nav {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  z-index: 9;
  top: 50%;
  right: 40px;
  // transform: translate(0, -50%);
  margin-top: -135px;
  height: 270px;
  width: 180px;
  opacity: 0;
  transition: transform 0.5s linear, opacity 0.5s linear;
  .fixed_nav_item_one,
  .fixed_nav_item_two,
  .fixed_nav_item_three,
  .fixed_nav_item_four {
    cursor: pointer;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    line-height: 40px;
    font-family: PingFang-SC-Light;
    font-weight: bold;
    font-size: 18px;
    color: #999;
    transition: all 0.5s;
    // text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  }
  .fixed_nav_item_one {
    color: #000;
  }
  .move_active {
    position: absolute;
    top: 0;
    width: 100%;
    height: 40px;
    background-color: #fff;
    box-shadow: 0px 1px 8px 2px rgba(194, 194, 194, 0.45);
    border-radius: 2px;
    color: #000;
    transition: all 0.5s;
  }
  // .fixed_nav_item:hover {
  //   background-color: #fff;
  //   box-shadow: 0px 1px 8px 2px rgba(194, 194, 194, 0.25);
  //   color: #000;
  //   transition: all 1s;
  // }
}
.fixed_nav_transiton {
  opacity: 1;
  transform: scale(1, 1);
}
</style>