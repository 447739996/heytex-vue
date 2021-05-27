<template>
  <div>
    <div class="topshow">
      <a href="mailto:info@heytex.com"><img src="../static/邮件.png" alt=""></a>
      <a href="https://heytex.com/feed"><img src="../static/无线网.png" alt=""></a>
      <a href="https://www.youtube.com/user/HeytexGroup"><img src="../static/yutube.png" alt=""></a>
      <a href="https://www.xing.com/companies/heytexbramschegmbh"><img src="../static/xing.png" alt=""></a>
      <a href="https://twitter.com/heytexgroup?lang=de"><img src="../static/推特.png" alt=""></a>
      <a href="https://www.linkedin.com/company/heytex-bramsche-gmbh/"><img src="../static/ins.png" alt=""></a>
    <img src="../static/中国.png" alt="" class="lasttopshowimg"  @click="openyy()">
    </div>
    <div class="logo">
      <img src="../static/logo.png" alt @click="tohome()" />
    </div>
    <Collapse v-model="activeNames" icon="arrow" accordion class="title container">
      <CollapseItem title name="1">
        <van-grid>
          <van-grid-item
            class="titleitem"
            :text="item.label?item.label:''"
            v-for="(item,index) in list1"
            :key="item.id"
            @click="openpopup(index)"
          ></van-grid-item>
          <van-grid-item class="titleitem" @click="nav('/news')" text="新闻" />
          <van-grid-item class="titleitem" @click="nav('/recruitment')" text="招聘" />
          <van-grid-item class="titleitem" text="关于我们" @click="openus()" />
          <van-grid-item class="titleitem" @click="openother" text="其他服务" />
        </van-grid>
      </CollapseItem>
    </Collapse>
    <van-popup v-model="show" position="top" :style="{ width: '100%' }">
      <p class="childerntitle">{{list1[index1]?list1[index1].label:'' }}</p>
      <van-grid style="margin:20px" v-if="show">
        <van-grid-item
          class="titleitem"
          v-for="(item1,index1) in list1[index1].children"
          :key="item1.id"
          :text="item1.label?item1.label:''"
          @click="openpopup1(index1)"
        ></van-grid-item>
      </van-grid>
    </van-popup>
    <van-popup v-model="show1" position="top" :style="{ width: '100%' }">
      <p v-if="show1" class="childerntitle">{{list1[index1].children?list1[index1].children[index].label:''}}</p>
      <van-grid style="margin:20px" v-if="show1">
        <van-grid-item
          class="titleitem"
          v-for="(item2,index2) in list2"
          :key="index2"
          :text="item2.label?item2.label:''"
          @click="openpopup2(index2)"
        ></van-grid-item>
      </van-grid>
    </van-popup>
    <van-popup v-model="show2" position="top" :style="{ width: '100%' }">
      <p v-if="show2" class="childerntitle">{{list2.length!=0&&list2[index].label?list2[index].label:""}}</p>
      <van-grid style="margin:20px" v-if="show2">
        <van-grid-item
          class="titleitem"
          v-for="(item3,index3) in list3"
          :key="index3"
          :text="item3.label?item3.label:''"
          @click="openpopup3(index3)"
        ></van-grid-item>
      </van-grid>
    </van-popup>
    <van-popup v-model="show3" position="top" :style="{ width: '100%' }">
      <p class="childerntitle">关于我们</p>

      <van-grid style="margin:20px">
        <van-grid-item class="titleitem" text="集团" @click="nav('/location')" />
        <van-grid-item class="titleitem" @click="nav('/history')" text="企业历史" />
        <van-grid-item class="titleitem" @click="nav('/part')" text="集团架构" />
        <van-grid-item class="titleitem" @click="nav('/techology')" text="技术" />
        <van-grid-item class="titleitem" @click="nav('/version')" text="版本" />
      </van-grid>
    </van-popup>
    <van-popup v-model="show4" position="top" :style="{ width: '100%' }">
      <p class="childerntitle">其他服务</p>
      <van-grid style="margin:20px">
        <van-grid-item class="titleitem" text="条款/合规性" @click="nav('/term')" />
        <van-grid-item class="titleitem" text="购买" @click="nav('/purchase')" />
        <van-grid-item class="titleitem" text="服务" @click="nav('/service')" />
        <van-grid-item class="titleitem" text="联系我们" @click="nav('/contact')" />
        <van-grid-item class="titleitem" text="版本说明" @click="nav('/version1')" />
        <van-grid-item class="titleitem" text="数据保护" @click="nav('/protect')" />
      </van-grid>
    </van-popup>
    <van-popup v-model="show5" position="top" :style="{ width: '100%' }">
      <p class="childerntitle">语言选择</p>
      <van-grid style="margin:20px">
        <van-grid-item class="titleitem" text="" ><a href="https://heytex.com/en/">英语</a></van-grid-item>
        <van-grid-item class="titleitem" text="" ><a href="https://heytex.com/">德语</a></van-grid-item>
      </van-grid>
    </van-popup>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import { menuapi } from "@/api/api.js";
