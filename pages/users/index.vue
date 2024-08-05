<template>
    <div class="user-list-container">
      <table v-if="!loading" class="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td><NuxtLink :to="`/users/${user.id}`">{{ user.name }}</NuxtLink></td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
      <div v-else class="loading-message">
        <p>Loading Users...</p>
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
  const users = ref<User[]>([]);
  
  onMounted(async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    users.value = data;
    loading.value = false;
  });
  </script>
  
  <style scoped>
  .user-list-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f8f9fa;
    min-height: 100vh;
    box-sizing: border-box;
  }
  
  .user-table {
    width: 100%;
    max-width: 600px;
    border-collapse: collapse;
    margin: 20px 0;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .user-table th,
  .user-table td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 12px;
  }
  
  .user-table th {
    background-color: #007bff;
    color: white;
    font-weight: bold;
  }
  
  .user-table tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  .loading-message {
    font-size: 1.2rem;
    color: #555;
    margin-top: 20px;
  }
  </style>
  