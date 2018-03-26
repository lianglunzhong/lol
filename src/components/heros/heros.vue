<template>
  <div class="heros">
    <v-header :cates="cates"></v-header>
    {{msg}}
  </div>
</template>

<script>
  import Bus from '@/common/js/Bus';
  import Header from '@/components/header/header';

  export default {
    name: 'Heros',
    data () {
      return {
        msg: 'This is heros component',
        userShow: false,
        cates: [
          {'name': 'all', 'nick': '全部'},
          {'name': 'govern', 'nick': '刺客'},
          {'name': 'sports', 'nick': '坦克'},
          {'name': 'sports', 'nick': '战士'},
          {'name': 'sports', 'nick': '法师'},
          {'name': 'sports', 'nick': '射手'}
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
  
</style>
