<template>
  <div class="version">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'Version',
  data () {
    return {
      msg: 'This is version component'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
