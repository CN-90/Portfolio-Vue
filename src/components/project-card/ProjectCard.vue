<template>
  <div class="animate">
    <div class="project-card">
      <div class="project-tools">
        <h4>Built With</h4>
        <div class="tool-container">
          <ToolCard :key="tool.name" v-for="tool in project.tools" :tool="tool"></ToolCard>
        </div>
      </div>
      <button v-on:click="toggleModal()">View Project</button>
      <img :src="project.img" alt />
      <h1 class="project-card__title">{{project.title}}</h1>
    </div>
  </div>
</template>

<script>
import ToolCard from "../tool/ToolCard";

export default {
  name: "ProjectCard",
  props: {
    project: Object,
    toggleModal: Function
  },
  components: {
    ToolCard
  },
  mounted() {}
};
</script>


<style lang="scss" scoped>
@import "../../styles/main";

.animate {
  width: 47%;
  height: 40%;
  margin: 1rem;
}
.project-card {
  margin: 1rem;
  position: relative;
  height: 100%;
  width: 100%;
  color: white;
  background: #232323;
  margin-top: 8rem;
  transform: translateY(0px);
  transition: transform 0.4s ease-in-out;

  .tool {
    opacity: 0;
  }

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 0%;
    background: #1a1a1a;
    transition: width 0.3s ease-in;
  }

  &:hover {
    transform: translateY(-20px);

    &::before {
      width: 100%;
    }

    button {
      opacity: 1;
      transform: translateY(-20px);
    }

    .tool {
      opacity: 1;
      transform: translateX(0px);
      transition: transform 0.1s ease-in, opacity 0.1 ease-in;
      transition-delay: 0.2s;
    }

    h4 {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  &__title {
    bottom: 0;
    text-align: center;
    font-size: 2rem;
    left: 0;
    background: rgba(29, 29, 29, 0.9);
    width: 100%;
    color: white;
    padding: 0.8em;
  }

  img {
    height: 100%;
    width: 100%;
  }

  button {
    padding: 1.5rem 2rem;
    border-radius: 5px;
    border: none;
    position: absolute;
    left: 50%;
    top: 70%;
    margin-left: -70px;
    background: rgb(34, 34, 34);
    font-weight: bold;
    color: white;
    cursor: pointer;
    font-size: 1.7rem;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.2s ease-in, transform 0.3s ease-in-out;
    transition-delay: 0.2s;

    &:hover {
      background: $primary-green;
      color: black;
    }
  }

  .project-tools {
    position: absolute;
    top: 0;
    padding: 1rem;
    width: 100%;
    height: 200px;

    .tool-container {
      display: flex;
      flex-wrap: wrap;
      position: relative;
      top: 1.5rem;
    }
  }

  h4 {
    font-size: 2rem;
    opacity: 0;
    letter-spacing: 1px;
    transform: translateX(-10px);
    transition: transform 0.4s linear, opacity 0.3s linear;
  }
}
</style>