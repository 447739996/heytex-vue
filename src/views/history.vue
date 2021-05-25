<template>
  <div class="about">
    <van-cell-group>
      <van-cell title="企业历史" value="当前位置：HEYTEX/企业历史"  :border="false" />
    </van-cell-group>
    <img src="../static/banner1.jpg" alt style="width:90%;margin-top:50px" />
    <div class="content">
      <h4>title</h4>
      <p>contnet</p>
    </div>

    <div class="content">
      <van-collapse v-model="activeNames">
        <van-collapse-item title="地址" name="1">提供多样店铺模板，快速搭建网上商城</van-collapse-item>
        <van-collapse-item title="主要产品" name="2">网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</van-collapse-item>
        <van-collapse-item title="资格证书" name="3">线上拓客，随时预约，贴心顺手的开单收银</van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: []
    };
  }
};
</script>
<style scoped>
.content {
  width: 90%;
  margin-left: 5%;
  border: 1px solid rgb(184, 184, 184);
  margin-top: 20px;
}
</style>