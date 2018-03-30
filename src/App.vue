<template>
  <div id="app">
    <div class="app-content">
      <router-view></router-view>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import Footer from '@/components/footer/footer';
  export default {
    name: 'App',
    components: {
      'v-footer': Footer
    }
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  .app-content {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 50px;
    overflow: hidden;
  }
</style>
