<template> </template>

<script>
import Animations from '../../utils/Animations';
export default {
  name: 'Sidebar',
  props: [],
  mounted() {
    let animations = new Animations();
  },
  data: function() {
    return {
      currentlySelected: 'home'
    };
  }
};
</script>

<style lang="scss"></style>
