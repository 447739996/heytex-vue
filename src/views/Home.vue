<template>
  <div class="home">
    <div class="content">
      <van-cell-group>
        <van-field
          v-model="searchvalue"
          center
          style="margin-bottom:10px"
          clearable
          placeholder="搜索文章/新闻"
          use-button-slot
        >
          <van-button slot="button" size="small" color="#526e77" @click="search()">搜索</van-button>
        </van-field>
      </van-cell-group>
      <van-swipe :autoplay="3000">
        <van-swipe-item>
          <img src="../static/banner1.jpg" class="bannerimg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../static/banner1.jpg" class="bannerimg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../static/banner1.jpg" class="bannerimg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../static/banner1.jpg" class="bannerimg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../static/banner1.jpg" class="bannerimg" alt />
        </van-swipe-item>
      </van-swipe>
      <van-divider contentPosition="left" class="secondtitle">核心价值观</van-divider>
      <p class="mainpoint">Heytex在開發和生產高質量的功能化技術紡織品方面是世界第一。我們通過創新產品和流程設定標準，旨在最大程度地為我們的客戶和社會帶來收益。</p>
      <van-divider contentPosition="left" class="secondtitle">实时新闻</van-divider>
      <p>新闻前言……</p>
      <video width="100%" height="240" controls>
        <source
          src="//ueditor-1256550520.cos.ap-nanjing.myqcloud.com/storage/video/20210518/1621319673801.mp4"
          type="video/mp4"
        />
      </video>
      <van-divider contentPosition="left" class="secondtitle">新闻</van-divider>
      <van-grid column-num="2">
        <van-grid-item v-for="(item,index) in newslist" :key="index">
          <img :src="item.imgguid" alt class="newimg" />
          <h4>{{item.title}}</h4>
          <p class="subtitle">{{item.subtitle}}</p>
          <div v-html="item.content"></div>
          <p class="time">{{item.articletime}}</p>
        </van-grid-item>
      </van-grid>
      <!-- <van-divider contentPosition="center">文章推荐</van-divider>
      <van-row gutter="20" class="homearticlelist">
        <van-col span="8" v-for="(item,index) in homearticlelist" :key="index">
          <h5>{{item.title}}</h5>
          <img src="../static/banner1.jpg" alt style="width:80%;margin-left:10%" />
          <p>{{item.subtitle}}</p>
          <div v-html="item.content"></div>
        </van-col>
      </van-row>-->
      <van-divider contentPosition="left" class="secondtitle">四大公司</van-divider>
      <van-grid column-num="2">
        <div></div>
        <van-grid-item icon="photo-o" text="张家港公司">
          <img src="../static/company1.jpg" alt class="homecompanyimg" />
          <a href="/location">Heytex集团的总部</a>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="张家港公司">
          <img src="../static/company2.png" alt class="homecompanyimg" />
          <a href="/location">纽格斯多夫</a>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="张家港公司">
          <img src="../static/company3.png" alt class="homecompanyimg" />
          <a href="/location">中国张家港分公司</a>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="张家港公司">
          <img src="../static/company4.jpg" alt class="homecompanyimg" />
          <a href="/location">美國公司</a>
        </van-grid-item>
      </van-grid>

      <van-divider contentPosition="left" class="secondtitle">位置</van-divider>
      <img src="../static/map.jpg" style="width:100%;" alt />

      <van-divider contentPosition="left" class="secondtitle">代表作品</van-divider>
      <van-list finished-text="没有更多了">
        <van-cell
          v-for="(item1,index1) in goodproductlist"
          :key="item1"
          icon="flag-o"
          :title="item1.name"
          style="text-align:left"
          @click="toproduct(index1)"
        />
      </van-list>
    </div>
  </div>
</template>

<script>
import { homenewsapi, homegoodproductapi, homearticleapi } from "@/api/api.js";
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  data() {
    return {
      searchvalue: "",
      newslist: [],
      goodproductlist: [],
      homearticlelist: []
    };
  },
  created() {
    homenewsapi().then(res => {
      console.log(res);
      this.newslist = res.data;
      for (var i = 0; i <= this.newslist.length; i++) {
        this.newslist[i].imgguid = this.newslist[i].imgguid.slice(
          0,
          this.newslist[i].imgguid.length - 1
        );
        this.newslist[i].imgguid =
          "http://10.167.0.12:7001/api/basic/accessoryinfo/image?rowguid=" +
          this.newslist[i].imgguid;
      }
    });
    homegoodproductapi().then(res => {
      console.log(res);
      this.goodproductlist = res.data;
    });
    homearticleapi().then(res => {
      console.log(res);
      this.homearticlelist = res.data;
    });
  },
  methods: {
    search() {
      this.$router.push("/search?" + this.searchvalue);
    },
    toproduct(index) {
      this.$router.push("/article?" + this.goodproductlist[index].rowguid);
    }
  }
};
</script>
<style scoped>
.homecompanyimg {
  width: 90%;
}
.secondtitle {
  color: #526e77;
  font-size: 1.1rem;
  font-weight: bold;
}
.homearticlelist {
  overflow: scroll;
  width: 100%;
}
.bannerimg {
  width: 100%;
  height: 250px;
}
.content {
  width: 90%;
  margin-left: 5%;
  background-color: #fff;
  padding-bottom: 20px;
}
.home {
  background-color: rgb(192, 192, 192);
}
.time {
  color: rgb(175, 175, 175);
  text-align: right;
  line-height: 0.5rem;
  width: 100%;
  font-size: 0.5rem;
}
.subtitle {
  font-size: 0.7rem;
  width: 100%;
  text-align: left;
}
.newimg {
  width: 80%;
  height: 150px;
}
.mainpoint{
  width: 80%;
  margin-left: 10%;
  text-align: left;
  font-size: 1.2rem;
  font-style: italic;
  color: #7c7c7c;
  border-left: 10px solid #526e77 ;
  padding-left: 10px;
}
</style>
