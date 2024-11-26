<template>
    <div class="profile">
      <div class="profile-title">dog profile</div>
      <div class="top-background"></div>
      <img src="@/assets/slike/borderpla.png" alt="borderpla" class="border-image" />
    </div>
  </template>
  
  <script>
  export default {
    name: "DogProfile",
  };
  </script>
  
  <style scoped>
  .profile {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    position: relative;
    background-color: #BAE1F0;
  }
  
  .profile-title {
    font-family: 'ChunkyRetro', sans-serif;
    font-size: 17rem;
    color: #FFFEF9;
    text-align: left;
    position: fixed;
    top: 1%;
    left: 15%;
    width: 100%;
    z-index: 2;
    opacity: 60%;
  }
  
  .top-background {
    flex: 1;
    z-index: 1;
  }
  
  .border-image {
    position: fixed;
    right: 70px;
    top: 24%;
    width: auto;
    height: 35%;
    object-fit: contain;
    z-index: 10;
  }
  </style>
  