<template>
    <div class="food">
      <div class="home-title">home</div>
      <div class="home-text">
        Learn about the unique traits of Border Collies, including their intelligence, energy, and agility. Discover how their working nature and trainability make them excellent companions and pets. Understanding these traits helps you provide the best care and training for your Border Collie.
      </div>
  
      <div class="food-title">food</div>
  
      <div class="top-background"></div>
      <div class="middle-line"></div>
  
      <div class="bottom-background">
        <router-link v-if="currentSet === 1" to="/bestfood" class="square left">
          <div class="square-title-wrapper">
            <div class="square-title">Best Foods for Border Collies: Learn What is the Best Food for Your Dog</div>
            <div class="square-description">
              Border Collies require a balanced diet with high-quality proteins, fats, and carbohydrates. Discover the best dog food options for your Border Collie, whether you're feeding them kibble, raw food, or homemade meals. Choosing the right food is crucial for their energy, health, and well-being.
            </div>
          </div>
        </router-link>
  
        <router-link v-if="currentSet === 1" to="/feedingpuppies" class="square center">
          <div class="square-title-wrapper">
            <div class="square-title">Feeding Border Collie Puppies: What You Need to Know</div>
            <div class="square-description">
              Puppies have different nutritional needs compared to adult dogs. Learn how to feed your Border Collie puppy, including the right types of food and feeding schedules to promote healthy growth and development. Ensure your puppy gets all the nutrients it needs for a strong start in life.
            </div>
          </div>
        </router-link>
  
        <router-link v-if="currentSet === 1" to="/dietaryneeds" class="square right">
          <div class="square-title-wrapper">
            <div class="square-title">Border Collie Dietary Needs: Age, Activity, and Health</div>
            <div class="square-description">
              The dietary needs of a Border Collie can vary depending on their age, activity level, and health. Find out how to adjust their food intake to match their life stage and keep them at their healthiest. Proper nutrition is key to supporting their active lifestyle.
            </div>
          </div>
        </router-link>
  
        <router-link v-if="currentSet === 2" to="/foodallergies" class="square left">
          <div class="square-title-wrapper">
            <div class="square-title">Identifying and Managing Common Food Allergies in Border Collies: What Every Owner Should Know</div>
            <div class="square-description">
              Some Border Collies may suffer from food allergies that can cause skin irritation, digestive issues, or other health problems. Learn about common food allergens and how to identify and manage food allergies in your dog. Proper diagnosis and a tailored diet can help improve your dog’s quality of life.
            </div>
          </div>
        </router-link>
      </div>
  
      <img src="@/assets/slike/borderzel.png" alt="borderzel" class="borderzel-image" />
  
      <div class="navigation">
        <div class="nav-circle" @click="changeSet(1)"></div>
        <div class="nav-circle" @click="changeSet(2)"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Food",
    data() {
      return {
        currentSet: 1, 
      };
    },
    methods: {
      changeSet(setNumber) {
        this.currentSet = setNumber; 
      },
    },
  };
  </script>
  
  <style scoped>
  .food {
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
    position: fixed;
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
  
  .food-title {
    font-family: 'ChunkyRetro', sans-serif;
    font-size: 15rem;  
    color: #5F5F5F;
    text-align: center;
    position: absolute;
    top: 37.5%; 
    width: 100%;
    z-index: 2;
    opacity: 30%;
    pointer-events: none;
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
    background-color: #EDD9B7;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
  }
  
  .square-title-wrapper {
    position: absolute;
    top: 15%;
    width: 95%;
    text-align: left;
    left: 5%;
  }
  
  .left, .center, .right {
    background-color: #FFFEF9;
  }
  
  .square-title {
    font-family: 'CenturyGothic', sans-serif;
    font-size: 0.95em;
    font-weight: bold;
    color: #5F5F5F;
  }
  
  .square-description {
    font-family: 'CenturyGothic', sans-serif;
    font-size: 0.85rem;
    color: #5F5F5F;
    margin-top: 10px;
    width: 95%;
  }
  
  .borderzel-image {
    position: fixed;
    right: 60px;
    top: 8%;
    width: auto;
    height: 50%;
    object-fit: contain;
    z-index: 2;
  }
  
  .navigation {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 20px;
    z-index: 10;
  }
  
  .nav-circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #FFFEF9;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .nav-circle:hover {
    background-color: #AEEBBA;
  }
  </style>
  