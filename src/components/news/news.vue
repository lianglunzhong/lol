<template>
  <div class="news">
    <v-header :cates="cates"></v-header>
    <div class="news-wrapper" :class="{sleep: userShow}">
      {{msg}}
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Bus from '@/common/js/Bus';
  import Header from '@/components/header/header';

  export default {
    name: 'News',
    data () {
      return {
        msg: 'This is news component',
        userShow: false,
        cates: [
          {'name': 'recom', 'nick': '推荐'},
          {'name': 'govern', 'nick': '官方'},
          {'name': 'sports', 'nick': '赛事'}
        ]
      };
    },
    created() {
      let self = this;
      Bus.$on('user-show', val => {
        self.userShow = val;
      });
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
