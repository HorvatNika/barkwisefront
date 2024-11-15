<template>
    <div class="profile">
      <div class="profile-title">profile</div>
      <div class="profile-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
      <div class="top-background"></div>
      <div class="middle-line"></div>
      <div class="bottom-background"></div>
      <img src="@/assets/slike/borderpla.png" alt="borderpla" class="borderzel-image" />
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
    position: relative;
  }
  
  .profile-title {
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
  
  .profile-text {
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
    background-color: #BAE1F0;
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
    top: 25%;
    width: auto;
    height: 40%;
    object-fit: contain;
    z-index: 10;
  }
  </style>
  