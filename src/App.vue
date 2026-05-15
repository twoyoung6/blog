<template>
  <div id="app">
    <a-layout class="app-shell">
      <a-carousel
        class="hero-carousel"
        autoplay
        :dots="false"
        effect="fade"
        :autoplaySpeed="15000"
      >
        <img :src="img" alt="" v-for="(img, index) in imgs" :key="index" />
      </a-carousel>

      <div class="scene-overlay"></div>
      <div class="grid-overlay"></div>
      <div class="scanlines-overlay"></div>
      <div class="glow glow-left"></div>
      <div class="glow glow-right"></div>

      <transition name="mobile-panel">
        <div
          v-if="mobileMenuOpen"
          class="mobile-nav-backdrop"
          @click="closeMobileMenu"
        ></div>
      </transition>

      <a-layout-header class="site-header">
        <div class="brand-panel">
          <div class="brand-mark">
            <img
              alt="twoyoung.top"
              title="twoyoung.top"
              src="./assets/logo.png"
            />
          </div>
          <div class="brand-copy">
            <span class="brand-copy-cn">木小羊</span>
            <span class="brand-copy-en">TwoYoung</span>
          </div>
          <button
            class="mobile-menu-toggle"
            type="button"
            @click="toggleMobileMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div class="nav-panel" :class="{ 'nav-panel-open': mobileMenuOpen }">
          <div class="mobile-nav-head">
            <span class="mobile-nav-label">Navigation Grid</span>
            <button
              class="mobile-nav-close"
              type="button"
              @click="closeMobileMenu"
            >
              Close
            </button>
          </div>
          <a href="/" @click="closeMobileMenu">主页</a>
          <a
            href="https://juejin.cn/user/2823201591398910/posts"
            target="blank"
            @click="closeMobileMenu"
            >技术</a
          >
          <a
            href="https://twoyoung.tuchong.com"
            target="blank"
            @click="closeMobileMenu"
            >摄影</a
          >
          <a
            href="https://shimo.im/docs/u8JybsRUBCsB2rCb"
            target="blank"
            @click="closeMobileMenu"
            >声音</a
          >
          <a
            href="https://shimo.im/docs/3ObqX5PKkbUSfacf"
            target="blank"
            @click="closeMobileMenu"
            >阅读</a
          >
          <a href="" @click="closeMobileMenu">关于</a>
          <div class="mobile-nav-foot">
            <span>Signal Active</span>
            <span>Archive Online</span>
          </div>
        </div>

        <div class="social-panel">
          <a href="https://github.com/twoyoung6" target="blank"
            ><img src="./assets/github.png" alt="github"
          /></a>
          <a-dropdown :trigger="['click']">
            <a target="blank" @click="(e) => e.preventDefault()"
              ><img src="./assets/wechat.png" alt="公众号"
            /></a>
            <template #overlay>
              <a-menu>
                <img class="qrcode" src="./assets/qrcode.jpg" alt="" />
              </a-menu>
            </template>
          </a-dropdown>
          <a href="https://www.zhihu.com/people/muxiaoyang" target="blank"
            ><img src="./assets/zhihu.png" alt="知乎"
          /></a>
        </div>
      </a-layout-header>

      <a-layout-content class="site-content">
        <section class="hero-panel">
          <div class="hero-kicker">RETRO FUTURIST PORTAL</div>
          <div class="hero-meta">
            <span>Personal Signal</span>
            <span>Visual Archive</span>
            <span>Since 2022</span>
          </div>
          <h1 class="hero-title">天下熙熙皆为利来，天下攘攘皆为利往。</h1>
          <p class="hero-copy">
            "All men hustle for profit; all men hustle for profit."
          </p>

          <div class="hero-actions">
            <a
              class="hero-link primary"
              href="https://juejin.cn/user/2823201591398910/posts"
              target="blank"
              >进入技术轨道</a
            >
            <a
              class="hero-link"
              href="https://twoyoung.tuchong.com"
              target="blank"
              >浏览摄影档案</a
            >
          </div>

          <div class="signal-strip">
            <div class="signal-card">
              <span class="signal-label">Status</span>
              <span class="signal-value">Online Archive</span>
            </div>
            <div class="signal-card">
              <span class="signal-label">Channel</span>
              <span class="signal-value">Writing / Photo / Notes</span>
            </div>
            <div class="signal-card">
              <span class="signal-label">Mode</span>
              <span class="signal-value">Mobile Responsive</span>
            </div>
          </div>
        </section>
      </a-layout-content>

      <a-layout-footer class="site-footer">
        <div class="footer-line">Copyright © 2022-{{ time }} TwoYoung</div>
        <div class="footer-divider"></div>
        <a
          class="footer-line"
          href="https://beian.miit.gov.cn/#/Integrated/index"
          target="blank"
          >湘ICP备2020022591号</a
        >
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: new Date().getFullYear(),
      mobileMenuOpen: false,
      imgs: [
        require('./assets/bg (1).jpg'),
        require('./assets/bg (3).jpg'),
        require('./assets/bg (4).jpg'),
        require('./assets/bg (5).jpg'),
        require('./assets/bg (6).jpg'),
      ],
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
    },
  },
}
</script>

