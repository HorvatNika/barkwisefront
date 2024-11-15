<template>
    <div class="training">
      <div class="training-title">training</div>
      <div class="top-background"></div>
      <div class="middle-line"></div>
      <div class="bottom-background"></div>
      <img src="@/assets/slike/bordernar.png" alt="bordernar" class="borderzel-image" />
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
    position: relative;
  }
  
  .training-title {
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
    background-color: #EDD9B7;
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
    right: 70px;
    top: 31%;
    width: auto;
    height: 35%;
    object-fit: contain;
    z-index: 10;
  }
  </style>
  