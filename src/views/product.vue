<template>
  <div class="about">
    <van-cell-group>
      <van-cell title="title" value="时间" label="描述信息" :border="false" />
    </van-cell-group>
    <div class="content">
      <van-grid  column-num="3">
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
      </van-grid>
      <van-grid  column-num="3">
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
      </van-grid>
    </div>

    <div class="mypglist">
        <van-button type="default">下一页</van-button>
        <p>{{1}}页/共{{5}}页</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
</style>