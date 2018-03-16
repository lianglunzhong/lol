<template>
  <div class="footer">
    <div class="tab">
      <div class="tab-item">
        <router-link :to="{ name: 'news' }">
          <span class="glyphicon glyphicon-book icon"></span>资讯
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/heros">
          <span class="glyphicon glyphicon-user icon"></span>英雄
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/e-sports">
          <span class="glyphicon glyphicon-camera icon"></span>电竞
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/others">
          <span class="glyphicon glyphicon-cog icon"></span>其他
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
  }
  .tab {
    display: flex;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
  }
  .tab-item {
    flex: 1;
    text-align: center;
  }
  .tab-item a {
    color: #787878;
  }
  .tab-item a.router-link-active {
    color: #e69138;
  }
  .icon {
    display: block;
    margin-top: 10px;
    margin-bottom: -14px;
    font-size: 16px;
  }
</style>