<style lang="less">
#app {
  --bg-deep: #07080d;
  --bg-mid: #111521;
  --panel-dark: rgba(12, 18, 28, 0.78);
  --panel-soft: rgba(24, 18, 28, 0.7);
  --line-cyan: rgba(118, 244, 255, 0.28);
  --line-gold: rgba(255, 214, 156, 0.3);
  --text-main: #f7edd9;
  --text-soft: rgba(236, 239, 245, 0.82);
  --accent-cyan: #78f6ff;
  --accent-gold: #ffcf85;
  min-height: 100vh;
  color: var(--text-main);
  background: radial-gradient(
      circle at top left,
      rgba(255, 150, 56, 0.18),
      transparent 34%
    ),
    radial-gradient(
      circle at 82% 14%,
      rgba(68, 220, 255, 0.18),
      transparent 24%
    ),
    linear-gradient(135deg, #07080d 0%, #0e1118 42%, #151018 100%);
  font-family: 'Trebuchet MS', 'Segoe UI', sans-serif;
}

.app-shell {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background: transparent;
}

.hero-carousel {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.hero-carousel img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  filter: saturate(0.86) contrast(1.12) brightness(0.5);
  transform: scale(1.08);
  animation: carouselDriftA 22s ease-in-out infinite alternate;
  will-change: transform;
}

.hero-carousel .slick-slide:nth-child(2n) img {
  animation-name: carouselDriftB;
}

.hero-carousel .slick-slide:nth-child(3n) img {
  animation-name: carouselDriftC;
}

.scene-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
      180deg,
      rgba(6, 8, 14, 0.12) 0%,
      rgba(6, 8, 14, 0.58) 40%,
      rgba(6, 8, 14, 0.84) 100%
    ),
    linear-gradient(
      120deg,
      rgba(255, 140, 45, 0.1),
      transparent 45%,
      rgba(89, 246, 255, 0.1) 100%
    );
}

.grid-overlay,
.scanlines-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.grid-overlay {
  z-index: 2;
  background-image: linear-gradient(
      rgba(119, 241, 255, 0.07) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(119, 241, 255, 0.07) 1px, transparent 1px);
  background-size: 52px 52px;
  mask-image: linear-gradient(
    to bottom,
    transparent,
    rgba(0, 0, 0, 0.88) 28%,
    rgba(0, 0, 0, 1)
  );
  opacity: 0.22;
}

.scanlines-overlay {
  z-index: 2;
  background: repeating-linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.02) 0,
    rgba(255, 255, 255, 0.02) 1px,
    transparent 1px,
    transparent 5px
  );
  opacity: 0.08;
}

.glow {
  position: absolute;
  z-index: 2;
  border-radius: 999px;
  filter: blur(16px);
  pointer-events: none;
}

