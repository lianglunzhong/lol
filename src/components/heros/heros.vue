<template>
  <div class="heros">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'Heros',
  data () {
    return {
      msg: 'This is heros component'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
