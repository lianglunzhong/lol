<template>
  <div class="lists">
    <div class="list-wrapper" ref="listScroll">
      <div class="list-items">
        <div v-for="(list, index) in lists" :key="index" class="item">
          <div class="item-left">
            <h3 class="title">
              <span class="lnk-type">{{list.lnk_type}}</span>{{list.title}}
            </h3>
            <div class="tip-wrapper">
              <span class="tip">这是提示</span>
              <span class="num">10阅</span>
            </div>
          </div>
          <div class="item-right">
            <img src="" width="100" height="80">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';

  export default {
    name: 'Lists',
    data () {
      return {
        msg: 'This is lists component'
      };
    },
    props: {
      lists: {
        type: Array,
        default: function() {
          return [];
        }
      }
    },
    created() {
      this._initScroll();
    },
    methods: {
       _initScroll() {
        this.$nextTick(function() {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.listScroll, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        });
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .lists {
    position: relative;
  }
  .list-wrapper {
    /*position: absolute;*/
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
  }
</style>
