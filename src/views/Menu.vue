<template>
  <div class="menu-page">
    <div class="splotch splotch-green">
      <img src="@/assets/slike/splotch3.png" alt="Green Splotch" />
      <span class="text-green" @click="goToHome">home</span>
      <span class="description-text">Discover articles on Border Collie health and care and stay updated with the latest tips and news.</span>
    </div>
    <div class="splotch splotch-beige">
      <img src="@/assets/slike/splotch1.png" alt="Beige Splotch" />
      <span class="text-beige" @click="goToTraining">training</span>
      <span class="description-text">Access all the training exercises, tailored for your Border Collie, and monitor your dog’s progress step by step.</span>
    </div>
    <div class="splotch splotch-blue">
      <img src="@/assets/slike/splotch2.png" alt="Blue Splotch" />
      <span class="text-blue" @click="goToProfile">profile</span>
      <span class="description-text">Manage your profile and your dog's profile, and easily track your dog's training progress.</span>
    </div>
  </div>

</template>

<script>
export default {
  name: 'MenuPage',
  methods: {
    goToHome() {
      this.$router.push('/home');
    },
    goToTraining() {
      this.$router.push('/training');
    },
    goToProfile() {
      this.$router.push('/profile');
    },
  }
};
</script>

<style scoped>
.menu-page {
  background-color: #FBFBC0;
  min-height: 100vh;
  padding: 20px;
  display: fixed;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Montel', sans-serif;
  position: relative;
}

.splotch {
  position: absolute;
  width: 900px;
  height: auto;
  display: fixed;
  justify-content: center;
  align-items: center;
}

.splotch img {
  width: 100%;
  height: auto;
}

.text-green, .text-beige, .text-blue {
  position: absolute;
  color: white; 
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.splotch-green {
  top: 20%;
  right: 53%;
}

.splotch-beige {
  bottom: 40%;
  right: 23%;
}

.splotch-blue {
  top: 37%;
  left: 54%;
}

.text-green {
  color: #5F5F5F; 
  font-family: 'chunkyretro', sans-serif;
  font-size: 80px;
  bottom: 185px;
  left: -72px;
}

.text-beige {
  color: #5F5F5F; 
  font-family: 'chunkyretro', sans-serif;
  font-size: 80px;
  top: 230px;
  left: -70px;
}

.text-blue {
  color: #5F5F5F; 
  font-family: 'chunkyretro', sans-serif;
  font-size: 80px;
  top: 252px;
  left: -122px;
}

.description-text {
  position: absolute;
  color: #5F5F5F; 
  font-family: 'Century Gothic', sans-serif; 
  font-size: 17px;
  text-align: left;
  width: 70%; 
  line-height: 1.4; 
  overflow-wrap: break-word; 
  left: 50%;
  transform: translateX(-50%);
}

.splotch-green .description-text {
  bottom: 225px;
  max-width: 260px;
  left: 51%; 
}

.splotch-beige .description-text {
  bottom: 300px;
  max-width: 300px;
  left: 50%; 
}

.splotch-blue .description-text {
  bottom: 300px;
  max-width: 280px;
  left: 45%; 
}

.logout-button {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #ff4d4d;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-family: 'Century Gothic', sans-serif;
  font-weight: bold;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #e63946;
}

</style>