.glow-left {
  top: 10%;
  left: -10%;
  width: 340px;
  height: 340px;
  background: rgba(255, 155, 62, 0.18);
}

.glow-right {
  right: -6%;
  bottom: 14%;
  width: 300px;
  height: 300px;
  background: rgba(95, 239, 255, 0.18);
}

.site-header,
.site-content,
.site-footer {
  position: relative;
  z-index: 3;
}

.site-header.ant-layout-header {
  height: auto;
  padding: 24px 48px 0;
  display: grid;
  grid-template-columns: minmax(220px, 300px) 1fr auto;
  gap: 24px;
  align-items: center;
  background: transparent;
  line-height: normal;
}

.brand-panel,
.nav-panel,
.social-panel,
.hero-panel,
.site-footer.ant-layout-footer {
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.brand-panel {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 18px;
  background: linear-gradient(
    135deg,
    rgba(255, 210, 152, 0.12),
    rgba(13, 20, 30, 0.5)
  );
  box-shadow: 0 0 0 1px rgba(82, 221, 255, 0.08) inset,
    0 16px 45px rgba(0, 0, 0, 0.28);
}

.brand-mark img {
  width: auto;
  height: 60px;
  display: block;
}

.brand-copy {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.brand-copy-cn {
  font-size: 15px;
  letter-spacing: 0.8em;
  text-indent: 0.8em;
  color: var(--accent-gold);
}

.brand-copy-en {
  font-size: 28px;
  line-height: 1;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #f8f3e7;
  text-shadow: 0 0 14px rgba(255, 175, 70, 0.35);
}

.mobile-menu-toggle,
.mobile-nav-close {
  appearance: none;
  border: 0;
  background: transparent;
  color: var(--text-main);
  cursor: pointer;
}

.mobile-menu-toggle {
  display: none;
  margin-left: auto;
  width: 46px;
  height: 46px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  border: 1px solid rgba(120, 246, 255, 0.28);
  background: rgba(8, 15, 24, 0.7);
  box-shadow: 0 0 18px rgba(120, 246, 255, 0.08);
}

.mobile-menu-toggle span {
  width: 18px;
  height: 1px;
  background: var(--accent-cyan);
  display: block;
}

.nav-panel {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 14px 18px;
  background: linear-gradient(
    135deg,
    rgba(6, 16, 28, 0.7),
    rgba(15, 12, 22, 0.44)
  );
}

.mobile-nav-head,
.mobile-nav-foot {
  display: none;
}

.nav-panel a,
.social-panel a,
.hero-link,
.site-footer a {
  transition: all 0.28s ease;
}

.nav-panel a {
  position: relative;
  padding: 8px 14px;
  color: #e8edf6;
  font-size: 14px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.nav-panel a::after {
  content: '';
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 3px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--accent-cyan),
    transparent
  );
  transform: scaleX(0.2);
  transform-origin: center;
  opacity: 0;
}

.nav-panel a:hover {
  color: var(--accent-cyan);
  text-shadow: 0 0 10px rgba(106, 244, 255, 0.45);
}

.nav-panel a:hover::after {
  transform: scaleX(1);
  opacity: 1;
}

.social-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 16px;
  background: linear-gradient(
    135deg,
    rgba(15, 12, 18, 0.62),
    rgba(17, 26, 35, 0.56)
  );
}

.social-panel a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.04);
}

.social-panel a:hover {
  transform: translateY(-2px);
  border-color: rgba(106, 244, 255, 0.55);
  box-shadow: 0 0 16px rgba(106, 244, 255, 0.2);
}

.social-panel img {
  width: 22px;
  height: auto;
  display: block;
}

.site-content.ant-layout-content {
  min-height: calc(100vh - 196px);
  padding: 38px 48px 56px;
  display: flex;
  align-items: center;
}

