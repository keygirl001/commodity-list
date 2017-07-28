<template>
  <div class="goods_list" >
    <div class="list_content" v-for="item in list"  v-if="showGoodsInfor == '0'">
      <div @click="showGoods(item)">
        <img v-bind:src=item.imgurl[0] class="goods_img">
        <div class="goods_infor">
          <p class="goods_name">{{item.name}}</p>
          <p class="goods_price">&#165;{{item.spectList[0].price}}</p>
        </div>
      </div>
    </div>
    <GoodsInfor v-if="showGoodsInfor == '1'" :goodsInfor="goodsInfor"></GoodsInfor>
  </div>
</template>

<script>
import GoodsInfor from './GoodsInfor.vue';
export default {
  name: 'goodsList',
  data() {
    return {
      showGoodsInfor: '0',
      goodsInfor: ''
    }
  },
  props: ['goodsList'],
  computed: {
    list() {
      return this.goodsList;
    }
  },
  components: {
    GoodsInfor
  },
  methods: {
    showGoods(item) {
      this.showGoodsInfor = '1';
      this.goodsInfor = item;
      console.log(this.showGoodsInfor);
      console.log(this.goodsInfor);
    }
  }
}
</script>

<style lang="less" scoped>
body{margin:0;padding: 0;background: #f7f7f7;font-family: 'microsoft yahei', arial, sans-serif;}
img{border:0}
li{list-style: none;display: inline-block}
ul{padding: 0;margin: 0;}
h2{
    padding: .4rem 0;
    text-align: center;
    font-size: 1pc;
    color: #000;
    border-bottom: 1px solid #eee;
}
@white: #fff;
@background: #efeff4;
@black:#000;
@gray-3:#333;
@gray-6:#333;
@gray-e0:#e0e0e0;
@red: crimson;
    // display: flex;
    // flex-direction: row;
    // flex-wrap: wrap;
.goods_list {
  // display: flex;
  margin-top: 40px;
  width: 100%;
  .list_content {
    position: relative;
    display: inline-block;
    // flex-grow: 1;
    width: 50%;
    background: powderblue;
    // border: 1px solid #333;
    .goods_img{
      position: absolute;
      left: 50%;
      top: 10px;
      margin-left: -50px;
      width: 100px;
      height: 100px;
      overflow: hidden;
      border: 1px solid #333;
    }
    .goods_infor{
      margin: 120px 10px 0;
      font-size: 14px;
      .goods_name{
          //超出两行打点
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          word-break: break-all;
          overflow: hidden;
      }
      .goods_price{
          color: @red;
      }
    }
  }
  .goods_list:nth-child(2n){
    position: relative;
    display: inline-block;
    // flex-grow: 1;
    width: 50%;
    background: powderblue;
    // border: 1px solid #333;
  }
  .goods_list:nth-child(2n + 1){
    position: relative;
    display: inline-block;
    // flex-grow: 1;
    width: 50%;
    background: powderblue;
    // border: 1px solid #333;
  }
}


</style>


