<template>
  <div class="banner-carousel">
    <div class="banner-carousel__title">他们都在使用易企秀企业会员</div>
    <div class="banner-carousel-body__wrap">
      <div class="banner-carousel__body">
        <div
          class="banner-carousel__item"
          v-for="item in carouselItems"
          :class="{ 'is-animating': item.isAnimating }"
          :style="{ transform: `translateX(${item.translateX}px)` }"
        >
          <img :src="require('@/assets/carousel-1@2x.png')" alt="" />
        </div>
      </div>
      <div class="banner-carousel__icon--left" @click="onScrollLeft">
        <i class="icon el-icon-arrow-left"></i>
      </div>
      <div class="banner-carousel__icon--right" @click="onScrollRight">
        <i class="icon el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onUnmounted, ref, watch } from 'vue'
import { debounce } from 'lodash'

export default defineComponent({
  setup() {
    const bodyWidth = 1200

    const setTranslateX = (list, direction = -1) => {
      return list.map((item, index, nowList) => {
        let order = item && item.order
        let isAnimating = true
        if (direction > 0) {
          if (order === nowList.length - 2) {
            isAnimating = false
          }
        } else {
          if (order === -1) {
            isAnimating = false
          }
        }
        if (order == null) {
          order = index - 1
        } else {
          order = order + direction
          if (order < -1) {
            order = nowList.length + order
          } else if (order > nowList.length - 2) {
            order = -1
          }
        }
        return {
          ...item,
          order,
          translateX: order * bodyWidth,
          isAnimating,
        }
      })
    }

    const defList = setTranslateX([
      {
        content: 1,
      },
      {
        content: 2,
      },
      {
        content: 3,
      },
    ])

    const carouselItems = ref(defList)

    const createTimer = () => {
      return setInterval(() => {
        carouselItems.value = setTranslateX(carouselItems.value)
      }, 5000)
    }

    let timer = createTimer()

    onUnmounted(() => {
      clearInterval(timer)
    })
    const debounceFn = (fn) =>
      debounce(fn, 300, {
        leading: true,
        trailing: false,
      })
    return {
      carouselItems,
      onScrollLeft: debounceFn(() => {
        carouselItems.value = setTranslateX(carouselItems.value, 1)
        clearInterval(timer)
        timer = createTimer()
      }),
      onScrollRight: debounceFn(() => {
        carouselItems.value = setTranslateX(carouselItems.value)
        clearInterval(timer)
        timer = createTimer()
      }),
    }
  },
})
</script>
<style lang="scss" scoped>
.banner-carousel {
  width: 1200px;
  height: 122px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0px 10px 10px -8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: 1px solid #e6ebed;
  display: flex;
  flex-direction: column;
  align-items: center;
  .banner-carousel__title {
    font-size: 14px;
    font-weight: 500;
    color: #333333;
    line-height: 20px;
    text-align: center;
    padding: 16px;
  }
  .banner-carousel__body {
    position: relative;
    width: 1100px;
    height: 54px;
    text-align: center;
    overflow: hidden;
    margin: 0 auto;
    .banner-carousel__item {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: inline-block;
      overflow: hidden;
      z-index: 0;
      img {
        width: 1080px;
        height: 54px;
      }
    }
    .is-animating {
      transition: transform 1s ease-in-out;
    }
  }
  .banner-carousel-body__wrap {
    position: relative;
    width: 100%;
    [class^='banner-carousel__icon'] {
      position: absolute;
      font-size: 16px;
      top: 50%;
      margin-top: -8px;
      cursor: pointer;
      color: #ccd5db;
    }
    .banner-carousel__icon--left {
      left: 18px;
    }
    .banner-carousel__icon--right {
      right: 18px;
    }
  }
}
</style>
