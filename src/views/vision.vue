<template>
  <div class="about">
    <van-cell-group>
      <van-cell title="title" value="时间" label="描述信息" :border="false" />
    </van-cell-group>
    <img src="../static/banner1.jpg" alt style="width:90%;margin-top:50px" />
    <div class="content">
      <!-- <h4>我們的願景</h4> -->
      <van-divider dashed contentPosition="center" bordercolor="#1989fa">我們的願景</van-divider>
      <p class="contentp">我們在世界範圍內開發和生產高質量，功能化，技術紡織品方面排名第一。我們通過創新的產品和流程設定標準，旨在為客戶和社會帶來最大利益。</p>
      <van-divider dashed contentPosition="center" bordercolor="#1989fa">我們的指導原則</van-divider>
      <p
        class="contentp"
      >我們相信，尊重生活中的交流和互動對生活的各個方面都是至關重要的。因此，我們致力於執行某些既定原則。我們公司的所有員工都遵守這些準則。我們還要求我們的業務合作夥伴遵守這些核心準則，我們將其理解為建立持久和成功業務關係的基礎。</p>
      <ul class="contentlist">
        <li>
          公約:
          <br />國際人權是我們公司形像不可或缺的一部分。
        </li>
        <li>
          公約:
          <br />國際人權是我們公司形像不可或缺的一部分。
        </li>
        <li>
          公約:
          <br />國際人權是我們公司形像不可或缺的一部分。
        </li>
      </ul>
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
.contentp {
  text-align: left !important;
  text-indent: 2rem;
  padding: 1rem;
}
.contentlist {
  text-align: left !important;
  padding: 1rem;
}

</style>