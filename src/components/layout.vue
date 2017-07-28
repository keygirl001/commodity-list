<template>
  <div class="wrap">
    <div class="wrap_header">
      <div class="header_left">hi,{{this.loadInfor.name}}</div>
      <div class="header_right">我的订单</div>
    </div>
    <div class="goods_list_wrap">
      <GoodsList :goodsList="goodsList"></GoodsList>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Axios from 'axios';
import GoodsList from './page/GoodsList.vue';
export default {
  name: 'hello',
  data () {
    return {
      loadInfor: '',
      goodsList: '',
    }
  },
  created() {
    Axios.get("./static/mock/loadInfor.json").then((json) => {
      // console.log(json.data.load);

      this.loadInfor = Object.assign({}, json.data.load);
      // console.log(this.loadInfor);
    }),
    Axios.get("./static/mock/goodsList.json").then((json) => {
      this.goodsList = json.data.list;
      // console.log(this.goodsList);
    })
  },
  components: {
    GoodsList
  },
  methods: {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@white: #fff;
@background: #efeff4;
@black:#000;
@gray-3:#333;
@gray-6:#333;
@gray-e0:#e0e0e0;
@red: crimson;
  .wrap{
    width: 100%;
    .wrap_header {
      position: fixed;
      left: 0px;
      top: 0px;
      height: 40px;
      width: 100%;
      background: @gray-e0;
      z-index: 10;
      .header_left {
        position: absolute;
        left: 10px;
        top: 10px;
      }
      .header_right {
        position: absolute;
        right: 10px;
        top: 10px;
        border-left: 1px solid @gray-6;
        padding-left: 10px;
      }
    }
    .goods_list_wrap {
      margin-top: 40px;
      width: 100%;
    }
  }
</style>
