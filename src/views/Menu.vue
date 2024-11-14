<template>
    <div class="menu-page">
      <img src="@/assets/slike/splotch3.svg" alt="Green Splotch" class="splotch splotch-green" />
    
      <img src="@/assets/slike/splotch1.svg" alt="Beige Splotch" class="splotch splotch-beige" />
    
      <img src="@/assets/slike/splotch2.svg" alt="Blue Splotch" class="splotch splotch-blue" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'MenuPage'
  };
  </script>
  
  <style scoped>
  .menu-page {
    background-color: #FBFBC0; 
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }
  
  .splotch {
    position: absolute;
    width: 50vw; 
    height: auto;
  }
  
  .splotch-green {
    top: 30%;
    left: 10%;
  }
  
  .splotch-beige {
    top: 15%;
    right: 10%;
  }
  
  .splotch-blue {
    bottom: 10%;
    left: 45%;
  }
  </style>
  