<template>
  <div class="home">
    <div class="home__textbox">
      <h1 class="primary-header"><span>C</span>HRISTIAN REVEL</h1>
      <h2 class="secondary-header">Web Developer & Designer</h2>
      <button class="home__cta">Contact Me</button>
    </div>
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
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  name: 'Home',
  mounted() {
    gsap.from('.primary-header', { x: -200, opacity: 0 });
  },

  methods: {
    leave: function(el, done) {
      console.log(el);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../styles/main';

.home {
  display: flex;
  align-items: center;

  span {
    font-size: 11rem;
  }

  .primary-header {
    color: #f5f4f4;
    line-height: 0.9;
  }

  .secondary-header {
    color: $primary-green;
    font-weight: 300;
  }

  &__cta {
    background: white;
    margin-top: 2.5rem;
    padding: 1rem;
    width: 25%;
    font-size: 2.4rem;
    border: none;
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;

    &:focus {
      outline: 0;
    }

    &:hover {
      background: $primary-green;
    }
  }

  .codebox {
    position: absolute;
    right: 5%;
    top: 0;
    height: 100vh;
    width: 35vh;
    color: #252525;
    font-size: 4.5vh;
    overflow: hidden;
    z-index: -2;
  }

  .skills {
    color: white;
  }
}

// medium sized
@media only screen and (max-width: '1200px') {
  .home {
    &__textbox {
      margin-left: 1.8rem;
    }
    span {
      font-size: 7rem;
    }
    .primary-header {
      font-size: 6rem;
    }
    .secondary-header {
      font-size: 4rem;
    }

    &__cta {
      margin-top: 2.5rem;
      padding: 1rem;
      width: 40%;
      font-size: 2.4rem;
      border: none;
      cursor: pointer;
      font-weight: bold;
      border-radius: 5px;
    }
  }
}

@media only screen and (max-width: '900px') {
  .home {
    position: relative;
    height: 100vh;
    width: 100%;
    justify-content: center;
    text-align: center;
    span {
      font-size: 6rem;
    }
    .primary-header {
      font-size: 5.6rem;
      line-height: 1.2;
    }

    .secondary-header {
      font-size: 3.5rem;
    }

    &__cta {
      width: 55%;
      padding: 2rem;
      font-size: 2.4rem;
    }

    .codebox {
      right: 0%;
      width: 70%;
      font-size: 5vh;
      height: 100%;
    }
  }
}

@media only screen and (max-width: '900px') and (orientation: landscape) {
  .home {
    span {
      font-size: 10rem;
    }
    .primary-header {
      font-size: 9rem;
      line-height: 1.2;
    }

    .secondary-header {
      font-size: 6.5rem;
    }
    .codebox {
      right: 0%;
      width: 70%;
      font-size: 5.9vh;
    }
  }
}

@media only screen and (max-width: '800px') {
  .home {
    span {
      font-size: 6rem;
    }
    .primary-header {
      font-size: 5.6rem;
      line-height: 1.2;
    }

    .secondary-header {
      font-size: 3.5rem;
    }

    .codebox {
      font-size: 5vh;
    }
  }
}

@media only screen and (max-width: '800px') and (orientation: landscape) {
  .home {
    span {
      font-size: 8rem;
    }
    .primary-header {
      font-size: 7rem;
      line-height: 1.2;
    }

    .secondary-header {
      font-size: 4.5rem;
    }
    .codebox {
      right: 0%;
      width: 70%;
      font-size: 5.9vh;
    }
  }
}

// Media query for tablets
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .home {
    span {
      font-size: 9rem;
    }
    .primary-header {
      font-size: 7rem;
    }

    .secondary-header {
      font-size: 4rem;
    }
  }
}

@media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
  .home {
    span {
      font-size: 11rem;
    }
    .primary-header {
      font-size: 10rem;
    }

    .secondary-header {
      font-size: 7rem;
    }
  }
}
</style>
