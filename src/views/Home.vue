<template>
    <div class="home">
      <div class="home-title">home</div>
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
  
  .home-title {
    font-family: 'ChunkyRetro', sans-serif;
    font-size: 17rem;
    color: #FFFEF9;
    text-align: left; 
    position: absolute;
    top: 1%;
    left: 15%; 
    width: 100%;
    z-index: 2;
  }
  
  .top-background {
    background-color: #AEEBBA;
    flex: 1;
    z-index: 1;
  }
  
  .middle-line {
    background-color: #FFFEF9;
    height: 100px;
    z-index: 1;
  }
  
  .bottom-background {
    background-color: #EEEEE6;
    flex: 1;
    z-index: 1;
  }
  
  .borderzel-image {
    position: fixed;
    right: 60px;
    top: 15%;
    width: auto;
    height: 50%;
    object-fit: contain;
    z-index: 2;
  }
  </style>
  