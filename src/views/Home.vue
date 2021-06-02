<template>
  <div class="home">
<!--    <BannerCarousel></BannerCarousel>-->
    <BannerCarouselLoop></BannerCarouselLoop>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BannerCarousel from '@/components/Carousel/BannerCarousel.vue';
import BannerCarouselLoop from "@/components/Carousel/BannerCarouselLoop.vue";

export default defineComponent({
  name: 'Home',
  components: {
    BannerCarouselLoop,
    BannerCarousel,
  },
});
</script>
