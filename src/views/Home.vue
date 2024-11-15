<template>
    <div class="home">
      <div class="home-title">home</div>
      <div class="home-text">
        Explore a variety of expert-written articles focused on maintaining the health and well-being of your Border Collie. From dietary advice and exercise routines to grooming tips and common health issues, our resources are designed to help you give your furry companion the best care possible. Stay informed with the latest news and insights to ensure your Border Collie leads a happy and healthy life.
      </div>
      <div class="top-background"></div>
      <div class="middle-line"></div>
      <div class="bottom-background">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
      </div>
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
    opacity: 60%;
  }
  
  .home-text {
    font-family: 'CenturyGothic', sans-serif;
    font-size: 1rem;
    color: #FFFEF9;
    text-align: left;
    margin-top: 11%;
    position: absolute;
    left: 15%;
    width: 50%;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    padding: 0 10%; 
  }
  
  .square {
    width: 27%; 
    height: 270px;
    background-color: #AEEBBA;
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
  