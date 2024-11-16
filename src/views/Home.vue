<template>
  <div class="home">
    <div class="home-title">home</div>
    <div class="home-text">
      Explore a variety of expert-written articles focused on maintaining the health and well-being of your Border Collie. From dietary advice and exercise routines to grooming tips and common health issues, our resources are designed to help you give your furry companion the best care possible. Stay informed with the latest news and insights to ensure your Border Collie leads a happy and healthy life.
    </div>
    <div class="top-background"></div>
    <div class="middle-line"></div>
    <div class="bottom-background">
      <div class="square left">
        <div class="square-title-wrapper">
          <div class="square-title">Collie Traits</div>
        </div>
        <div class="square-description">
          Learn about the unique traits of Border Collies, including their intelligence, energy, and agility. Discover how their working nature and trainability make them excellent companions and pets. Understanding these traits helps you provide the best care and training for your Border Collie.
        </div>
        <img src="@/assets/slike/collietraits.png" alt="Collie Traits" class="collie-traits-image" />
      </div>
      <div class="square center">
        <div class="square-title-wrapper">
          <div class="square-title">Health and Care</div>
        </div>
        <div class="square-description">
          Explore essential health and care tips for Border Collies, including advice on diet, exercise, and common health issues. Learn about preventive care, vaccinations, and grooming techniques to keep your Border Collie happy and healthy.
        </div>
        <img src="@/assets/slike/healthcare.png" alt="Health and Care" class="healthcare-image" />
      </div>
      <div class="square right">
        <div class="square-title-wrapper">
          <div class="square-title">Food</div>
        </div>
        <div class="square-description">
          Discover the best diet for your Border Collie, including recommendations for high-quality food that supports their energy needs, health, and vitality. Learn about portion sizes, feeding schedules, and special dietary considerations.
        </div>
        <img src="@/assets/slike/food.png" alt="Food" class="food-image" />
      </div>
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
  left: 35%;
  width: 100%;
  text-align: left;
}

.left, .center, .right {
  background-color: #FFFEF9;
}

.square-title {
  font-family: 'montel', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: #5F5F5F;
}

.square-description {
  font-family: 'CenturyGothic', sans-serif;
  font-size: 0.9rem;
  color: #5F5F5F;
  text-align: left;
  padding: 10px;
  position: relative;
  bottom: 10%;
  width: 60%;
  left: 15%;
  top: 20%;
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

.collie-traits-image {
  position: absolute;
  top: 50%;
  left: 3%;
  transform: translateY(-50%) rotate(-10deg);
  width: 30%;
  height: auto;
  object-fit: contain;
}

.healthcare-image {
  position: absolute;
  top: 30%;
  left: 9%;
  width: 18%;
  transform: rotate(-8deg);
  height: auto;
  object-fit: contain;
}

.food-image {
  position: absolute;
  top: 30%;
  left: 8%;
  width: 19%;
  height: auto;
  object-fit: contain;
}
</style>
