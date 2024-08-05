<template>
    <div class="container">
      <h1>Welcome to My Nuxt 3 App</h1>
      <NuxtLink to="/register" class="link">Go to Register</NuxtLink>
    </div>
  </template>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f4f8;
    text-align: center;
  }
  
  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
  }
  
  .link {
    font-size: 1.2rem;
    color: #007bff;
    text-decoration: none;
    padding: 10px 20px;
    border: 2px solid #007bff;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .link:hover {
    background-color: #007bff;
    color: #fff;
  }
  </style>
  