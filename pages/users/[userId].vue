<template>
    <div class="user-details-container">
      <div v-if="!loading" class="user-details-card">
        <h2>{{ user.name }}</h2>
        <p>{{ user.email }}</p>
      </div>
      <div v-else class="loading-message">
        <p>Loading User Details...</p>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  
  interface User {
    name: string;
    email: string;
  }
  
  const loading = ref(true);
  const user = ref<User>({
    name: '',
    email: '',
  });
  
  const userId = useRoute().params.userId;
  
  onMounted(async () => {
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();
    user.value = data;
    loading.value = false;
  });
  </script>
  
  <style scoped>
  .user-details-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f0f4f8;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .user-details-card {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 100%;
    max-width: 400px;
    text-align: center;
  }
  
  .user-details-card h2 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 10px;
  }
  
  .user-details-card p {
    font-size: 1.2rem;
    color: #555;
  }
  
  .loading-message {
    font-size: 1.2rem;
    color: #555;
    text-align: center;
  }
  </style>
  