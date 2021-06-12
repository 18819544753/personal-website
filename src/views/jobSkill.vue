<template>
  <div ref="job_skill" class="job_skill">
    <div class="job_skill_title"></div>
    <ul class="default_job_skill_list">
      <li
        class="job_skill_item"
        v-for="(item, index) in btnArray"
        :key="index"
        :class="[item]"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "job_skill",
  data() {
    return {
      btnArray: [
        "icon1",
        "icon2",
        "icon3",
        "icon4",
        "icon5",
        "icon6",
        "icon7",
        "icon8",
      ],
    };
  },
  methods: {
    handleScroll(e) {
      // console.log(document.querySelector(".job_skill>ul").offsetTop);
      let skillListTop = document.querySelector(".job_skill>ul").offsetTop;
      if (
        e.target.scrollTop > skillListTop + 300 &&
        e.target.scrollTop < skillListTop + 400
      ) {
        document.querySelector(".job_skill>ul").className = "job_skill_list";
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
};
</script>

<style lang="less" scope>
.job_skill {
  position: relative;
  margin-top: 400px;
  width: 100%;
  height: 852px;
  .job_skill_title {
    position: absolute;
    top: 99px;
    left: 237px;
    background: url(../assets/images/Group_1.jpg);
    background-size: cover;
    height: 140px;
    width: 498px;
  }
  .default_job_skill_list {
    position: absolute;
    top: 459px;
    left: 50%;
  }
  .job_skill_list {
    position: absolute;
    top: 459px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 1920px;
    height: 100px;
    .job_skill_item {
      position: absolute;
      top: 0;
      left: 1920px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-repeat: no-repeat;
      animation-iteration-count: 1; /*动画只执行一次*/
      -moz-animation-iteration-count: 1;
      -webkit-animation-iteration-count: 1;
      -o-animation-iteration-count: 1;
      // animation-timing-function: ease-in-out;
      // -moz-animation-timing-function: ease-in-out;
      // -webkit-animation-timing-function: ease-in-out;
      // -o-animation-timing-function: ease-in-out;
    }
    @keyframes iconmove1 {
      0% {
        left: 1920px;
      }
      50% {
        left: 330px;
      }
      100% {
        left: 360px;
      }
    }
    @keyframes iconmove2 {
      0% {
        left: 2077px;
      }
      50% {
        left: 487px;
      }
      100% {
        left: 517px;
      }
    }
    @keyframes iconmove3 {
      0% {
        left: 2234px;
      }
      50% {
        left: 644px;
      }
      100% {
        left: 674px;
      }
    }
    @keyframes iconmove4 {
      0% {
        left: 2391px;
      }
      50% {
        left: 801px;
      }
      100% {
        left: 831px;
      }
    }
    @keyframes iconmove5 {
      0% {
        left: 2548px;
      }
      50% {
        left: 958px;
      }
      100% {
        left: 988px;
      }
    }
    @keyframes iconmove6 {
      0% {
        left: 2705px;
      }
      50% {
        left: 1115px;
      }
      100% {
        left: 1145px;
      }
    }
    @keyframes iconmove7 {
      0% {
        left: 2862px;
      }
      50% {
        left: 1272px;
      }
      100% {
        left: 1302px;
      }
    }
    @keyframes iconmove8 {
      0% {
        left: 3019px;
      }
      50% {
        left: 1429px;
      }
      100% {
        left: 1459px;
      }
    }

    .icon1 {
      animation: iconmove1 0.4s;
      -moz-animation: iconmove1 0.4s; /* Firefox */
      -webkit-animation: iconmove1 0.4s; /* Safari and Chrome */
      -o-animation: iconmove1 0.4s; /* Opera */
      animation-fill-mode: forwards;
      -moz-animation-fill-mode: forwards;
      -webkit-animation-fill-mode: forwards;
      -o-animation-fill-mode: forwards;
      background: url(../assets/images/iconImg/icon1.png);
      background-size: cover;
    }
    .icon2 {
      animation: iconmove2 0.4s;
      -moz-animation: iconmove2 0.4s; /* Firefox */
      -webkit-animation: iconmove2 0.4s; /* Safari and Chrome */
      -o-animation: iconmove2 0.4s; /* Opera */
      animation-delay: 0.2s;
      -moz-animation-delay: 0.2s;
      -webkit-animation-delay: 0.2s;
      -o-animation-delay: 0.2s;
      animation-fill-mode: forwards;
      -moz-animation-fill-mode: forwards;
      -webkit-animation-fill-mode: forwards;
      -o-animation-fill-mode: forwards;
      background: url(../assets/images/iconImg/icon2.png);
      background-size: cover;
    }
    .icon3 {
      animation: iconmove3 0.4s;
      -moz-animation: iconmove3 0.4s; /* Firefox */
      -webkit-animation: iconmove3 0.4s; /* Safari and Chrome */
      -o-animation: iconmove3 0.4s; /* Opera */
      animation-delay: 0.4s;
      -moz-animation-delay: 0.4s;
      -webkit-animation-delay: 0.4s;
      -o-animation-delay: 0.4s;
      animation-fill-mode: forwards;
      -moz-animation-fill-mode: forwards;
      -webkit-animation-fill-mode: forwards;
      -o-animation-fill-mode: forwards;
      background: url(../assets/images/iconImg/icon3.png);
      background-size: cover;
    }
    .icon4 {
      animation: iconmove4 0.4s;
      -moz-animation: iconmove4 0.4s; /* Firefox */
      -webkit-animation: iconmove4 0.4s; /* Safari and Chrome */
      -o-animation: iconmove4 0.4s; /* Opera */
      animation-delay: 0.6s;
      -moz-animation-delay: 0.6s;
      -webkit-animation-delay: 0.6s;
      -o-animation-delay: 0.6s;
      animation-fill-mode: forwards;
      -moz-animation-fill-mode: forwards;
      -webkit-animation-fill-mode: forwards;
      -o-animation-fill-mode: forwards;
      background: url(../assets/images/iconImg/icon4.png);
      background-size: cover;
    }
    .icon5 {
      animation: iconmove5 0.4s;
      -moz-animation: iconmove5 0.4s; /* Firefox */
      -webkit-animation: iconmove5 0.4s; /* Safari and Chrome */
      -o-animation: iconmove5 0.4s; /* Opera */
      animation-delay: 0.8s;
      -moz-animation-delay: 0.8s;
      -webkit-animation-delay: 0.8s;
      -o-animation-delay: 0.8s;
      animation-fill-mode: forwards;
      -moz-animation-fill-mode: forwards;
      -webkit-animation-fill-mode: forwards;
      -o-animation-fill-mode: forwards;
      background: url(../assets/images/iconImg/icon5.png);
      background-size: cover;
    }
    .icon6 {
      animation: iconmove6 0.4s;
      -moz-animation: iconmove6 0.4s; /* Firefox */
      -webkit-animation: iconmove6 0.4s; /* Safari and Chrome */
      -o-animation: iconmove6 0.4s; /* Opera */
      animation-delay: 1s;
      -moz-animation-delay: 1s;
      -webkit-animation-delay: 1s;
      -o-animation-delay: 1s;
      animation-fill-mode: forwards;
      -moz-animation-fill-mode: forwards;
      -webkit-animation-fill-mode: forwards;
      -o-animation-fill-mode: forwards;
      background: url(../assets/images/iconImg/icon6.png);
      background-size: cover;
    }
    .icon7 {
      animation: iconmove7 0.4s;
      -moz-animation: iconmove7 0.4s; /* Firefox */
      -webkit-animation: iconmove7 0.4s; /* Safari and Chrome */
      -o-animation: iconmove7 0.4s; /* Opera */
      animation-delay: 1.2s;
      -moz-animation-delay: 1.2s;
      -webkit-animation-delay: 1.2s;
      -o-animation-delay: 1.2s;
      animation-fill-mode: forwards;
      -moz-animation-fill-mode: forwards;
      -webkit-animation-fill-mode: forwards;
      -o-animation-fill-mode: forwards;
      background: url(../assets/images/iconImg/icon7.png);
      background-size: cover;
    }
    .icon8 {
      animation: iconmove8 0.4s;
      -moz-animation: iconmove8 0.4s; /* Firefox */
      -webkit-animation: iconmove8 0.4s; /* Safari and Chrome */
      -o-animation: iconmove8 0.4s; /* Opera */
      animation-delay: 1.4s;
      -moz-animation-delay: 1.4s;
      -webkit-animation-delay: 1.4s;
      -o-animation-delay: 1.4s;
      animation-fill-mode: forwards;
      -moz-animation-fill-mode: forwards;
      -webkit-animation-fill-mode: forwards;
      -o-animation-fill-mode: forwards;
      background: url(../assets/images/iconImg/icon8.png);
      background-size: cover;
    }
  }
}
.job_skill::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #030910;
}
</style>