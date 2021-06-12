<template>
  <div class="contact_way">
    <div class="contact_way_title"></div>
    <div class="contact_way_main">
      <div
        v-for="(item, index) in iconArray"
        :key="index"
        class="contact_way_main_item"
      >
        <div class="contact_way_main_icon" :class="[item.icon]"></div>
        <div class="contact_way_main_text">{{ item.text }}</div>
      </div>
    </div>
    <div class="qr_code"></div>
  </div>
</template>

<script>
export default {
  name: "contact_way",
  data() {
    return {
      iconArray: [
        { icon: "icon1", text: "15918798195" },
        { icon: "icon2", text: "15918798195" },
        { icon: "icon3", text: "977813717@qq.com" },
        { icon: "icon4", text: "小小皮在此" },
      ],
    };
  },
};
</script>

<style lang="less" scope>
.contact_way {
  position: relative;
  width: 100%;
  height: 936px;
  background-color: #030910;
  .contact_way_title {
    position: absolute;
    top: 99px;
    left: 237px;
    background: url(../assets/images/Group_4.jpg);
    background-size: cover;
    height: 140px;
    width: 498px;
  }
  .contact_way_main {
    position: absolute;
    top: 366px;
    left: 360px;
    width: 284px;
    height: 371px;
    .contact_way_main_item {
      display: flex;
      height: 65px;
      margin-bottom: 37px;
      .contact_way_main_icon {
        width: 65px;
        height: 65px;
        border-radius: 50%;
        background-color: #282f32;
      }
      .contact_way_main_text {
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 65px;
        margin-left: 32px;
        color: #ffffff;
      }
    }
  }
  .qr_code {
    position: absolute;
    top: 395px;
    right: 228px;
    width: 390px;
    height: 390px;
    background: url(../assets/images/QR_Code.jpg);
    background-size: cover;
  }
}
</style>