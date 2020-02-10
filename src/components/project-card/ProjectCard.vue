<template>
  <div class="animate" v-on:click="handleProjectClick">
    <div class="project-card">
      <div class="project-tools">
        <h4>Built With</h4>
        <div class="tool-container">
          <ToolCard :key="tool.name" v-for="tool in project.tools" :tool="tool"></ToolCard>
        </div>
      </div>
      <button>View Project</button>
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
  methods: {
    handleProjectClick() {
      this.$router.push({
        name: `projects`,
        params: { id: this.project.title }
      });
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../../styles/main";

.animate {
  width: 47%;
  height: 40%;
  min-height: 300px;
  margin: 1rem;
  margin-top: 10rem;
}
.project-card {
  position: relative;
  height: 100%;
  width: 100%;
  color: white;
  background: #232323;
  transform: translateY(0px);
  transition: transform 0.4s ease-in-out;
  font-family: "Poppins", sans-serif;

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
    top: 80%;
    margin-left: -70px;
    background: #414141;
    font-weight: bold;
    color: #ffffff;
    outline: none;
    cursor: pointer;
    font-size: 1.7rem;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.2s ease-in, transform 0.3s ease-in-out;
    transition-delay: 0.2s;

    &:hover {
      background: $primary-green;
      color: #161515;
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
      top: 0.5rem;
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

@media only screen and (max-width: "1300px") {
  .project-card {
    button {
      padding: 1rem 2rem;
    }
  }
}

@media only screen and (max-width: "900px") {
  .animate {
    margin-top: 15rem;
  }
  .project-card {
    button {
      padding: 2rem 5rem;
      margin-left: -60px;
      font-size: 2rem;
    }
  }
}

@media only screen and (max-width: "750px") {
  .animate {
    margin-bottom: 8rem;
    width: 95%;
    margin-top: 3rem;
    min-height: 0;
  }
}
</style>