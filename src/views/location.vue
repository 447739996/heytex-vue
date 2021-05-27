<template>
  <div class="about">
    <van-cell-group>
      <van-cell title="公司介绍" value="你的位置：HEYTEX/公司" :border="false" />
    </van-cell-group>
    <img src="../static/map.jpg" style="width:90%;marin-left:5%" alt />

    <van-divider contentPosition="center">HEYTEX总部</van-divider>
    <van-grid column-num="2">
      <img src="../static/company1.jpg" style class="myimg" alt />
      <div>
        <p
          class="des"
        >新的千年，新的位置：Bramsche自2000年以來一直是Heytex集團的總部。公司於1913年在奧斯納布呂克（Osnabrück）成立，由於公司在20世紀下半葉的強勁擴張，其場地很快變得太小了。如今，Heytex集團的總部不僅設在Bramsche，織造廠也位於這裡。</p>
        <van-button class="mybtn" type="default" is-link @click="showPopup(11)">地点</van-button>
        <van-button class="mybtn" type="default" is-link @click="showPopup(12)">主要产品</van-button>
        <!-- <van-button class="mybtn" type="default" is-link @click="showPopup(13)">认证</van-button> -->
      </div>
    </van-grid>
    <van-divider contentPosition="center">纽格斯多夫分公司</van-divider>
    <van-grid column-num="2">
      <img src="../static/company2.png" class="myimg" alt />
      <div>
        <p
          class="des"
        >Heytex Neugersdorf GmbH是Heytex GmbH的第一家子公司，成立于1993年，现在是Heytex专业产品的主要生产设施。 也涂层能使大量的其他塑料，诸如TPU，ALCRYN的处理®，共混物，取代非常新TPE（热塑性弹性体）。所用载体材料的范围从网眼织物到非常重和高强度的织物 。，， Heytex Neugersdorf GmbH是不透气涂料的能力中心。</p>

        <van-button class="mybtn" type="default" is-link @click="showPopup(21)">地点</van-button>
        <van-button class="mybtn" type="default" is-link @click="showPopup(22)">主要产品</van-button>
        <!-- <van-button class="mybtn" type="default" is-link @click="showPopup(23)">认证</van-button> -->
      </div>
    </van-grid>
    <van-divider contentPosition="center">张家港分公司</van-divider>
    <van-grid column-num="2">
      <img src="../static/company3.png" class="myimg" alt />
      <div class="btngroup">
        <p
          class="des"
        >从2007年初开始，这家中国子公司开始生产第一批用于数字标牌和横幅印刷 现在，将近100名经验丰富且称职的员工致力于生产高品质的层压板。在中国制造的Heytex品质代表着一流的层压板上，这些层压板是专门的 为数字标牌和横幅印刷，室内外区域以及各种技术应用而开发的。</p>

        <van-button class="mybtn" type="default" is-link @click="showPopup(31)">地点</van-button>
        <van-button class="mybtn" type="default" is-link @click="showPopup(32)">主要产品</van-button>
        <!-- <van-button class="mybtn" type="default" is-link @click="showPopup(33)">认证</van-button> -->
      </div>
    </van-grid>
    <van-divider contentPosition="center">美国分公司</van-divider>
    <van-grid column-num="2">
      <img src="../static/company4.jpg" class="myimg" alt />
      <div>
        <p
          class="des"
        >Heytex USA Inc.（前身为BondCote Corporation）成立于1949年，总部位于加利福尼亚州的普拉斯基，是Heytex集团最年轻的子公司。HeytexUSA Inc.拥有约90名员工，专门从事军事，屋顶， 环境，农业，休闲和体育等行业的涂层和层压纺织品的生产。</p>

        <van-button class="mybtn" type="default" is-link @click="showPopup(41)">地点</van-button>
        <van-button class="mybtn" type="default" is-link @click="showPopup(42)">主要产品</van-button>
        <!-- <van-button class="mybtn" type="default" is-link @click="showPopup(43)">认证</van-button> -->
      </div>
    </van-grid>
    <van-popup v-model="show11" class="popupcontent">
      <p>Heytex Bramsche GmbH</p>
      <p>Heywinkelstrasse 1</p>
      <p>49565 Bramsche</p>
      <p>德國</p>
      <br />
      <p>电话+49 5468 7774-0</p>
      <p>传真+49 5468 7774-123</p>
      <br />
      <a href="www.heytex.com">www.heytex.com</a>
    </van-popup>

    <van-popup v-model="show12" class="popupcontent">
      <ul>
        <li>> HEYsign-纺织品</li>
        <br />
        <li>> HEYsign横幅</li>
        <br />
        <li>> HEYsign-装饰</li>
        <br />
        <li>> TEXINEERING®-工业</li>
        <br />
        <li>> TEXINEERING®-防水布和帐篷</li>
        <br />
        <li>> 等等。</li>
      </ul>
    </van-popup>
    <van-popup v-model="show13" class="popupcontent">
      <ul>
        <li>
          <a
            href="location.href='https://heytex.com/download/ohsas-180012007-arbeitsschutzmanagement/?wpdmdl=4663';return false;"
          >123</a>
        </li>
      </ul>
    </van-popup>

    <van-popup v-model="show21" class="popupcontent">
      <p>Heytex Bramsche GmbH</p>
      <p>Nordstrasse 2</p>
      <p>02727 Ebersbach-Neugersdorf</p>
      <p>德國</p>
      <br />
      <p>电话+49 3586 7807-0</p>
      <p>传真+49 3586 7807-10</p>
      <br />
      <a href="www.heytex.com">www.heytex.com</a>
    </van-popup>
    <van-popup v-model="show22" class="popupcontent">
      <ul>
        <li>TEXINEERING ® -工業</li>
        <li>等等。</li>
      </ul>
    </van-popup>
    <van-popup v-model="show23" class="popupcontent">内容2</van-popup>
    <van-popup v-model="show31" class="popupcontent">
      <p>Heytex Bramsche GmbH</p>
      <p>32，新疆（中）路</p>
      <p>張家港經濟開發區（南區）</p>
      <p>江蘇215618</p>
      <p>中國大陸</p>
      <br />
      <p>總經理：余志堅</p>
      <p>电话+86 512 5699 1001</p>
      <p>传真+86 512 5699 1002</p>
      <br />
      <a href="www.heytex.com">www.heytex.com</a>
    </van-popup>
    <van-popup v-model="show32" class="popupcontent">
      <ul>
        <li>HEYsign-層壓板</li>
        <li>TEXINEERING ® -層板</li>
        <li>等等。</li>
      </ul>
    </van-popup>
    <van-popup v-model="show33" class="popupcontent"></van-popup>
    <van-popup v-model="show41" class="popupcontent">
      <p>Heytex Bramsche GmbH</p>
      <p>Heywinkelstrasse 1</p>
      <p>49565 Bramsche</p>
      <p>德國</p>
      <br />
      <p>电话+49 5468 7774-0</p>
      <p>传真+49 5468 7774-123</p>
      <br />
      <a href="www.heytex.com">www.heytex.com</a>
    </van-popup>
    <van-popup v-model="show42" class="popupcontent">
      <ul>
        <li>BondCote防禦系列</li>
        <li>BondCote工業</li>
        <li>BondCote商業</li>
      </ul>
    </van-popup>
    <van-popup v-model="show43" class="popupcontent">内容4</van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show11: false,
      show12: false,
      show13: false,
      show21: false,
      show22: false,
      show23: false,
      show31: false,
      show32: false,
      show33: false,
      show41: false,
      show42: false,
      show43: false
    };
  },
  methods: {
    showPopup(e) {
      switch (e) {
        case 11:
          this.show11 = true;
          break;
        case 12:
          this.show12 = true;
          break;
        case 13:
          this.show13 = true;
          break;
        case 21:
          this.show21 = true;
          break;
        case 22:
          this.show22 = true;
          break;
        case 23:
          this.show23 = true;
          break;
        case 31:
          this.show31 = true;
          break;
        case 32:
          this.show32 = true;
          break;
        case 33:
          this.show33 = true;
          break;
        case 41:
          this.show41 = true;
          break;
        case 42:
          this.show42 = true;
          break;
        case 43:
          this.show43 = true;
          break;
      }
      console.log(this.show);
    }
  }
};
</script>
<style scoped>
.myimg {
  width: 80%;
  margin-left: 10%;
}
.des {
  width: 80%;
  margin-left: 10%;
  text-align: left;
}

.popupcontent {
  text-align: left;
  padding: 10px;
  width: 90%;
  height: 60%;
  overflow: scroll;
  box-shadow: 0px 0px 10px 5px #526e77;
  border-radius: 10px;
}
.about{
  padding-bottom: 20px;
}
</style>