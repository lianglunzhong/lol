<template>
  <div class="swiper">  
    <swiper :options="swiperOption"  ref="mySwiper">  
        <!-- 这部分放你要渲染的那些内容 -->  
        <swiper-slide v-for="(item, index) in items" :key="index">
          <img :src="item" width="100%">
        </swiper-slide>  
        <!-- 这是轮播的小圆点 -->  
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>  
  </div>  
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import 'swiper/dist/css/swiper.css';

  export default {
    name: 'Swiper',
    data () {
      return {
        msg: 'This is lists component',
        swiperOption: {  
          notNextTick: true,
          direction: 'horizontal',
          paginationType: 'bullets',
          // pagination: '.swiper-pagination',
          pagination: {
            el: '.swiper-pagination'
          },
          slidesPerView: 'auto',
          centeredSlides: true,
          paginationClickable: true,
          spaceBetween: 30,
          loop: true,
          speed: 300,
          autoplay: true,
          autoplayDisableOnInteraction: true,
          onSlideChangeEnd: swiper => {
            this.page = swiper.realIndex + 1;  
            this.index = swiper.realIndex;  
          }  
        },
        items: [
          'http://game.gtimg.cn/images/lol/act/a20180207nys/skin1.png',
          'http://game.gtimg.cn/images/lol/act/a20180207nys/skin2.png',
          'http://game.gtimg.cn/images/lol/act/a20180207nys/skin3.png'
        ]
      };
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted() {
      // this.swiper.slideTo(2, 1000, false);
    },
    methods: {
    },
    components: {
      swiper,
      swiperSlide
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*.swiper-pagination-bullet {
    background: rgb(7, 17, 27);
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #fff;
  }*/
</style>
