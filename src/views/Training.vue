<template>
    <div class="training">
      <div class="training-title">training</div>
      <div class="training-text">
        Our comprehensive training program is specifically designed for Border Collies, offering a variety of exercises to suit your dog's age, ability, and temperament. Whether you're looking to improve basic commands or teach advanced skills, you'll find step-by-step guides to help you through each exercise. Track your dog's progress, celebrate milestones, and strengthen the bond with your pet as you work together towards a well-trained and happy companion.
      </div>
      <div class="top-background"></div>
      <div class="middle-line"></div>
      <div class="bottom-background">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
      </div>
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
    opacity: 60%;
  }
  
  .training-text {
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    padding: 0 10%; 
  }
  
  .square {
    width: 27%; 
    height: 270px; 
    background-color: #EDD9B7;
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
  