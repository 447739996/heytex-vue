<template>
  <div class="about">
    <div is-link @click="showPopup" >
      <van-icon name="chat" size="40px" />
    </div>
    <van-popup v-model="show" position="bottom" class="popupcontainer">
      <p>赶快联系我们！</p>
      <div class="popupcontent">
        <van-cell-group>
          <van-field v-model="name" required  label="用户名" placeholder="请输入用户名" />
          <van-field v-model="phone" required  label="电话" placeholder="请输入电话" />
          <van-field v-model="email" required  label="邮件" placeholder="请输入邮件" />
          <van-field v-model="untemehmen" required  label="企业" placeholder="请输入企业" />
        </van-cell-group>
        <van-button slot="button" size="small" class="btn" color="#526e77" @click="add()">提交</van-button>
      </div>
    </van-popup>
  </div>
</template>
<script>
import { contactapi } from "@/api/api.js";
export default {
  data() {
    return {
      show: false,
      name: "",
      phone: "",
      email: "",
      untemehmen: ""
    };
  },
  created() {},
  methods: {
    showPopup() {
      this.show = true;
    },
    add() {
      contactapi({
        name: this.name,
        phone: this.phone,
        email: this.email,
        untemehmen: this.untemehmen
      }).then(res => {
        console.log(res);
        if (res.success == true) {
            this.$toast({
                message:'提交成功',
                type:'success'
            })
            this.name=''
            this.phone=''
            this.email=''
            this.untemehmen=''
        //   Toast("添加成功");
        }
      });
    }
  }
};
</script>
<style scoped>
.popupcontent {
  width: 80%;
  margin-left: 10%;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;
  padding: 10px;
  /*border-radius: 5px;*/
  /*box-shadow: 0px 0px 10px 1px #526e77;*/
}
.popupcontent p {
  border-bottom: 1px solid rgb(180, 178, 178);
  padding: 5px;
}
.btn{
    width: 50%;
    margin-left: 25%;
    margin-top: 20px;
}
</style>
