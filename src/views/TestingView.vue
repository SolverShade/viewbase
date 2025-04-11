<template>
  <div class="image-view">
    <h1>Document Image</h1>
    <img :src="imageSrc" alt="Document" />
  </div>
</template>

<script>
export default {
  name: 'ImageView',
  data() {
    return {
      imageSrc: require('@/assets/doc.png'),
    }
  },
}
</script>

<style scoped>
.image-view {
  text-align: center;
  margin-top: 20px;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