.hero-panel {
  width: min(760px, 100%);
  padding: 34px 36px 32px;
  border: 1px solid var(--line-gold);
  background: linear-gradient(
      160deg,
      rgba(13, 18, 26, 0.86),
      rgba(18, 14, 23, 0.72)
    ),
    linear-gradient(135deg, rgba(255, 160, 75, 0.05), rgba(99, 236, 255, 0.04));
  box-shadow: 0 0 0 1px rgba(95, 239, 255, 0.08) inset,
    0 28px 80px rgba(0, 0, 0, 0.34);
}

.hero-kicker {
  display: inline-flex;
  align-items: center;
  margin-bottom: 14px;
  padding: 6px 12px;
  border: 1px solid rgba(106, 244, 255, 0.34);
  color: #7cf5ff;
  font-size: 12px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  background: rgba(106, 244, 255, 0.08);
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 18px;
}

.hero-meta span {
  padding: 4px 10px;
  border: 1px solid rgba(255, 214, 156, 0.16);
  color: rgba(247, 237, 217, 0.78);
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.03);
}

.hero-title {
  margin: 0;
  color: #fff2dc;
  font-size: clamp(24px, 5vw, 70px);
  line-height: 1.06;
  letter-spacing: 0.04em;
  text-shadow: 0 0 24px rgba(255, 153, 56, 0.18), 0 0 48px rgba(0, 0, 0, 0.32);
}

.hero-copy {
  margin: 22px 0 0;
  max-width: 620px;
  color: var(--text-soft);
  font-size: 16px;
  line-height: 1.9;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.hero-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  border: 1px solid var(--line-gold);
  color: #fff0d5;
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.03);
}

.hero-link.primary {
  border-color: rgba(255, 164, 69, 0.56);
  background: linear-gradient(
    90deg,
    rgba(255, 154, 56, 0.18),
    rgba(255, 198, 129, 0.08)
  );
  box-shadow: 0 0 26px rgba(255, 154, 56, 0.14);
}

.hero-link:hover {
  transform: translateY(-2px);
  color: #091019;
  background: var(--accent-cyan);
  border-color: var(--accent-cyan);
  box-shadow: 0 0 22px rgba(120, 246, 255, 0.28);
}

.signal-strip {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 34px;
}

.signal-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px 18px;
  border: 1px solid rgba(114, 229, 255, 0.16);
  background: rgba(4, 10, 16, 0.48);
}

.signal-label {
  color: rgba(126, 246, 255, 0.7);
  font-size: 11px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
}

.signal-value {
  color: #f8ead0;
  font-size: 16px;
  line-height: 1.5;
}

.site-footer.ant-layout-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 18px 24px 26px;
  color: rgba(236, 239, 245, 0.72);
  font-size: 13px;
  letter-spacing: 0.08em;
  background: transparent;
}

.footer-line {
  color: inherit;
}

.footer-divider {
  width: 40px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(124, 245, 255, 0.8),
    transparent
  );
}

.site-footer a:hover {
  color: var(--accent-cyan);
}

.qrcode {
  width: 110px;
  height: auto;
  border: 1px solid var(--line-gold);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.28);
}

.ant-dropdown-menu {
  background: transparent;
  box-shadow: none;
}

.mobile-nav-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9;
  background: rgba(3, 8, 15, 0.62);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.mobile-panel-enter-active,
.mobile-panel-leave-active {
  transition: opacity 0.28s ease;
}

.mobile-panel-enter-from,
.mobile-panel-leave-to {
  opacity: 0;
}

@keyframes carouselDriftA {
  0% {
    transform: scale(1.08) translate3d(0, 0, 0);
  }

  100% {
    transform: scale(1.16) translate3d(-1.6%, -1.2%, 0);
  }
}

@keyframes carouselDriftB {
  0% {
    transform: scale(1.07) translate3d(0, 0, 0);
  }

  100% {
    transform: scale(1.14) translate3d(1.8%, -1%, 0);
  }
}

@keyframes carouselDriftC {
  0% {
    transform: scale(1.09) translate3d(0, 0, 0);
  }

  100% {
    transform: scale(1.15) translate3d(-1%, 1.4%, 0);
  }
}

