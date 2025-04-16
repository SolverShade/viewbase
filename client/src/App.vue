<template>
  <div class="app-container">
    <header class="app-header">
    </header>
    <nav class="app-nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/testing">Testing</RouterLink>
      <RouterLink to="/tags">Tags</RouterLink>
    </nav>
    <main class="app-main">
      <RouterView />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
.app-container {
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.6;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.app-header {
  text-align: center;
  margin-bottom: 20px;
}

.app-header h1 {
  font-size: 2.5rem;
  color: #4CAF50;
}

.app-nav {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
}

.app-nav a {
  text-decoration: none;
  color: #4CAF50;
  font-weight: bold;
  transition: color 0.3s ease;
}

.app-nav a:hover {
  color: #388E3C;
}

.app-main {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