import { Collapse } from "vant";
import { CollapseItem } from "vant";
export default {
  name: "Home",
  components: {
    Collapse,
    CollapseItem
  },
  data() {
    return {
      activeNames: [],
      list1: [],
      show: false,
      show1: false,
      show2: false,
      index: 0,
      index11: 0,
      index1: 0,
      list2: [],
      list3: [],
      catalogName: [],
      show3: false,
      show4: false,
      show5: false,
    };
  },
  created() {
    menuapi().then(res => {
      console.log(res);
      this.list1 = res.data;
    });
  },
  methods: {
    nav(e) {
      console.log(e);
      let routeUrl = this.$router.resolve({
        path: e
      });
      //let routeUrl = this.$router.resolve(`/share/${96}`)
      window.open(routeUrl.href, "_self");
    },
    openpopup(index) {
      this.index1 = index;

      this.show = true;

      this.index = index;
    },
    openpopup1(index) {
      this.list2 = this.list1[this.index1].children[index].children;
      console.log(this.list2);
      if (this.list2.length == 0) {
        this.$router.push("/article?" + this.list2[index].id);
        this.show1 = false;
        this.show = false;
      }
      this.index11 = index;
      this.index = index;

      this.show1 = true;
    },
    openpopup2(index) {
      this.list3 = this.list2[index].children;
      console.log(this.list3);
      console.log(this.list2[index]);
      if (
        this.list2[index].articleguid == "" &&
        this.list2[index].children.length != 0
      ) {
        this.show2 = true;
      } else if (
        this.list2[index].articleguid != "" &&
        this.list2[index].children.length != 0
      ) {
        this.$router.push(
          "/article?-" +
            this.list2[index].articleguid +
            "-" +
            this.list3[index].id
        );
        this.show1 = false;
        this.show = false;
      }
    },
    openpopup3(index) {
      console.log(index);
      if (this.list3[index].articleguid == "") {
        console.log("");
      } else {
        this.$router.push(
          "/article?-" +
            this.list3[index].articleguid +
            "-" +
            this.list3[index].id
        );
        this.show1 = false;
        this.show2 = false;
        this.show = false;
      }
    },
    tohome() {
      this.$router.push("/");
    },
    openus() {
      this.show3 = true;
    },
    openother() {
      this.show4 = true;
    },
    openyy(){
      this.show5=true
    }
  }
};
</script>
<style scoped>
.topshow {
  background-color: #526e77;
  height: 30px;
}
.van-collapse {
  background-color: #526e77 !important;
}
.titleitem :hover {
  background-color: #526e77;
  color: white;
}
.van-cell {
  background-color: #526e77 !important;
  color: white !important;
}
.container {
  border-bottom: 1px solid rgb(214, 214, 214);
}
.childerntitle {
  background-color: #526e77;
  width: 100%;
  color: white;
  padding: 10px;
}
.logo {
  position: absolute;
  top: 40px;
  z-index: 9;
}
.logo img {
  width: 50%;
  margin-left: 25%;
}
.topshow img{
  /* width: 14%; */
  height: 25px;
  margin-top: 2.5px;
  border-right: 1px solid white;
  padding-left: 10px;
  padding-right: 10px;
}
.lasttopshowimg{
  border: none !important;
}

</style>
