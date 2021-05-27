<template>
  <div class="main">
    <img src="../static/contact.jpg" alt class="img1" />
    <h3>我们在那里为您服务！</h3>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="Heytex 布兰切有限责任公司" name="1">
        Heytex 布兰切有限责任公司
        <br />Heytex集团公司
        <br />Heywinkelstr. 1
        <br />49565 Bramsche
        <br />德国
        <br />常务董事: Hans-Dieter Kohake, Josef H. Kagon
        <br />电话 +49 5468 7774-0
        <br />传真 +49 5468 7774-123
        <br />info@heytex.com
        <a href></a>
        <br />
        <a href="www.heytex.com">www.heytex.com</a>
      </van-collapse-item>
      <van-collapse-item title="Heytex 纽格斯多夫有限责任公司" name="2">
        Heytex 纽格斯多夫有限责任公司
        <br />Heytex集团公司
        <br />Nordstrasse 2
        <br />02727 Ebersbach-Neugersdorf
        <br />Deutschland
        <br />常务董事: Hans-Dieter Kohake
        <br />电话 +49 3586 7807-0
        <br />传真 +49 3586 7807-10
        <br />info@heytex.com
        <br />www.heytex.com
      </van-collapse-item>
      <van-collapse-item title="Heytex 技术纺织品 (张家港) Co. Ltd." name="3">
        Heytex 技术纺织品 (张家港) Co. Ltd.
        <br />Heytex集团公司
        <br />32, 新兴（中）路
        <br />张家港经济开发区（南区）
        <br />江苏省 215618
        <br />P.R. 中国
        <br />总经理: Bill Yu
        <br />电话: +86 512 5830 9315
        <br />传真 +86 512 5699 1002
        <br />china.office@heytex.com
        <br />www.heytex.com
      </van-collapse-item>
      <van-collapse-item title="Heytex 美国公司" name="4">
        Heytex 美国公司
        <br />Heytex集团公司
        <br />509 Burgis Avenue
        <br />P.O. Box 729
        <br />Pulaski, Virgina 24301
        <br />USA
        <br />常务董事: Mike Melton
        <br />手机: +1 540 980 2640
        <br />电话销售: +1 800 255 9338
        <br />电话国际销售: +1 540 980 4461
        <br />传真: +1 540 980 5636
        <br />info-usa@heytex.com
        <br />www.bondcote.com / www.heytex.com
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return { activeNames: ["1"] };
  },
  methods: {}
};
</script>
<style scoped>
.img1 {
  width: 90%;
  margin-top: 10px;
  margin-left: 5%;
}
.main {
  text-align: left;
  padding-bottom: 20px;
}
</style>