<template>
  <div class="sm-menu">
    <ul>
      <li @click="toggleMenu()" id="home" class="sm-menu__option">
        <router-link active-class="active" exact to="/">Home</router-link>
      </li>
      <li @click="toggleMenu()" id="projects" class="sm-menu__option">
        <router-link active-class="active" to="/projects">Projects</router-link>
      </li>

      <li id="contact" class="sm-menu__option">Contact</li>
    </ul>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "Menu",
  props: {
    toggleMenu: Function
  },
  mounted() {
    const timeline = gsap.timeline();
    timeline
      .from(".sm-menu", 0.3, { width: "0%" })
      .from(".sm-menu__option", 0.3, { y: 20, opacity: 0, stagger: 0.2 });
  }
};
</script>


<style lang='scss' scoped>
@import "../../styles/main";

.sm-menu {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #151515;
  z-index: 1;
  position: fixed;
  left: 0;

  &__option {
    font-size: 4rem;
    margin-bottom: 2.5rem;
    color: $inactive-grey;
  }
}
</style>