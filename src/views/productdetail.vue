<template>
  <div class="about">
    <van-cell-group>
      <van-cell title="title" value="时间" label="描述信息" :border="false" />
    </van-cell-group>
    <img src="../static/banner1.jpg" alt style="width:90%;margin-top:50px" />
    <div class="content">
      <h4>title</h4>
      <p>contnet</p>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.content {
  width: 90%;
  margin-left: 5%;
  border: 1px solid rgb(184, 184, 184);
  margin-top: 20px;
}
</style>