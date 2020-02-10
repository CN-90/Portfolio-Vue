<template>
  <div class="container">
    <Navbar :toggleMenu="toggleMenuHandler"></Navbar>
    <Menu v-if="toggleMenu" :toggleMenu="toggleMenuHandler"></Menu>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Home from "./pages/home/Home";
import gsap from "gsap";
export default {
  name: "app",
  currentlySelected: "home",
  components: {
    Navbar,
    Home,
    Menu
  },
  data: function() {
    return {
      toggleMenu: false
    };
  },
  methods: {
    toggleMenuHandler() {
      this.toggleMenu = !this.toggleMenu;
    }
  }
};
</script>

<style lang="scss">
@import "./styles/main";

main {
  width: 80%;
}
</style>
