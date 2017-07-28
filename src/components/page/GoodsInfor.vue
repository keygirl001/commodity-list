<template>
  <div class="goods_infor_wrap">
    <div class="goods_infor infor_one">
      <img v-bind:src=goodsInfor.imgurl[0] />
      <div class="one_wrap">
        <h3 class="one_name">{{ goodsInfor.name }}</h3>
        <p class="one_price">&#165;{{ price }}</p>
      </div>
    </div>
  
    <div class="goods_infor infor_two" @click="showbuywindow">
      <p>选择&nbsp;{{ selectSpect }}
        <span>></span>
      </p>
    </div>

    <div class="goods_infor infor_th">
      <h2>商品详情</h2>
      <p>商品名称</p>
      <div v-for="img in goodsInfor.imgurl">
        <img v-bind:src=img>
      </div>
    </div>

    <div class="goods_infor infor_fo">
      <a href="javascript:;">立即购买</a>
      <div class="select">请选择商品规格</div>
    </div>    
    <showBuyWindow 
        v-if="showBuyWindow == '1'" 
        :goods="goodsInfor" 
        @close-window="closeWindow" 
        :price="price" 
        :showBuyWindow="showBuyWindow"></showBuyWindow>

  </div>
</template>

<script>
import showBuyWindow from './BuyWindow.vue';
export default {
  name: 'goodsInfor',
  props: ['goodsInfor'],
  data() {
    return {
      selectSpect: '选择商品类型',
      showBuyWindow: '0'
    }
  },
  computed: {
    price() {
      let minPrice = this.goodsInfor.spectList[0].price;
      let maxPrice = this.goodsInfor.spectList[0].price;
      this.goodsInfor.spectList.forEach((item, index) => {
        if (minPrice > item.price) {
          minPrice = item.price;
        }
        if(maxPrice < item.price) {
          maxPrice = item.price;
        }
      })
      const minmax = minPrice + '~' + maxPrice;
      return minmax;
    }
  },
  components: {
    showBuyWindow
  },
  created() {
  },
  methods: {
    showbuywindow() {
      this.showBuyWindow = "1";
    },
    closeWindow() {
      this.showBuyWindow = "0";
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
.goods_infor_wrap{
    // position: absolute;
    top: 40px;
    bottom:0;
    // background: @gray-e0;
    width: 100%;
    z-index: 2;
    .infor_wrap{
        background: @white;
    }
    .infor_one{
        img{
            width: 100%;
            height: 300px;
        }
        .one_wrap{
            margin:0 10px;
            .one_price{
                color: @red;
                padding: 10px 0;
            }
        }
    }
    .infor_two{
        margin: -20px 0px;
        p{
            position: relative;
            padding: 10px 0;
            margin: 0 10px;
            span{
                position: absolute;
                right: 10px;
            }
        }
    }
    .infor_th{
        p{
            margin: 10px 10px;
        }
        img{
            width: 100%;
            height: 300px;
        }
    }
    .infor_fo{
        width: 100%;
        background: red; 
        text-align: center;
        padding: 10px 0;
        position: relative;
        a{
            color: @white;
            text-decoration: none;
            
        }
        .select{
            display: none;
            color: black;
            font-weight: 700;
            text-align: center;
            position: absolute;
            top: -20px;
            left: 100px;
            text-align: center;
        }
    }
}

</style>

