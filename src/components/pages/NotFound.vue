<template>
  <div class="not-found-container">
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <button @click="goToDashboard">Go Back to Home</button>
    <!-- <router-link :to="{ name: 'dashboard' }">Go Back to Home</router-link> -->
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goToDashboard() {
  router.replace({ name: 'dashboard' })
}
</script>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
}
button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}
button:hover {
  background-color: #369870;
}
a {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}
a:hover {
  background-color: #369870;
}
</style>
