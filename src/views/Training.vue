<template>
  <div class="training">
    <div class="training-title">training</div>
    <div class="training-text">
      Our comprehensive training program is specifically designed for Border Collies, offering a variety of exercises to suit your dog's age, ability, and temperament. Whether you're looking to improve basic commands or teach advanced skills, you'll find step-by-step guides to help you through each exercise.
    </div>
    <div class="top-background"></div>
    <div class="middle-line"></div>
    <div class="bottom-background">
      <div class="square left" @click="navigateTo('/trainingplan')">
        <div class="square-title-wrapper">
          <div class="square-title">Training Plan</div>
        </div>
        <div class="square-description">
          Learn the best exercises for your Border Collie, from basic commands like sit and stay, to advanced agility courses. Follow structured steps and use positive reinforcement for steady progress.
        </div>
        <img src="@/assets/slike/training.png" alt="Training Plan" class="training-image" />
      </div>

      <div class="square center" @click="navigateTo('/personalizedplan')">
        <div class="square-title-wrapper">
          <div class="square-title">Personal Plan</div>
        </div>
        <div class="square-description">
          Discover personalized training plans based on your dog's specific needs, age, and behavior to maximize their potential. Whether your Border Collie is a young pup or an adult, our program adapts to their learning speed, energy level, and preferences.
        </div>
        <img src="@/assets/slike/training.png" alt="Personal Plan" class="training-image" />
      </div>

      <div class="square right" @click="navigateTo('/schedule')">
        <div class="square-title-wrapper">
          <div class="square-title">Schedule</div>
        </div>
        <div class="square-description">
          Keep your Border Collie on track with a structured schedule for their training. Consistency is key, and our training program helps you set a daily or weekly plan to ensure your dog stays engaged and motivated.
        </div>
        <img src="@/assets/slike/personalplan.png" alt="Schedule" class="schedule-image" />
      </div>
    </div>
    <img src="@/assets/slike/bordernar.png" alt="bordernar" class="borderzel-image" />
  </div>
</template>

<script>
export default {
  name: "Training",
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
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
  position: fixed;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;
}

.left, .center, .right {
  background-color: #FFFEF9;
}

.square-title-wrapper {
  position: absolute;
  top: 15%;
  left: 35%;
  width: 100%;
  text-align: left;
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

.training-image {
  position: absolute;
  top: 30%;
  left: 5%;
  width: 25%;
  height: auto;
  object-fit: contain;
}

.schedule-image {
  position: absolute;
  top: 25%;
  left: 10%;
  width: 11.5%;
  height: auto;
  object-fit: contain;
}

.borderzel-image {
  position: fixed;
  right: 70px;
  top: 24%;
  width: auto;
  height: 35%;
  object-fit: contain;
  z-index: 10;
}
</style>
