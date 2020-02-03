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
        <li id="home" class="menu__option">
          <router-link to="/">Home</router-link>
        </li>
        <li id="projects" class="menu__option">
          <router-link to="/projects">Projects</router-link>
        </li>
        <li id="contact" class="menu__option">
          Contact
        </li>
      </ul>
    </div>

    <div class="social-media">
      <a target="_blank" href="https://github.com/CN-90">
        <i class="fab fa-github fa-3x"></i>
      </a>
      <a href>
        <i class="fab fa-linkedin-in fa-3x"></i>
      </a>
    </div>
  </nav>
</template>

<script>
import Animations from '../../utils/Animations';

export default {
  name: 'Navbar',
  props: [],
  mounted() {},
  data: function() {
    return {
      currentlySelected: 'home'
    };
  },
  methods: {
    setCurrentlySelected(currentOption) {
      this.currentlySelected = currentOption;
      console.log(this.currentlySelected);
      console.log(this.$route);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../styles/main';
.navbar {
  position: relative;
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;

  &__sideline {
    height: 80%;
    left: 0;
    width: 2px;
    background: linear-gradient(to bottom, #312e2e, #1a1a1a);
    margin-top: 10rem;
    position: absolute;
  }

  .logo {
    color: $white;
    font-size: 4.5rem;
    margin-top: 2rem;
    position: relative;
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
    margin-top: 7rem;
    padding-left: 2rem;

    &__option {
      margin-bottom: 1.2rem;
      font-size: 2rem;
      cursor: pointer;
      width: 25%;
      color: $inactive-grey;

      &:hover {
        color: $white;
      }
    }
  }

  .social-media {
    position: absolute;
    bottom: 50px;
    left: 10px;
    display: flex;

    .fa-github {
      margin-bottom: 1rem;
      margin-right: 1rem;
    }

    .fab {
      color: #cccccc;
      cursor: pointer;

      &:hover {
        color: $primary-green;
      }
    }
  }
}

@media only screen and (max-width: '900px') {
  .navbar {
    width: 100%;
    height: auto;
    flex-direction: row;
    .menu {
      display: none;
    }

    .logo {
      .brackets {
        margin: 0;
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
  }
}
</style>
