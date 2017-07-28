<template>
  <div class="buy_wrap">
    <div class="buy_gray" @click="closeWindow"></div>
    <div class="buy_content">
      <div class="buy_content_item buy_price">
        <div class="buy_left buy_price_title">单价</div>
        <div class="buy_price_wrap">
          <span class="value">&#165;{{ price }}</span>
          <span class="quantity"></span>
        </div>
      </div>

      <div class="buy_content_item buy_spect">
        <div class="buy_left buy_spect_title">规格</div>
        <div class="buy_spect_wrap">
          <ul>
            <li class="buy_spect_li" 
                v-for="(item, index) in goods.spectList" 
                v-bind:class="{ 'buy_spect_active':  index === selectItem }"
                @click="choiceSpect(item, $event)">
                {{ item.spect }}
            </li>
          </ul>
        </div>
      </div>

      <div class="buy_content_item buy_number">
        <div class="buy_left buy_number_title">数量</div>
        <div class="buy_number_wrap">
          <ul>
            <li class="number_decrease">-</li>
            <li class="number">{{ number }}</li>
            <li class="number_add">+</li>
          </ul>
        </div>
      </div>

      <div class="buy_ok">
        <a href="javascript:;" >确认购买</a>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  props: ['goods', 'price', 'showBuyWindow'],
  data() {
    return {
      number: 1,
      perGoodsSpect: '',
      activeSpect: '',
      selectItem: 0,
    }
  },
  computed: {
    perQuantity() {

    },
  },
  methods: {
    closeWindow() {
      this.$emit('close-window');
    },
    choiceSpect(item, evnet) {
      this.perGoodsSpect = item;
    //   console.log(this.perGoodsSpect);
      this.selectItem ++;
      console.log(event);
      if (item.quantity > 0) {
        this.activeSpect = true;
      }else {
        this.activeSpect = false;
      }
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
.buy_wrap {
    position: fixed;
    top: 40px;
    bottom: 0;
    width: 100%;
    .buy_gray{
        width: 100%;
        position: absolute;
        top: 0px;
        bottom: 0;
        background: #000;
        opacity: .6;
    }
    .buy_content{
        position: absolute;
        bottom: 0;
        width: 100%;
        background: @white;
    }
    .buy_content_item{
        border-bottom: 1px solid @gray-6;
        padding: 0 10px;
        .buy_left{
            padding: 10px 10px 10px 0;
        }
    }
    .buy_price{
        position: relative;
        .buy_price_title{
            position: absolute;
        }
        .buy_price_wrap{
            margin-left: 50px;
            padding: 10px 0;
            .value{
                color: red;
            }
            .quantity{
                margin-left: 10px;
                color: @gray-3;
                font-size: 10px;
            }
        }
    }
    .buy_spect{
        position: relative;
        .buy_spect_title{
            position: absolute;
        }
        .buy_spect_wrap{
            margin-left: 50px;
            padding: 10px 0;
            ul{
                li{
                    padding: 5px;
                    border: 1px solid @gray-6;
                    border-radius: 4px;
                    margin: 5px;
                }
                .buy_spect_gray{
                    background: @gray-e0;
                    border: none;
                }
                .buy_spect_active{
                    background: red;
                    color: @white;
                }
            }
        }
    }
    .buy_number{
        position: relative;
        .buy_number_title{
            position: absolute;
        }
        .buy_number_wrap{
            padding: 10px 0;
            margin-left: 50px;
            ul{
                width: 100px;
                margin-left: auto;
                word-spacing: -5px;
                li{
                    width: 30px;
                    height: 30px;
                    background: @gray-e0;
                    text-align: center;
                    line-height: 30px;
                }
                .numner{
                    color: @white;
                }
            }
        }
    }
    .buy_ok{
        width: 100%;
        background: red; 
        text-align: center;
        padding: 10px 0;
        a{
            color: @white;
            text-decoration: none;                    
        }
    }
}

</style>
