<template>
  <nav class="navbar">
    <div class="navbar__sideline"></div>
    <div class="logo">
      <span class="logo__bracket left">[</span>
      <span id="C">C</span>
      <span id="R">R</span>
      <span class="logo__bracket right">]</span>
    </div>

    <div class="menu">
      <ul>
        <li @click="changeCurrentlySelected('home')" id="home" class="menu__option">
          <router-link active-class="active" exact to="/">Home</router-link>
        </li>
        <li @click="changeCurrentlySelected('projects')" id="projects" class="menu__option">
          <router-link active-class="active" to="/projects">Projects</router-link>
        </li>

        <li id="contact" class="menu__option">Contact</li>
      </ul>
    </div>

    <div @click="toggleMenu()" class="navbar__hamburger">
      <div class="line"></div>
    </div>

    <div class="social-media">
      <a target="_blank" href="https://github.com/CN-90">
        <i class="fadeIn fab fa-github fa-3x"></i>
      </a>
      <a target="_blank" href>
        <i class="fadeIn fab fa-linkedin-in fa-3x"></i>
      </a>
    </div>
  </nav>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Navbar",
  props: {
    toggleMenu: Function
  },
  mounted() {
    if (this.$router.currentRoute.path === "/") {
      this.currentlySelected = "home";
    } else {
      this.currentlySelected = "projects";
    }
    gsap.to(`#${this.currentlySelected}`, { x: 5 });
  },
  data: function() {
    return {
      currentlySelected: "home"
    };
  },
  methods: {
    changeCurrentlySelected(selector) {
      this.timeline = gsap.timeline();
      this.timeline.to(`#${this.currentlySelected}`, 0.2, { x: 0 });
      this.currentlySelected = selector;
      this.timeline.to(`#${this.currentlySelected}`, 0.2, { x: 5 });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/main";
.navbar {
  position: fixed;
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;

  &__sideline {
    height: 80%;
    left: 0;
    width: 2px;
    background: linear-gradient(to bottom, #201f1f, #1a1a1a);
    margin-top: 10rem;
    position: absolute;
  }

  .logo {
    color: #f5f4f4;
    font-size: 4.5rem;
    position: relative;
    top: 1rem;

    &__header {
      margin-top: 1.2rem;
      letter-spacing: 2px;
    }
    &__bracket {
      color: $secondary-green;
      position: relative;
      font-size: 5rem;
      margin: 0.5rem;
    }
    .right {
      left: 1rem;
    }
    .left {
      right: 1rem;
    }
    #C {
      position: relative;
    }
    #R {
      position: relative;
      top: 1rem;
    }
  }

  /* Logo End */ /* Logo End */
  .menu {
    margin-top: 4rem;
    padding-left: 2rem;
    width: 30%;
    font-family: "Poppins", sans-serif;

    &__option {
      margin-bottom: 0.5rem;
      font-size: 2rem;
      cursor: pointer;
      width: 25%;
      color: $inactive-grey;

      &:hover {
        color: $white;
      }
    }
  }

  &__hamburger {
    width: 25px;
    height: 30px;
    display: none;
    margin-right: 5rem;
    position: relative;
    flex-direction: column;
    cursor: pointer;

    .line {
      height: 2px;
      width: 100%;
      background: $white;
      top: 0;

      &::before {
        content: "";
        position: absolute;
        height: 2px;
        width: 100%;
        top: 30%;
        background: $white;
      }

      &::after {
        content: "";
        position: absolute;
        height: 2px;
        width: 100%;
        bottom: 30%;
        background: $white;
      }
    }
  }

  .social-media {
    position: absolute;
    bottom: 50px;
    left: 10px;
    display: flex;

    a {
      animation: fadeIn 0.3s linear;
      opacity: 0;
      animation-fill-mode: both;
    }

    a:nth-child(2) {
      animation-delay: 0.3s;
    }

    .fa-github {
      margin-bottom: 1rem;
      margin-right: 1rem;
    }

    .fab {
      color: $primary-green;
      cursor: pointer;

      &:hover {
        color: #cccccc;
      }
    }
  }
}

@media only screen and (max-width: "900px") {
  .navbar {
    width: 100vw;
    height: 80px;
    flex-direction: row;
    top: 0;
    left: 0;
    align-items: center;
    position: fixed;
    background: rgba(21, 20, 20, 0.4);
    z-index: 5;
    justify-content: space-between;

    .menu {
      display: none;
    }

    .logo {
      margin-left: 2rem;
      font-size: 5rem;
      top: 0;
      .brackets {
        margin: 0;
        font-size: 6rem;
      }

      .right {
        left: 0rem;
      }
      .left {
        right: 0rem;
      }
    }

    .social-media {
      display: none;
    }

    &__hamburger {
      display: block;
    }
  }
}

@keyframes fadeIn {
  from {
    transform: translateX(-20px);
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
