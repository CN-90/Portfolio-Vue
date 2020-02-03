<template>
  <div class="container">
    <Navbar></Navbar>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import gsap from 'gsap';
export default {
  name: 'app',
  currentlySelected: 'home',
  components: {
    Navbar,
    Home
  },
  methods: {
    enter() {}
  }
};
</script>

<style lang="scss">
@import './styles/main';

main {
  width: 80%;
}
</style>
