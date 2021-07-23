<!--
 * @Description: 抽奖转盘
 * @Author: wuqian
 * @Date:
-->
<template>
  <div class="lottery-rotary-disc">
    <el-button @click="onStart">开始</el-button>
    <div class="lottery-rotary-disc__circle" id="circle"></div>
  </div>
</template>
<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import anime from 'animejs'
export default defineComponent({
  name: 'RotaryDisc',
  setup() {
    let animation: any;
    onMounted(() => {
      const el = document.getElementById('circle')
      animation = anime({
        targets: el,
        duration: 12000,
        rotate: 360 * 15,
        easing: 'cubicBezier(0, 1, 0.7, 1)',
        autoplay: false,
        complete: function(anim) {
          console.log(anim)
        }
      })
    })
    return {
      onStart() {
        animation.play()
      }
    }
  },
})
</script>
<style lang="scss" scoped>
.lottery-rotary-disc {
  .lottery-rotary-disc__circle {
    margin: 7% auto;
    width: 300px;
    height: 300px;
    background: url('../../assets/rotary-disc.jpeg');
    border-radius: 50%;
    background-size: cover;
  }
}

</style>
