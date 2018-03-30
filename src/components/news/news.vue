<template>
  <div class="news">
    <v-header :cates="cates"></v-header>
    <div class="news-wrapper" :class="{sleep: userShow}">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Bus from '@/common/js/Bus';
  import Header from '@/components/header/header';
  
  import { baseUrl } from '@/config/env';

  export default {
    name: 'News',
    data () {
      return {
        msg: 'This is news component',
        userShow: false,
        cates: []
      };
    },
    created() {
      let self = this;
      Bus.$on('user-show', val => {
        self.userShow = val;
      });

      this._getCates();
    },
    methods: {
      _getCates() {
        let url = baseUrl + '/news/cates';

        this.$http.jsonp(url, {
          params: {},
          jsonp: 'callback'
        }).then(function(response) {
          this.cates = response.body.data;
        }, function(error) {
          console.log(error);
        });
      }
    },
    components: {
      'v-header': Header
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .news-wrapper {
    transition: 0.5s;
  }
  .news-wrapper.sleep {
    transform: translateX(80%);
  }
</style>
