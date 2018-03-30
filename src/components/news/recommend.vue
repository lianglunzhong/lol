<template>
  <div class="recommend">
      <v-swiper></v-swiper>
      <v-lists :lists="lists" :hasSwiper="hasSwiper"></v-lists>
  </div>
</template>

<script>
  import Swiper from '@/components/swiper/swiper';
  import Lists from '@/components/news/lists';

  import { baseUrl } from '@/config/env';

  export default {
    name: 'Recommend',
    data () {
      return {
        msg: 'This is recommend component',
        lists: [],
        hasSwiper: true
      };
    },
    created() {
      this._getNewsLists();
    },
    methods: {
      _getNewsLists() {
        let url = baseUrl + '/news/1/lists';

        this.$http.jsonp(url, {
          params: {},
          jsonp: 'callback'
        }).then(function(response) {
          this.lists = response.body.data;
        }, function(error) {
          console.log(error);
        });
      }
    },
    components: {
      'v-swiper': Swiper,
      'v-lists': Lists
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
