<template>
  <div class="pendant">
        <div class="tel item">
            <div class="tit">
  <i class="iconfont icondianhua"></i>
            <span>电话</span>
            </div>
          
            <div class="eject">
                <a :href="'tel://'+site.company.consumer_hotline" v-if="site.company">{{site.company.consumer_hotline}}</a>
            </div>
        </div>
        <div class="official item">
            <div class="tit">
  <i class="iconfont iconerweima"></i>
            <span>APP下载</span>
            </div>
          

            <div class="eject big">
                <img :src="site.qrcode" alt="">
            </div>
        </div>
          <div class="official item">
              <div class="tit">
    <i class="iconfont iconerweima"></i>
            <span>公众号</span>

              </div>
        
            <div class="eject big">
                <img :src="site.mp_qrcode" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['site'],
    data(){
        return{

        }
    }
}
</script>

<style>
/* 侧边客服 */
.pendant{position: fixed;bottom: 10%;right: -150px;z-index: 20;}
.pendant .item{min-width: 180px;padding: 15px;background-color: #333;border-radius: 10px 0 0 10px;color: #fff;font-size: 13px;display: flex;align-items: center;justify-content: center;margin-bottom: 4px;transition: all .4s ease;position: relative;box-shadow: 0px 5px 13px #00000054;transform: translateX(0px);}
.pendant .item:hover{background-color: #ff4332;transform: translateX(-150px);}
.pendant .item i{font-size: 34px;}
.pendant .item .eject{min-width: 150px;padding-left:10px;min-height: 100%;color: #fff;font-size: 16px;display: flex;justify-content: center;align-items: center;}
.pendant .item .eject.big img{width: 100px;height: 100px;}
.tit{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
@media screen and (max-width:480px) {
    .pendant{top: 40%;}
    .pendant .item{padding: 10px;}
    .pendant .item i{font-size: 24px;}
}
</style>