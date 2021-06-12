<template>
  <div class="go-top-area">
    <div class="go-top-wrap">
      <div class="go-top-btn-wrap">
        <div ref="btn" :class="['go-top','go-top-btn',active ? 'active' : '']" @click="gotop">
          <i class="iconfont icondownarrow"></i>
          <i class="iconfont icondownarrow"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        active:false
    }
  },
  mounted(){
      // Scroll Event
    window.addEventListener('scroll', () => {
        var scrolled = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrolled > 300) this.active = true;
        if (scrolled < 300) this.active = false;
    })
  },
  methods:{
      gotop(){
          window.scrollTo({top:0,behavior:'smooth'})
      }
  }
};
</script>

<style>
.go-top-area {
  position: relative;
  z-index: 999;
}

.go-top-area .go-top {
  position: fixed;
  cursor: pointer;
  top: 0;
  right: 24px;
  color: #ffffff;
  background-color: #ff4332;
  z-index: 9999;
  width: 40px;
  text-align: center;
  height: 42px;
  line-height: 42px;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.9s ease-out 0s;
  -moz-transition: all 0.9s ease-out 0s;
  -ms-transition: all 0.9s ease-out 0s;
  -o-transition: all 0.9s ease-out 0s;
  transition: all 0.9s ease-out 0s;
  border-radius: 10px;
}

.go-top-area .go-top i {
  position: absolute;
  top: 50%;
  left: -4px;
  right: 0;
  margin: 0 auto;
  font-size: 15px;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: all 0.5s ease-out 0s;
  -moz-transition: all 0.5s ease-out 0s;
  -ms-transition: all 0.5s ease-out 0s;
  -o-transition: all 0.5s ease-out 0s;
  transition: all 0.5s ease-out 0s;
}

.go-top-area .go-top i:last-child {
  opacity: 0;
  visibility: hidden;
  top: 60%;
}

.go-top-area .go-top::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #ff4332;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.5s ease-out 0s;
  -moz-transition: all 0.5s ease-out 0s;
  -ms-transition: all 0.5s ease-out 0s;
  -o-transition: all 0.5s ease-out 0s;
  transition: all 0.5s ease-out 0s;
  border-radius: 10px;
}

.go-top-area .go-top:focus,
.go-top-area .go-top:hover {
  color: #fff;
}

.go-top-area .go-top:focus::before,
.go-top-area .go-top:hover::before {
  opacity: 1;
  visibility: visible;
}

.go-top-area .go-top:focus i:first-child,
.go-top-area .go-top:hover i:first-child {
  opacity: 0;
  top: 0;
  visibility: hidden;
}
.go-top-area .go-top:focus i:last-child,
.go-top-area .go-top:hover i:last-child {
  opacity: 1;
  visibility: visible;
  top: 50%;
}
.go-top-area .go-top.active {
  top: 98%;
  -webkit-transform: translateY(-98%);
  -moz-transform: translateY(-98%);
  -ms-transform: translateY(-98%);
  -o-transform: translateY(-98%);
  transform: translateY(-98%);
  opacity: 1;
  visibility: visible;
  border-radius: 10px;
  right: 20px;
}
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .go-top-area .go-top.active {
    top: 93%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .go-top-area .go-top.active {
    top: 93%;
  }
}
.go-top-wrap {
  position: relative;
}
.go-top-wrap .go-top-btn {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  top: 3px;
  z-index: 1;
  background: #ff4332;
  border-radius: 10px;
}
.go-top-wrap .go-top-btn i {
  font-size: 20px;
  font-weight: 700;
  padding-left: 4px;
  color: #fff;
}
.go-top-wrap .go-top-btn::after {
  z-index: -1;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  -webkit-animation: ripple 1.6s ease-out infinite;
  -moz-animation: ripple 1.6s ease-out infinite;
  -o-animation: ripple 1.6s ease-out infinite;
  animation: ripple 1.6s ease-out infinite;
  opacity: 0;
  background: #ff4332;
  border-radius: 10px;
}
.go-top-wrap .go-top-btn:hover {
  background-color: #222;
  color: #fff;
}
@keyframes ripple {
  0%,
  35% {
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  50% {
    -webkit-transform: scale(1.5);
    -moz-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(2);
    -moz-transform: scale(2);
    -ms-transform: scale(2);
    -o-transform: scale(2);
    transform: scale(2);
  }
}
@-webkit-keyframes ripple {
  0%,
  35% {
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }

  50% {
    -webkit-transform: scale(1.5);
    -moz-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
    opacity: 0.8;
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(2);
    -moz-transform: scale(2);
    -ms-transform: scale(2);
    -o-transform: scale(2);
    transform: scale(2);
  }
}

.sing-area {
  z-index: 11;
  position: relative;
}

.sing-area .footer-sing-up {
  margin-top: 0;
  margin-bottom: -60px;
}

@-webkit-keyframes footer-shape {
  0% {
    right: 100px;
  }

  50% {
    right: 0;
  }

  100% {
    right: 100px;
  }
}

@keyframes footer-shape {
  0% {
    right: 100px;
  }

  50% {
    right: 0;
  }

  100% {
    right: 100px;
  }
}

.map-area {
  margin-bottom: -7px;
}

.map-area iframe {
  width: 100%;
  height: 560px;
}
</style>