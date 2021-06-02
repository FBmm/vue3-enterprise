<template>
  <div class="banner-carousel">
    <div class="banner-carousel__title">他们都在使用xxxx</div>
    <div class="banner-carousel-body__wrap">
      <div class="banner-carousel__body">
        <div class="banner-carousel__item">
          <div class="banner-carousel-item__img item-img-1-1"></div>
          <div class="banner-carousel-item__img item-img-1-2"></div>
        </div>
        <div class="banner-carousel__item">
          <div class="banner-carousel-item__img item-img-2-1"></div>
          <div class="banner-carousel-item__img item-img-2-2"></div>
        </div>
        <div class="banner-carousel__item">
          <div class="banner-carousel-item__img item-img-3-1"></div>
          <div class="banner-carousel-item__img item-img-3-2"></div>
        </div>
      </div>
      <!--      <div class="mask mask-left"></div>-->
      <!--      <div class="mask mask-right"></div>-->
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>
<style lang="scss" scoped>
.banner-carousel {
  width: 1200px;
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
    line-height: 20px;
    text-align: center;
    padding: 16px;
    font-weight: 600;
    color: #333333;
  }
  .banner-carousel__body {
    position: relative;
    text-align: center;
    overflow: hidden;
    margin: 0 auto;
    .banner-carousel__item {
      height: 54px;
      position: relative;
      margin-bottom: 16px;
      cursor: pointer;
      &:hover {
        [class*='item-img-'] {
          animation-play-state: paused;
        }
      }
      .banner-carousel-item__img {
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
        overflow: hidden;
        z-index: 0;
        height: 54px;
        width: 4744px;
        background: url('../../assets/logo@2x.png') no-repeat center / contain;
      }
      .item-img-1-1 {
        animation: carousel-1 20s linear infinite;
      }
      .item-img-1-2 {
        animation: carousel-2 20s linear infinite;
      }

      .item-img-2-1 {
        animation: carousel-1 50s linear infinite;
      }
      .item-img-2-2 {
        animation: carousel-2 50s linear infinite;
      }

      .item-img-3-1 {
        animation: carousel-1 30s linear infinite;
      }
      .item-img-3-2 {
        animation: carousel-2 30s linear infinite;
      }
    }
    @keyframes carousel-1 {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-100%);
      }
    }
    @keyframes carousel-2 {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0%);
      }
    }
  }
  .banner-carousel-body__wrap {
    position: relative;
    width: 100%;
    .mask {
      position: absolute;
      font-size: 16px;
      bottom: 0;
      cursor: pointer;
      color: #ccd5db;
      width: 120px;
      height: 86px;
    }
    .mask-left {
      background: url('../../assets/mask-left.png') no-repeat center / contain;
      .icon {
        left: 8px;
      }
    }
    .mask-right {
      right: 0;
      background: url('../../assets/mask-right.png') no-repeat center / contain;
      .icon {
        right: 8px;
      }
    }
  }
}
</style>
