<template>
  <div class="about">
    <van-cell-group>
      <van-cell title="企业历史" value="当前位置：HEYTEX/企业历史" :border="false" />
    </van-cell-group>
    <img src="../static/history.png" alt style="width:90%;margin-top:50px" />
    <div class="content">
      <h4>最初是紗線</h4>
      <p>
最初是纱线和有远见的企业家。朱利叶斯·海温克尔（Julius Heywinkel）于1913年在奥斯纳布吕克（Osnabruck）成立了一家帆布织造厂。创始人向公司敞开了通往世界的大门。扩张，创新，变革：今天的Heytex集团始终以某种方式运转。在像技术纺织品这样高度活跃的行业中，这也是成功的原因之一。 Heytex拥有四个子公司和全面的产品组合，在当今的技术纺织品世界市场上占据着举足轻重的地位，在经验，专业知识和创新方面提供了理想的条件，从而又取得了100年的成功！ </p>    </div>

    <!-- <div class="content">
      <van-collapse v-model="activeNames">
        <van-collapse-item title="开端" name="1">
          <ul><li></li></ul>
        </van-collapse-item>
        <van-collapse-item title="专业化" name="2">网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</van-collapse-item>
        <van-collapse-item title="扩张" name="3">线上拓客，随时预约，贴心顺手的开单收银</van-collapse-item>
        <van-collapse-item title="结构化" name="4">线上拓客，随时预约，贴心顺手的开单收银</van-collapse-item>
      </van-collapse>
    </div>-->
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
  padding: 5px;
}
.about {
  padding-bottom: 20px;
}
</style>