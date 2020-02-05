<template>
  <div class="project">
    <span v-on:click="toggleModal()">X</span>
    <h1 class="project__title">{{ project.title }}</h1>
    <div class="project__img-container">
      <img src="../../assets/moviehub2.jpg" />
    </div>
    <div class="project__description">
      <p>{{project.description}}</p>
    </div>
    <div class="project__tools">
      <ToolCard :key="tool.name" v-for="tool in project.tools" :tool="tool"></ToolCard>
    </div>
    <div class="project__links">
      <h2>
        <a href>View Live</a> |
        <a href>View Github</a>
      </h2>
    </div>
  </div>
</template>

<script>
import ToolCard from "../tool/ToolCard";
import gsap from "gsap";
export default {
  name: "Project",
  props: {
    project: Object,
    toggleModal: Function
  },
  components: {
    ToolCard
  },
  mounted() {
    let timeline = gsap.timeline();
    timeline.from(".project", 0.3, { x: 40, opacity: 0 });
    timeline.from(".project__title", 0.2, { y: 40, opacity: 0 });
    timeline.from(".project__img-container", 0.2, { y: 40, opacity: 0 });
    timeline.from(".project__description", 0.2, { y: 40, opacity: 0 });
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.project {
  color: white;
  font-family: "Open Sans", sans-serif;
  width: 75%;
  position: absolute;
  padding-top: 5rem;
  z-index: 1;
  padding: 3rem;
  background: #1b1b1b;

  &__title {
    font-size: 5rem;
    letter-spacing: 1px;
  }

  &__img-container {
    height: 75%;
    width: 100%;
    margin-top: 2rem;

    img {
      height: 100%;
      width: 100%;
    }
  }

  &__description {
    padding-top: 3rem;
    font-size: 2rem;
    line-height: 1.3;
    color: grey;
    font-family: "Raleway", sans-serif;
  }

  &__tools {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 4rem;
  }

  &__links {
    padding-top: 5rem;
    text-align: right;

    a {
      color: rgb(126, 191, 255);
      font-weight: normal;
    }
  }
}
</style>
