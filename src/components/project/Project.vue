<template>
  <div class="project-container">
    <div class="project" v-if="project">
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
      <span class="project__close" @click="backToProjects">X</span>
      <h1 class="project__title">{{ project.title }}</h1>
      <div class="project__img-container">
        <img :src="project.img" />
      </div>
      <div class="project__description">
        <p>{{ project.description }}</p>
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
  </div>
</template>

<script>
import ToolCard from "../tool/ToolCard";
import gsap from "gsap";
import projects from "../../utils/Projects";

export default {
  name: "Project",
  created() {
    this.project = projects.filter(project => {
      return project.title === this.$route.params.id;
    })[0];
  },
  mounted() {
    let timeline = gsap.timeline();
    timeline
      .from(".project", 0.3, {
        x: 150,
        opacity: 0
      })
      .from(".project__title", 0.2, { y: 40, opacity: 0 })
      .from(".project__img-container", 0.2, { y: 40, opacity: 0 })
      .from(".project__description", 0.2, { y: 40, opacity: 0 })
      .from(".project__tools", 0.2, { y: 40, opacity: 0 });
    gsap.from(".codebox", 0.8, { y: -200, opacity: 0 });
  },

  data() {
    return {
      project: null
    };
  },
  components: {
    ToolCard
  },

  methods: {
    backToProjects() {
      this.$router.push("/projects");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/main";

.project-container {
  display: flex;
  margin-left: 20%;
  align-items: center;
  justify-content: center;
  height: auto;
}

.project {
  color: white;
  font-family: "Open Sans", sans-serif;
  width: 90%;
  height: auto;
  padding-top: 5rem;
  padding: 3rem;
  background: #1b1b1b;
  position: relative;
  overflow: hidden;

  .codebox {
    position: absolute;
    overflow: hidden;
    right: 0;
    width: 60%;
    z-index: -1;
    color: #181818;
    font-size: 5vh;
  }

  &__close {
    position: absolute;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    background: #5f5f5f;
    color: #1b1b1b;
    right: 25px;
    cursor: pointer;
    font-size: 1.5rem;
    justify-content: center;
    font-weight: bold;
    z-index: 1;

    &:hover {
      background: $primary-green;
    }
  }

  &__title {
    font-size: 5rem;
    letter-spacing: 1px;
  }

  &__img-container {
    height: 60%;
    width: 70%;
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
    color: #ababab;
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
      color: #9fd0ff;
      font-weight: normal;
    }
  }
}

@media only screen and (max-width: "900px") {
  .project-container {
    width: 100%;
    margin-left: 0;
    margin-top: 100px;
  }
  .project {
    text-align: center;
    height: auto;
    min-height: 100%;
    width: 100%;

    &__close {
      position: absolute;
      right: 15px;
    }

    &__img-container {
      width: 90%;
      height: 90%;
      margin: 0 auto;
      margin-top: 2rem;
    }

    &__description {
      font-size: 2.5rem;
      width: 90%;
      margin: 0 auto;
    }

    &__tools {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin: 0 auto;
      margin-top: 4rem;
      width: 80%;
      justify-content: center;
    }

    &__links {
      padding-top: 8rem;
      font-size: 1.4rem;
    }
  }
}
</style>
