<template>
  <a-layout>
    <a-layout-header>
      <div class="logo">
        <img alt="twoyoung.top"  title="twoyoung.top"  src="./assets/logo.png" />
        <div class="title"><span>木小羊</span><span>TwoYoung</span></div>
      </div>
      <div class="topic">
        <a href="/">主 页</a>
        <a href="https://juejin.cn/user/2823201591398910/posts" target="blank">技 术</a>
        <a href="https://twoyoung.tuchong.com" target="blank">定 格</a>
        <a href="https://shimo.im/docs/u8JybsRUBCsB2rCb" target="blank">壹 句</a>
        <a href="https://shimo.im/docs/3ObqX5PKkbUSfacf" target="blank">阅 读</a>
        <a href="" >关 于</a>
      </div>
      <div class="msn">
        <a href="https://github.com/twoyoung6" target="blank"><img src="./assets/github.png" alt="github"></a>
        <a-dropdown :trigger="['click']">
        <a target="blank" @click="e => e.preventDefault()"><img src="./assets/wechat.png" alt="公众号"></a>
          <template #overlay> <a-menu><img class="qrcode" src="./assets/qrcode.jpg" alt=""></a-menu></template>
        </a-dropdown>
        <a href="https://www.zhihu.com/people/muxiaoyang" target="blank"><img src="./assets/zhihu.png" alt="知乎"></a>
      </div>
    </a-layout-header>
    <a-layout-content></a-layout-content>
    <a-layout-footer>
      <div class="fo">Copyright © 2022-2025 TwoYoung</div> | <a  class="fo" href="https://beian.miit.gov.cn/#/Integrated/index" target="blank">湘ICP备2020022591号</a>
    </a-layout-footer>
    <a-carousel autoplay :dots="false" effect="fade" :autoplaySpeed="15000">
    <img :src="img" alt="" v-for="(img,index) in imgs" :key="index">
  </a-carousel>
  </a-layout>
</template>

<script>
export default {
   data(){
     return{
       imgs:[ 
         require('./assets/bg (1).jpg'),
         require('./assets/bg (2).jpg'),
         require('./assets/bg (3).jpg'),
         require('./assets/bg (4).jpg'),
         require('./assets/bg (5).jpg'),
         require('./assets/bg (6).jpg'),
       ]
     }
   }
};
</script>

<style lang="less">
#app {
  color: #2c3e50;
  box-sizing: border-box;
  .ant-layout {
    position: relative;
    min-height: 100vh;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    background: unset;
    .ant-carousel {
      position: absolute;
      z-index: -1; 
      top: -50px;
      left: 0;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      object-fit: cover;
      overflow: hidden;
    }
    .ant-layout-header {
      background: #000;
      height: unset;
      padding: 12px 60px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: unset;
      .logo {
        display: flex;
        cursor: pointer;
        img {
          width: auto;
          height: 60px;
        }
        .title {
          padding-left: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          span {
            color: #fff;
            font-weight: 600;
            font-size: 16px;
            &:nth-child(1) {
              letter-spacing: 12px;
            }
          }
        }
      }
      .topic {
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0 0 0 100px;
        a {
          padding: 0 20px;
          color: #fff;
        }
      }
      .msn {
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0 0 0 100px;
        a {
          padding: 0 20px;
          color: #fff;
          img {
            width: 25px;
            height: auto;
          }
        }
      }
    }
    .ant-layout-content {
      padding: 30px;
      min-height: calc(100vh - 84px);
    }
    .ant-layout-footer {
      background: rgb(44, 44, 44);
      display: flex;
      font-size: 13px;
      align-items: center;
      justify-content: center;
      color: #fff;
      a {
        font-size: 13px;
        color: #fff;
      }
      .fo {
        padding: 0 10px;
      }
    }
  }
}
</style>
<style lang="less">
.qrcode {
  width: 80px;
  height: auto;
}
.ant-dropdown-menu {
  background: transparent;
  box-shadow: none;
}
</style>

