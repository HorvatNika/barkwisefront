<template>
    <div class="home">
      <div class="top-background"></div>
  
      <div class="middle-line"></div>
  
      <div class="bottom-background"></div>
  
      <img src="@/assets/slike/borderzel.png" alt="borderzel" class="borderzel-image" />
    </div>
  </template>
  
  <script>
  export default {
    name: "Home",
  };
  </script>
  
  <style scoped>
  .home {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    position: relative; 
  }
  
  .top-background {
    background-color: #AEEBBA;
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
  
  .borderzel-image {
    position: absolute;
    right: 60px; 
    top: 6%;
    width: auto; 
    height: 50%;
    object-fit: contain; 
    z-index: 10; 
  }
  </style>
  