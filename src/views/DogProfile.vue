<template>
  <div class="profile">
    <div class="profile-title">dog profile</div>
    <img src="@/assets/slike/borderpla.png" alt="borderpla" class="border-image" />
    
    <img src="@/assets/slike/dogtag.png" alt="dogtag" class="dogtag-image" />

    <div class="user-data">
      <div class="profile-item">
        <span class="label">Name:</span>
        <span class="value">{{ userData.name }}</span>
      </div>
      <div class="profile-item">
        <span class="label">Gender:</span>
        <span class="value">{{ userData.gender }}</span>
      </div>
      <div class="profile-item">
        <span class="label">Birthday:</span>
        <span class="value">{{ formatDate(userData.birthday) }}</span>
      </div>
      <div class="profile-item">
        <span class="label">Coat Pattern:</span>
        <span class="value">{{ userData.colorPattern }}</span>
      </div>
      <div class="profile-item">
        <span class="label">Email:</span>
        <span class="value">{{ userData.email }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DogProfile",
  data() {
    return {
      userData: {
        name: "Tomi",
        gender: "Male",
        birthday: "2024-06-20",  
        colorPattern: "Black and White",
        email: "tomi@gmail.com", 
      },
    };
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    }
  }
};
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  position: relative;
  background-color: #BAE1F0;
  overflow: hidden;
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

.user-data {
  margin-top: 47vh;
  padding: 20px;
  font-family: 'Montel', sans-serif;
  background-color: transparent; 
  color: #333;
  width: 50%;
  max-width: 500px;
  margin-left: 37%;
  margin-right: auto;
  z-index: 3; 
}

.profile-item {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

.label {
  font-weight: bold;
  color: #5F5F5F;
}

.value {
  color: #5F5F5F;
  font-family: 'CenturyGothic', sans-serif;
  font-weight: bold;
}

.border-image {
  position: fixed;
  right: 70px;
  top: 24%;
  width: auto;
  height: 35%;
  object-fit: contain;
  z-index: 1; 
}

.dogtag-image {
  position: absolute;
  top: -10%; 
  left: 50%;
  transform: translateX(-50%) rotate(-15deg);
  width: 1200px; 
  height: auto;
  z-index: 0; 
  opacity: 0.2;
}
</style>
