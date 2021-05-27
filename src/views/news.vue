<template>
  <div class="about">
    <van-cell-group>
      <van-cell title="新闻列表" value="当前位置：HRYTEX/新闻列表" :border="false" />
    </van-cell-group>
    <div class="content">
      <van-grid column-num="1">
        <van-grid-item
          v-for="(item,index) in newslist"
          :key="index"
          @click="todetail(item.rowguid)"
        >
          <img
            :src="'http://10.167.0.12:7001/api/basic/accessoryinfo/image?rowguid=' +item.imgguid.split(',')[0]"
            alt
            class="newimg"
          />
          <h5>{{item.title}}</h5>
          <p class="subtitle">{{item.subtitle}}</p>
          <!--          <div v-html="item.content"></div>-->
          <p class="time">{{item.articletime?$util.datestampToDate(item.articletime):''}}</p>
        </van-grid-item>
      </van-grid>
    </div>

    <div class="mypglist">
      <van-button type="default" @click="changeup()" v-if="showupbtn">上一页</van-button>
      <p>第{{page}}页 / 共 {{total}} 页</p>
      <van-button type="default" @click="changedown()">下一页</van-button>
    </div>

    <div>
      <van-divider contentPosition="center">推荐</van-divider>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item,index) in list" :key="index" @click="todetail(item.rowguid)">
          <img :src="item.imgguid" alt class="listimg" />
          <h4 class="listtitle">{{item.title}}</h4>
          <!-- <p class="listsubtitle">{{item.subtitle}}</p> -->
        </van-swipe-item>
      </van-swipe>
      <!-- <van-grid direction="horizontal" column-num="2">
        <div
          icon="photo-o"
          text="文字"
          v-for="(item,index) in list"
          :key="index"
          class="recomentlist"
          @click="todetail(item.rowguid)"
        >
          <img :src="item.imgguid" alt class="listimg" />

          <h4 class="listtitle">{{item.title}}</h4>
          <p class="listsubtitle">{{item.subtitle}}</p>
        </div>
      </van-grid>-->
    </div>
  </div>
</template>
<script>
import { newsapi, homenewsapi } from "@/api/api.js";
export default {
  data() {
    return {
      newslist: [{ label: 123 }],
      page: 1,
      total: 0,
      showupbtn: false,
      list: []
    };
  },
  created() {
    newsapi().then(res => {
      this.newslist = res.data.items;
      this.total = Math.ceil(res.data.total / 6);
    });
    homenewsapi().then(res => {
      console.log(res);
      this.list = res.data;
      for (var i = 0; i < this.list.length; i++) {
        this.list[i].imgguid =
          "http://10.167.0.12:7001/api/basic/accessoryinfo/image?rowguid=" +
          this.list[i].imgguid.slice(0, this.list[i].imgguid.length - 1);
      }
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
    todetail(e) {
      this.$router.push("/newsdetail?" + e);
      this.$router.go(0);
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
.newimg {
  width: 100%;
  /*height: 200px;*/
}
.recomentlist {
  text-align: center;
  width: 40%;
  margin-left: 5%;
  margin-top: 10px;
  border: 1px solid rgb(240, 238, 238);
}
.listimg {
  width: 40%;
  margin-left: 5%;
  margin-top: 5px;
  height: 100px;
}
</style>
