<template>
  <div>
    <div class="topshow"></div>
    <div class="logo">
      <img src="../static/logo.png" alt @click="tohome()" />
    </div>
    <Collapse v-model="activeNames" icon="arrow" accordion class="title container">
      <CollapseItem title name="1">
        <van-grid>
          <van-grid-item
            class="titleitem"
            :text="item.label"
            v-for="(item,index) in list1"
            :key="item.id"
            @click="openpopup(index)"
          >
            <!-- {{item.label}} -->
          </van-grid-item>
          <van-grid-item class="titleitem" text="集团" @click="nav('/location')" />
          <van-grid-item class="titleitem" @click="nav('/news')" text="新闻" />
          <van-grid-item class="titleitem" @click="nav('/recruitment')" text="招聘" />
          <van-grid-item class="titleitem" @click="nav('/history')" text="企业历史" />
          <van-grid-item class="titleitem" @click="nav('/part')" text="集团架构" />
        </van-grid>
      </CollapseItem>
    </Collapse>
    <van-popup v-model="show" position="top">
      <p class="childerntitle">子目录1</p>
      <van-grid style="margin:20px">
        <van-grid-item
          class="titleitem"
          v-for="(item1,index1) in list1[index1].children"
          :key="item1.id"
          :text="item1.label"
          @click="openpopup1(index1)"
        ></van-grid-item>
      </van-grid>
    </van-popup>
    <van-popup v-model="show1" position="top">
      <p class="childerntitle">子目录2</p>
      <van-grid style="margin:20px">
        <van-grid-item
          class="titleitem"
          v-for="(item2,index2) in list2"
          :key="index2"
          :text="item2.label"
          @click="openpopup2(index2)"
        ></van-grid-item>
      </van-grid>
    </van-popup>
    <van-popup v-model="show2" position="top">
      <p class="childerntitle">子目录3</p>
      <van-grid style="margin:20px">
        <van-grid-item
          class="titleitem"
          v-for="(item3,index3) in list3"
          :key="index3"
          :text="item3.label"
          @click="openpopup3(index3)"
        ></van-grid-item>
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
      list3: []
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
        path: e,
        query: { id: 96 }
      });
      //let routeUrl = this.$router.resolve(`/share/${96}`)
      window.open(routeUrl.href, "_self");
    },
    openpopup(index) {
      // console.log(this.list1[index].children);

      console.log(index);

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
      if (this.list2[index].articleguid == "") {
        console.log("");
      } else {
        this.$router.push("/article?" + this.list2[index].articleguid);
        this.show1 = false;
        this.show = false;
      }

      this.show2 = true;
    },
    openpopup3(index) {
      console.log(index);
      if (this.list3[index].articleguid == "") {
        console.log("");
      } else {
        this.$router.push("/article?" + this.list3[index].articleguid);
        this.show1 = false;
        this.show2 = false;
        this.show = false;
      }
    },
    tohome() {
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
.topshow {
  background-color: #526e77;
  height: 20px;
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
  top: 25px;
  z-index: 9;
}
.logo img {
  width: 50%;
  margin-left: 60%;
}
</style>