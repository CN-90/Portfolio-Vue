<template>
  <div class="tool">
    <div class="tool-img">
      <img :src="tool.img" alt />
    </div>
    <div class="tool-name">
      <p>{{tool.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToolCard",
  props: {
    tool: Object
  }
};
</script>


<style lang="scss" scoped>
.tool {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-height: 60px;
  max-width: 40px;
  transform: translateX(-10px);
  transition: opacity 0.2s ease-in, transform 0.2s ease-in;
  margin: 0rem 1.5rem;
  &-img {
    max-height: 60%;
    min-height: 60%;
    margin: 0 auto;

    img {
      height: 100%;
      width: 100%;
      text-align: center;
      margin: 0 auto;
    }
  }

  &-name {
    font-size: 1.5rem;
    padding-top: 1rem;
    text-align: center;
  }
}
</style>