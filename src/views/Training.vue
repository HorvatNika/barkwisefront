<template>
    <div class="training">
      <div class="top-background"></div>
  
      <div class="middle-line"></div>
  
      <div class="bottom-background"></div>

      <img src="@/assets/slike/bordernar.png" alt="borderzel" class="borderzel-image" />
    </div>
  </template>
  
  <script>
  export default {
    name: "Training",
  };
  </script>
  
  <style scoped>
  .training {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
  }
  
  .top-background {
    background-color: #EDD9B7;
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
    top: 31%; 
    width: auto; 
    height: 35%; 
    object-fit: contain;
    z-index: 10; 
  }
  </style>
  