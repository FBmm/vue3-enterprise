<!--
 * @Description: 抽奖转盘
 * @Author: wuqian
 * @Date:
-->
<template>
  <div class="lottery-rotary-disc">
    <div class="lottery-rotary-disc__wrap">
      <div class="lottery-rotary-disc__circle" id="circle"></div>
      <div class="lottery-btn-box" v-pointer="!isTurning" @click="onStart">
        <img class="lottery-btn" :class="!isTurning ? 'stop-turning' : ''" id="lotteryBtn" src="../../assets/start-lottery-btn@2x.png" alt="">
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import anime from 'animejs'
export default defineComponent({
  name: 'RotaryDisc',
  setup() {
    let animation: any;
    const isTurning = ref(false)
    onMounted(() => {
      const el = document.getElementById('circle')
      animation = anime({
        targets: el,
        duration: 6000,
        rotate: 360 * 6 + 205,
        easing: 'cubicBezier(0, 1, 0.7, 1)',
        autoplay: false,
        begin() {
          console.log('抽奖开始')
          isTurning.value = true
        },
        complete(anim) {
          console.log('抽奖结束')
          isTurning.value = false
        }
      })
    })
    return {
      isTurning,
      onStart() {
        animation.play()
      },
    }
  },
})
</script>
<style lang="scss" scoped>
.lottery-rotary-disc {
  overflow: hidden;
  .lottery-rotary-disc__wrap {
    position: relative;
    width: 600px;
    height: 600px;
    margin: 0 auto;
  }
  .lottery-rotary-disc__circle {
    width: 600px;
    height: 600px;
    background: url('../../assets/rotary-disc.png');
    background-size: cover;
  }
  .lottery-btn-box {
    position: absolute;
    width: 136px;
    height: 140px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      transition: all .3s;
      width: 100%;
      height: 100%;
    }
    &:hover .stop-turning{
      transform: scale(1.1);
    }
  }
}

</style>
<style lang="scss">

</style>