@media (max-width: 1100px) {
  .site-header.ant-layout-header {
    grid-template-columns: 1fr auto;
    grid-template-areas:
      'brand social'
      'nav nav';
  }

  .brand-panel {
    grid-area: brand;
  }

  .nav-panel {
    grid-area: nav;
    justify-content: flex-start;
  }

  .social-panel {
    grid-area: social;
    justify-content: center;
  }

  .site-content.ant-layout-content {
    align-items: flex-start;
  }

  .hero-panel {
    margin-top: 8px;
  }
}

@media (max-width: 768px) {
  .site-header.ant-layout-header {
    padding: 18px 18px 0;
    grid-template-columns: 1fr;
    grid-template-areas:
      'brand'
      'social';
    gap: 14px;
  }

  .brand-panel {
    padding: 14px;
    gap: 12px;
  }

  .brand-mark img {
    height: 48px;
  }

  .brand-copy-cn {
    font-size: 12px;
    letter-spacing: 0.55em;
    text-indent: 0.55em;
  }

  .brand-copy-en {
    font-size: 22px;
  }

  .mobile-menu-toggle {
    display: inline-flex;
  }

  .nav-panel {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
    width: min(320px, 86vw);
    height: 100vh;
    padding: 18px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: nowrap;
    gap: 10px;
    border-left: 1px solid rgba(120, 246, 255, 0.24);
    border-top: 0;
    border-right: 0;
    border-bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(8, 15, 24, 0.96),
        rgba(18, 13, 24, 0.94)
      ),
      repeating-linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.03) 0,
        rgba(255, 255, 255, 0.03) 1px,
        transparent 1px,
        transparent 5px
      );
    box-shadow: -18px 0 48px rgba(0, 0, 0, 0.35);
    transform: translateX(104%);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.32s ease, opacity 0.32s ease;
  }

  .nav-panel.nav-panel-open {
    transform: translateX(0);
    opacity: 1;
    pointer-events: auto;
  }

  .mobile-nav-head,
  .mobile-nav-foot {
    display: flex;
  }

  .mobile-nav-head {
    align-items: center;
    justify-content: space-between;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(255, 214, 156, 0.14);
    margin-bottom: 4px;
  }

  .mobile-nav-label,
  .mobile-nav-foot {
    font-size: 11px;
    letter-spacing: 0.24em;
    text-transform: uppercase;
  }

  .mobile-nav-label {
    color: rgba(120, 246, 255, 0.82);
  }

  .mobile-nav-close {
    padding: 0;
    color: rgba(247, 237, 217, 0.78);
    font-size: 12px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .nav-panel a {
    padding: 12px 0;
    border-bottom: 1px solid rgba(120, 246, 255, 0.08);
    font-size: 13px;
  }

  .nav-panel a::after {
    left: 0;
    right: 0;
    bottom: 0;
  }

  .mobile-nav-foot {
    margin-top: auto;
    padding-top: 16px;
    justify-content: space-between;
    color: rgba(255, 214, 156, 0.7);
  }

  .social-panel {
    padding: 10px 12px;
    justify-content: flex-start;
  }

  .social-panel a {
    width: 40px;
    height: 40px;
  }

  .site-content.ant-layout-content {
    min-height: auto;
    padding: 20px 18px 32px;
  }

  .hero-panel {
    width: 100%;
    padding: 24px 18px;
  }

  .hero-meta {
    gap: 8px;
  }

  .hero-meta span {
    font-size: 10px;
    letter-spacing: 0.18em;
  }

  .hero-title {
    font-size: clamp(30px, 10vw, 32px);
  }

  .hero-copy {
    font-size: 14px;
    line-height: 1.8;
  }

  .hero-actions {
    flex-direction: column;
  }

  .hero-link {
    width: 100%;
  }

  .signal-strip {
    grid-template-columns: 1fr;
  }

  .site-footer.ant-layout-footer {
    flex-direction: column;
    gap: 10px;
    padding: 12px 18px 24px;
    text-align: center;
  }

  .footer-divider {
    width: 1px;
    height: 22px;
  }
}
</style>
