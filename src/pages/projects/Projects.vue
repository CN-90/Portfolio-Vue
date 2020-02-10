<template>
  <div class="projects" ref="projects">
    <div class="codebox">
      &lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt; &lt;meta
      charset=&quot;utf-8&quot;&gt; &lt;title&gt;&lt;/title&gt; &lt;meta
      name=&quot;author&quot; content=&quot;&quot;&gt; &lt;meta
      name=&quot;description&quot; content=&quot;&quot;&gt; &lt;meta
      name=&quot;viewport&quot; content=&quot;width=device-width,
      initial-scale=1&quot;&gt; &lt;link href=&quot;css/normalize.css&quot;
      rel=&quot;stylesheet&quot;&gt; &lt;link href=&quot;css/style.css&quot;
      rel=&quot;stylesheet&quot;&gt; &lt;/head&gt; &lt;body&gt; &lt;p&gt;Hello,
      world!&lt;/p&gt; &lt;script
      src=&quot;https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js&quot;&gt;&lt;/script&gt;
      &lt;script src=&quot;js/script.js&quot;&gt;&lt;/script&gt; &lt;/body&gt;
      &lt;/html&gt;
    </div>
    <!-- <Project :toggleModal="openModal" v-if="this.modalActive" :project="this.currentProject"></Project> -->
    <ProjectCard :key="project.title" v-for="project in projects" :project="project"></ProjectCard>
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
    gsap.from(".codebox", 0.9, { y: -150, opacity: 0 });
  },
  data: function() {
    return {
      projects,
      currentProject: null,
      modalActive: false
    };
  },
  methods: {}
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
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: -1;
    font-size: 9vh;
    color: #1a1a1a;
  }
}

@media only screen and (max-width: "1100px") {
  .projects {
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  .animate {
    width: 70%;
    height: 70%;
  }
}

@media only screen and (max-width: "900px") {
  .projects {
    flex-direction: column;
    flex-wrap: nowrap;
    margin-left: 0%;
    justify-content: center;
    align-items: center;
  }

  .animate {
    width: 70%;
    height: 70%;
  }
}

@media only screen and (max-width: "750px") {
  .projects {
    margin-top: 15rem;
  }

  .animate {
    width: 90%;
    width: 90%;
  }
}
</style>
