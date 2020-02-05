<template>
  <div class="projects">
    <Project :toggleModal="openModal" v-if="this.modalActive" :project="projects[0]"></Project>
    <ProjectCard
      :toggleModal="openModal"
      :key="project.title"
      v-for="project in projects"
      :project="project"
    ></ProjectCard>
  </div>
</template>

<script>
import ProjectCard from "../../components/project-card/ProjectCard";
import Project from "../../components/project/Project";
import projects from "../../utils/Projects";
import gsap from "gsap";

export default {
  name: "Projects",
  components: {
    ProjectCard,
    Project
  },
  mounted() {
    let timeline = gsap.timeline();
    timeline.from(".animate", 0.8, { y: 60, opacity: 0, stagger: 0.3 });
  },
  data: function() {
    return {
      projects: projects,
      currentProject: null,
      modalActive: false
    };
  },
  methods: {
    openModal() {
      this.modalActive = !this.modalActive;
    }
  }
};
</script>

<style lang="scss" scoped>
.projects {
  margin-left: 20%;
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;

  .codebox {
    position: absolute;
    left: 0;
    width: 20%;
    height: 20%;
    z-index: -1;
    font-size: 6vh;
    color: #252525;
  }
}

@media only screen and (max-width: "900px") {
  .projects {
    flex-direction: column;
    flex-wrap: nowrap;
    margin-left: 0%;
    justify-content: center;
    align-items: center;
    margin-top: 20%;
  }

  .animate {
    width: 60%;
  }
}

@media only screen and (max-width: "700px") {
  .animate {
    width: 80%;
  }
}
</style>
