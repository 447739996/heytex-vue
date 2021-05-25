<template>
  <div class="about">
    <van-cell-group>
      <van-cell title="新闻列表" value="当前位置：HRYTEX/新闻列表"  :border="false" />
    </van-cell-group>
    <div class="content">
      <van-grid column-num="2">
        <van-grid-item v-for="(item,index) in newslist" :key="index" @click="todetail(item.rowguid)">
          <h4>{{item.title}}</h4>
          <p v-html="item.content"></p>
          <p
            class="time"
          >{{item.operatetime.dayOfMonth}} {{item.operatetime.month}} {{item.operatetime.year}}</p>
        </van-grid-item>
      </van-grid>
    </div>

    <div class="mypglist">
      <van-button type="default" @click="changeup()" v-if="showupbtn">上一页</van-button>
      <van-button type="default" @click="changedown()">下一页</van-button>
      <p>{{page}}页/共{{total}}页</p>
    </div>

     <div>
      <van-divider contentPosition="center">推荐</van-divider>
      <van-grid direction="horizontal" column-num="2">
        <van-grid-item icon="photo-o" text="文字" v-for="(item,index) in list" :key="index">
            <h4 class="listtitle">{{item.title}}</h4>
            <p class="listsubtitle">{{item.subtitle}}</p>
            <p class="listoperatetime">{{item.operatetime}}</p>
        </van-grid-item>
      </van-grid>
    </div>


  </div>
</template>
<script>
import { newsapi } from "@/api/api.js";
export default {
  data() {
    return {
      newslist: [{ label: 123 }],
      page: 1,
      total: 0,
      showupbtn: false,
      list:[],
    };
  },
  created() {
    newsapi().then(res => {
      this.newslist = res.data.items;
      this.total = Math.ceil(res.data.total / 6);
    });
  },
  methods: {
    changedown() {
      if (this.page == this.total) {
        this.$toast({
          message: "已经到底了"
        });
      } else {
        this.page += 1;
        newsapi(this.page + 1).then(res => {
          this.newslist = res.data.items;
          this.showupbtn = true;
        });
      }
    },
    changeup() {
      if (this.page == this.total) {
        this.showupbtn = false;
      } else {
        newsapi(this.page - 1).then(res => {
          this.newslist = res.data.items;
        });
      }
    },
    todetail(e){
             this.$router.push("/newsdetail?" + e);
 
    }
  }
};
</script>
<style scoped>
.time {
  width: 100%;
  text-align: right;
  font-size: 0.5rem;
  color: rgb(180, 179, 179);
}
</style>