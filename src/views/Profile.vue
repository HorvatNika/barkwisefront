<template>
    <div class="profile">
      <div class="top-background"></div>
  
      <div class="middle-line"></div>
  
      <div class="bottom-background"></div>

      <img src="@/assets/slike/borderpla.png" alt="borderzel" class="borderzel-image" />
    </div>
  </template>
  
  <script>
  export default {
    name: "Profile",
  };
  </script>
  
  <style scoped>
  .profile {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
  }
  
  .top-background {
    background-color: #BAE1F0;
    flex: 1; 
  }
  
  .middle-line {
    background-color: #FFFEF9;
    height: 100px; 
  }
  
  .bottom-background {
    background-color: #EEEEE6;
    flex: 1; 
  }
  
  h1 {
    text-align: center;
    font-size: 2rem;
    z-index: 10;
    position: relative;
  }

  .borderzel-image {
    position: absolute; 
    right: 70px; 
    top: 25%; 
    width: auto; 
    height: 40%; 
    object-fit: contain; 
    z-index: 10; 
  }
  </style>
  