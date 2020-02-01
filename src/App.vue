<template>
  <Sidebar></Sidebar>
</template>

<script>
import Sidebar from './components/sidebar/Sidebar';
export default {
  name: 'app',
  components: {
    Sidebar
  }
};
</script>

<style lang="scss">
.container {
  width: 80%;
  height: 100vh;
}
</style>
