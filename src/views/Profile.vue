<template>
  <div class="profile">
    <div class="profile-title">profile</div>
    <div class="profile-text">
      Take control of your and your dog's profile with a simple and intuitive interface. Update personal information, track your Border Collie’s training milestones, and access detailed progress reports. With easy-to-follow insights, you can monitor your dog's development over time and adjust their training routine as needed. Stay on top of your dog's achievements and ensure they continue to progress in their training journey.
    </div>
    <div class="top-background"></div>
    <div class="middle-line"></div>
    <div class="bottom-background">
      <div class="square left" @click="navigateTo('/dogprofile')">
        <div class="square-title-wrapper">
          <div class="square-title">Dog Profile</div>
        </div>
        <div class="square-description">
          Create and update your Border Collie’s profile, including personal details like age, breed, health information, and training progress. A comprehensive overview to help you manage all the essential data for your dog.
        </div>
        <img src="@/assets/slike/dogprofile.png" alt="Dog Profile" class="profile-image" />
      </div>

      <div class="square center" @click="navigateTo('/progress')">
        <div class="square-title-wrapper">
          <div class="square-title">Progress</div>
        </div>
        <div class="square-description">
          Track your dog’s training progress with detailed reports and milestones. See how your dog is improving in various skills and behaviors, with visual progress charts to make tracking easier.
        </div>
        <img src="@/assets/slike/progress.png" alt="Progress" class="progress-image" />
      </div>

      <div class="square right" @click="navigateTo('/journal')">
        <div class="square-title-wrapper">
          <div class="square-title">Journal</div>
        </div>
        <div class="square-description">
          Record all the important moments and memories from your dog's life. Create a personalized journal to document special events and milestones that you and your furry friend will cherish forever.
        </div>
        <img src="@/assets/slike/journal.png" alt="Journal" class="journal-image" />
      </div>
    </div>
    <img src="@/assets/slike/borderpla.png" alt="borderpla" class="borderzel-image" />
  </div>
</template>

<script>
export default {
  name: "Profile",
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
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
  position: fixed;
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

.profile-image {
  position: absolute;
  top: 29%;
  left: 8%;
  width: 21%;
  height: auto;
  object-fit: contain;
}

.progress-image {
  position: absolute;
  top: 30%;
  left: 8.2%;
  width: 19%;
  height: auto;
  object-fit: contain;
}

.journal-image {
  position: absolute;
  top: 32%;
  left: 8%;
  width: 20%;
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
