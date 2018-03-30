<template>
  <div class="government">
    <v-lists :lists="lists"></v-lists>
  </div>
</template>

<script>
  import Lists from '@/components/news/lists';

  import { baseUrl } from '@/config/env';

  export default {
    name: 'Government',
    data () {
      return {
        msg: 'This is government component',
        lists: []
      };
    },
    created() {
      this._getNewsLists();
    },
    methods: {
      _getNewsLists() {
        let url = baseUrl + '/news/2/lists';

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
      'v-lists': Lists
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
