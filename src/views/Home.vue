<template>
  <div class="home">
    <video id="v1" autoplay loop muted>
      <source src="../assets/bg_kuxuan.mp4" type="video/mp4" />
    </video>
    <a-layout>
      <a-layout-header>
        <div class="logo">
          <img alt="logo" src="../assets/logo.png" />
          <div class="title"><span>木小羊</span><span>TwoYoung</span></div>
        </div>
        <div class="topic">
          <a href="">主 页</a>
          <a href="">博 客</a>
          <a href="">定 格</a>
          <a href="">壹 句</a>
          <a href="">阅 读</a>
          <a href="">关 于</a>
        </div>
        <div class="msn">
          <a href="">GitHub</a>
          <a href="">公众号</a>
          <a href="">知乎</a>
        </div>
      </a-layout-header>
      <a-layout-content>
        <div class="content">Content</div>
        <div class="content">Content</div>
        <div class="content">Content</div>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="less">
.home {
  color: #2c3e50;
  video {
    position: fixed;
    right: 0px;
    bottom: 0px;
    min-width: 100%;
    min-height: 100%;
    height: auto;
    width: auto;
    /*加滤镜*/
    // filter: blur(5px); //背景模糊设置
    // -webkit-filter: grayscale(100%);
    // filter: grayscale(100%); //背景灰度设置
    z-index: -11;
  }
  source {
    min-width: 100%;
    min-height: 100%;
    height: auto;
    width: auto;
  }

  .ant-layout {
    min-height: 100vh;
    overflow-x: hidden;
    background: unset;
    .ant-layout-header {
      background: #000;
      height: unset;
      padding: 12px 60px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: unset;
      position: sticky;
      top: 0;
      .logo {
        display: flex;
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
        }
      }
    }
    .ant-layout-content {
      padding: 30px;
    }
    .ant-layout-footer {
      background: rgb(44, 44, 44);
    }
  }
  .content {
    min-height: 300px;
  }
}
</style>
