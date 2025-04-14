<template>
  <div class="image-view">
    <img :src="imageSrc" alt="Document" />
    <h2 v-if="loading">Loading{{ dots }}</h2> <!-- Show animated loading text -->
    <h2 v-else>
      Doc Fargus says<br />
      {{ helloText }}
    </h2>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ImageView',
  data() {
    return {
      imageSrc: require('@/assets/doc.png'),
      helloText: '',
      loading: true, // State to track loading
      dotCount: 1, // State to track dots
    };
  },
  computed: {
    dots() {
      return '.'.repeat(this.dotCount);
    },
  },
  methods: {
    async fetchHelloWorld() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_API_URL}/helloWorld`);
        this.helloText = response.data;
      } catch (error) {
        this.helloText = 'Error fetching data. server running?';
        console.error('Error fetching HelloWorld:', error);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.fetchHelloWorld();
    this.dotInterval = setInterval(() => {
      this.dotCount = this.dotCount % 3 + 1; // Cycle between 1-3 dots
    }, 500);
  },
  beforeMount() {
    clearInterval(this.dotInterval);
  },
};
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
