<template>
  <div class="lists">
    <div class="list-wrapper" ref="listScroll">
      <div class="list-items">
        <div v-for="(list, index) in lists" :key="index" class="item">
          <div class="item-left">
            <div class="title">
              <span class="lnk-type">{{list.lnk_type}}</span>{{list.title}}
            </div>
            <div class="tip-wrapper">
              <span class="tip">这是提示</span>
              <span class="num">10阅</span>
            </div>
          </div>
          <div class="item-right">
            <img src="./1.jpg" width="100" height="60">
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
      },
      hasSwiper: {
        type: Boolean,
        default: false
      }
    },
    created() {
      this._initScroll();
    },
    methods: {
       _initScroll() {
        this.$nextTick(function() {
          if (this.hasSwiper) {
            this.$refs.listScroll.style.top = '252px';
          }

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
  }
  .list-wrapper {
    position: absolute;
    width: 100%;
    left: 0;
    top: 40px;
    bottom: 0;
    overflow: hidden;
  }
  .item {
    display: flex;
    margin: 10px 20px;
    padding: 5px 0 10px 0;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }
  .item .item-left {
    flex: 1;
  }
  .item .item-right {
    flex: 0 0 100px;
    width: 100px;
  }
  .item-left .title {
    padding-right: 10px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 22px;
    font-size: 14px;
  }
  .item-left .title .lnk-type {
    display: inline-block;
    margin-right: 5px;
    background: #ebebeb;
    padding: 0 2px;
  }
  .item-left .tip-wrapper {
    margin-top: 5px;
    font-size: 0px;
  }
  .item-left .tip-wrapper span {
    display: inline-block;
    font-size: 12px;
    line-height: 12px;
    color: #827e7e;
  }
  .item-left .tip-wrapper span.tip {
    margin-right: 20px;
  }
</style>
