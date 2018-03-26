<template>
  <div class="header">
    <div class="user-wrapper" :class="{open: userShow}" v-show="userShow">
      <div class="user-header">
        <div class="user-content">
          <div class="name">Lun-JG</div>
          <div class="relation">
            <div class="relation-item">
              <span class="num">0</span>
              <span class="rela">关注</span>
            </div>
            <div class="relation-item">
              <span class="num">0</span>
              <span class="rela">粉丝</span>
            </div>
            <div class="relation-item">
              <span class="num">0</span>
              <span class="rela">发表</span>
            </div>
          </div>
          <div class="avatar">
            <img src="">
          </div>
        </div>
      </div>
      <div class="item-wrapper">
        <ul>
          <li class="item">
            <span class="glyphicon glyphicon-envelope"></span>与我相关
          </li>
          <li class="item">
            <span class="glyphicon glyphicon-envelope"></span>活动中心
          </li>
          <li class="item">
            <span class="glyphicon glyphicon-envelope"></span>我的订单
          </li>
          <li class="item">
            <span class="glyphicon glyphicon-envelope"></span>我的收藏
          </li>
        </ul>
      </div>
    </div>
    <div class="header-wrapper" :class="{sleep: userShow}">
      <div class="avatar" @click="showUser()">
        <img src="./avatar.jpg" width="30" height="30">
      </div>
      <div class="tab-scroll" ref="cateTab">
        <div class="tab" ref="tabWrap">
          <div class="tab-item" v-for="(cate, index) in cates" :key="index">
            <router-link :to="{ name: cate.name }">{{cate.nick}}</router-link>
          </div>
        </div>
      </div>
      <div class="search">
        <span class="glyphicon glyphicon-search"></span>
      </div>
    </div>
  </div>
</template>

<script>
  import Bus from '@/common/js/Bus';
  import BScroll from 'better-scroll';

  export default {
    name: 'Header',
    data () {
      return {
        msg: 'This is header component',
        userShow: false
      };
    },
    props: {
      cates: {
        type: Array,
        default: function() {
          return [];
        }
      }
    },
    created() {
      this._initCateTabScroll();
    },
    methods: {
      _initCateTabScroll() {
        if (this.cates.length > 3) {
          this.$nextTick(function() {
            let width = 80 * this.cates.length;

            this.$refs.tabWrap.style.width = width + 'px';
            
            if (!this.scroll) {
              this.scroll = new BScroll(this.$refs.cateTab, {
                click: true,
                scrollX: true,
                eventPassthrough: 'vertical'
              });
            } else {
              this.scroll.refresh();
            }
          });
        }
      },
      showUser() {
        this.userShow = !this.userShow;
        
        Bus.$emit('user-show', this.userShow);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header-wrapper {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    transition: 0.5s;
  }
  .header-wrapper.sleep {
    transform: translateX(80%);
  }
  .tab-scroll {
    flex: 1;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
  }
  .tab {
    display: flex;
  }
  .tab-item {
    flex: 1;
    min-width: 80px;
    text-align: center;
  }
  .tab-item a {
    color: #787878;
  }
  .tab-item a.router-link-active {
    color: #0b8744;
  }
  .header-wrapper .avatar, .search {
    flex: 0 0 40px;
    text-align: center;
  }
  .header-wrapper .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    order: -1;
  }
  .header-wrapper .avatar img {
    border-radius: 50%;
  }
  .search {
    font-size: 16px;
    color: #e69138;
  }
  .user-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 80%;
    height: 100%;
    transform: translateX(100%);
    transition: 0.5s;
    overflow: auto;
    background: rgba(7, 17, 27, 0.8);
    backdrop-filter: blur(10px);
  }
  .user-wrapper.open {
    transform: translateX(0);
  }
</style>
