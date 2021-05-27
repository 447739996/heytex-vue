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
          <img src="../static/slider.jpg" class="bannerimg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../static/slider2.jpg" class="bannerimg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../static/slider8.jpg" class="bannerimg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../static/slider4.jpg" class="bannerimg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../static/slider5.jpg" class="bannerimg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../static/slider3.jpg" class="bannerimg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../static/slider7.jpg" class="bannerimg" alt />
        </van-swipe-item>
        <!-- <van-swipe-item>
          <img src="../static/slider3.png" class="bannerimg" alt />
        </van-swipe-item>-->
        <!-- <van-swipe-item>
          <img src="../static/banner8.jpg" class="bannerimg" alt />
        </van-swipe-item>-->
      </van-swipe>
      <!-- <van-divider contentPosition="left" class="secondtitle">核心价值观</van-divider> -->
      <van-divider contentPosition="center">海德思价值观</van-divider>
      <p class="mainpoint">
        我们遵循以人为本、尊重自然、珍惜资源。
        <br />我们以平等、感激的心对待每一个人。
        <br />我们接受文化差异并将其视为一种机会。
        <br />我们尽最大的努力高效利用资源，确保把对自然和环境的影响降到最小。
      </p>
      <van-divider contentPosition="center">海德思愿景</van-divider>

      <p class="mainpoint">海德思是开发和生产高品质功能性涂层纺织品及设定旨在提高客户和社会效益的行业标准的市场领导者。</p>
      <van-divider contentPosition="center">海德思使命</van-divider>
      <p class="mainpoint">海德思在各工厂生产涂层和贴合功能化的工业用纺织品，并在全球范围内出售高附加值产品给客户。海德思专注于开发创新应用及建立全球合作网络。</p>
      <van-divider contentPosition="left" class="secondtitle">实时新闻</van-divider>
      <p>——关于HEYTEX的视频介绍。——</p>
      <video width="100%" height="240" controls>
        <source
          src="//ueditor-1256550520.cos.ap-nanjing.myqcloud.com/storage/video/20210518/1621319673801.mp4"
          type="video/mp4"
        />
      </video>
      <div v-if="articlelist&&articlelist.length!=0">
        <van-divider contentPosition="left" class="secondtitle">文章推荐</van-divider>
        <van-grid column-num="2" class="reclistcontainer">
          <van-grid-item
            v-for="(item,index) in articlelist[0]"
            :key="index"
            @click="toarticle(item.catalogguid,item.rowguid)"
          >
            <img :src="item.imgguid" alt class="newimg" />
            <van-divider contentPosition="center" class="thirdtitle">{{item.title}}</van-divider>

            <!-- <h5>{{item.title}}</h5> -->
            <p class="subtitle">{{item.subtitle}}</p>
            <!--          <div v-html="item.content"></div>-->
            <p class="time">{{item.articletime}}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div v-if="newslist&&newslist.length!=0">
        <van-divider contentPosition="left" class="secondtitle">新闻推荐</van-divider>
        <van-grid column-num="2" class="reclistcontainer">
          <van-grid-item
            v-for="(item,index) in newslist[0]"
            :key="index"
            @click="tonewsdetail(item.rowguid)"
          >
            <img :src="item.imgguid" alt class="newimg" />
            <van-divider contentPosition="center" class="thirdtitle">{{item.title}}</van-divider>

            <!-- <h5>{{item.title}}</h5> -->
            <p class="subtitle">{{item.subtitle}}</p>
            <!--          <div v-html="item.content"></div>-->
            <p class="time">{{item.articletime}}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div v-if="joblist&&joblist.length!=0">
        <van-divider contentPosition="left" class="secondtitle">招聘</van-divider>
        <img src="../static/zp.png" alt class="zpimg" />
        <p>海德思，与您共创未来！</p>
        <van-divider contentPosition="center">招聘岗位</van-divider>

        <van-grid column-num="1">
          <van-grid-item v-for="(item,index) in joblist[0]" :key="index">
            <div class="joblistitem">
              <h1 class="joblistindex">{{index+1}}</h1>
              <h5>{{item.name}}</h5>
              <p>{{item.synopsis}}</p>
              <van-button
                color="#526e77"
                size="small "
                class="secondtitlebtn"
                @click="toRecruitment"
              >了解更多</van-button>
            </div>

            <!--            <p class="subtitle">{{item.subtitle}}</p>-->
            <!-- <div class="fuwenben" v-html="item.content"></div> -->
            <!--            <p class="time">{{item.articletime}}</p>-->
          </van-grid-item>
        </van-grid>
      </div>
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
        <van-grid-item icon="photo-o" text="张家港公司" @click="toloaction()">
          <img src="../static/company1.jpg" alt class="homecompanyimg" />
          <a >Heytex集团的总部</a>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="张家港公司"  @click="toloaction()">
          <img src="../static/company2.png" alt class="homecompanyimg" />
          <a >纽格斯多夫</a>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="张家港公司"  @click="toloaction()">
          <img src="../static/company3.png" alt class="homecompanyimg" />
          <a >中国张家港分公司</a>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="张家港公司"  @click="toloaction()">
          <img src="../static/company4.jpg" alt class="homecompanyimg" />
          <a>美国公司</a>
        </van-grid-item>
      </van-grid>
      <!-- <img src="../static/sc4.jpg" alt class="jjimg" /> -->
      <van-divider contentPosition="left" class="secondtitle">位置</van-divider>
      <img src="../static/sc1.jpg" class="jjimg" alt />
      <img src="../static/map.jpg" style="width:100%;" alt />

      <van-divider contentPosition="left" class="secondtitle">代表作品</van-divider>
      <van-list finished-text="没有更多了">
        <van-cell
          v-for="(item1,index1) in goodproductlist"
          :key="index1"
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
import { fujian } from "@/utils/all.js";
import { homenewsapi, homegoodproductapi, homearticleapi } from "@/api/api.js";
import { homeRecommend } from "../api/api";
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  data() {
    return {
      searchvalue: "",
      newslist: [],
      articlelist: [],
      joblist: [],
      goodproductlist: [],
      homearticlelist: []
    };
  },
  created() {
    homenewsapi().then(res => {
      console.log(res);
      // this.newslist = res.data;
      // for (var i = 0; i < this.newslist.length; i++) {
      //   if (this.newslist[i].imgguid && this.newslist[i].imgguid != "") {
      //     this.newslist[i].imgguid = this.newslist[i].imgguid.split(",")[0];
      //     this.newslist[i].imgguid =
      //       "http://10.167.0.12:7001/api/basic/accessoryinfo/image?rowguid=" +
      //       this.newslist[i].imgguid;
      //   }
      // }
    });
    homegoodproductapi().then(res => {
      console.log(res);
      this.goodproductlist = res.data;
    });
    homearticleapi().then(res => {
      console.log(res);
      this.homearticlelist = res.data;
    });
    this.homeRecommend();
  },
  methods: {
    toloaction(){
      this.$router.push("/location" );

    },
    toarticle(q,e) {
      this.$router.push("/article?-" +e+'-'+q);
    },
    tonewsdetail(e) {
      this.$router.push("/newsdetail?" + e);
    },
    homeRecommend() {
      homeRecommend().then(response => {
        if (200 == response.code) {
          // this.newslist = [];
          if (response.data.jobinfo) {
            let jobInfoData = response.data.jobinfo;
            console.log(jobInfoData);
            // jobInfoData.content=fujian(jobInfoData.content)
            // jobInfoData.imgguid = jobInfoData.imgguid.split(",")[0];
            // jobInfoData.imgguid =
            //         "http://10.167.0.12:7001/api/basic/accessoryinfo/image?rowguid=" +
            //         jobInfoData.imgguid;
            this.joblist.push(jobInfoData);
            this.joblist[0].content = fujian(
              this.joblist[0].content ? this.joblist[0].content : ""
            );
          }
          if (response.data.newsinfo) {
            console.log(response.data.newsinfo);

            let newsInfoData = response.data.newsinfo;
            for (var i = 0; i < newsInfoData.length; i++) {
              newsInfoData[i].imgguid = newsInfoData[i].imgguid.split(",")[0];
              newsInfoData[i].imgguid =
                "http://10.167.0.12:7001/api/basic/accessoryinfo/image?rowguid=" +
                newsInfoData[i].imgguid;
            }

            this.newslist.push(newsInfoData);
            console.log(this.newslist);
          }
          if (response.data.catalog) {
            let articleInfoData = response.data.catalog;
            for (var j = 0; j < articleInfoData.length; j++) {
              articleInfoData[j].imgguid = articleInfoData[j].imgguid.split(",")[0];
              articleInfoData[j].imgguid =
                "http://10.167.0.12:7001/api/basic/accessoryinfo/image?rowguid=" +
                articleInfoData[j].imgguid;
            }

            this.articlelist.push(articleInfoData);
            console.log(this.articlelist)
          }
        }
      });
    },
    search() {
      this.$router.push("/search?" + this.searchvalue);
    },
    toproduct(index) {
      this.$router.push("/article?" + this.goodproductlist[index].rowguid);
    },
    toRecruitment() {
      this.$router.push("/Recruitment");
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
  height: 220px;
}
.content {
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
  text-align: left;
  width: 100%;
  word-wrap: break-word;
  word-break: break-all;
}
.newimg {
  width: 100%;
  /* height: 200px; */
}
.mainpoint {
  width: 80%;
  margin-left: 10%;
  text-align: left;
  font-size: 0.5rem;
  font-style: italic;
  color: #7c7c7c;
  border-left: 5px solid #526e77;
  padding-left: 10px;
}
.fuwenben {
  width: 90%;
  margin-left: 5%;
  text-align: left;
}
a {
  text-decoration: none;
  color: black;
  /*此处是去掉a标签的下划线*/
}
.reclistbigcontainer {
  text-align: left;
}
.reclistcontainer {
  width: 95%;
  margin-left: 2.5%;
}
.thirdtitle {
  color: black;
}
.jjimg {
  width: 100%;
}
.newdiv {
  width: 50%;
  display: inline-block;
}
.zplist {
  text-align: left !important;
  width: 100%;
  padding: 10px;
}
.secondtitlebtn {
  float: right;
}
.secondtitlecon {
  width: 100%;
}
.secondtitlecon p {
  width: 50%;
}
.joblistitem {
  /* height: 50px; */
  width: 90%;
  text-align: left !important;
}
.zpimg {
  width: 95%;
  margin-left: 2.5%;
}
.joblistindex {
  float: left;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #526e77;
  width: 30px;
  height: 30px;
  text-align: center;
  color: white;
  padding: 3px;
}
</style>
