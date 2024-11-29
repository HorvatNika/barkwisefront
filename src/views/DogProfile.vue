<template>
  <div class="profile">
    <div class="profile-title">dog profile</div>
    
    <div class="image-container">
      <img :src="userImage" alt="user dog" class="border-image" />
    </div>
    
    <div class="image-actions">
      <span @click="triggerFileInput">change image</span>
    </div>

    <input type="file" ref="fileInput" @change="onImageChange" accept="image/*" style="display:none" />

    <img src="@/assets/slike/dogtag.png" alt="dogtag" class="dogtag-image" />

    <div class="user-data">
      <div class="profile-item">
        <span class="label">name</span>
        <span class="value">{{ userData.name }}</span>
      </div>
      <div class="profile-item">
        <span class="label">gender</span>
        <span class="value">{{ userData.gender }}</span>
      </div>
      <div class="profile-item">
        <span class="label">birthday</span>
        <span class="value">{{ formatDate(userData.birthday) }}</span>
      </div>
      <div class="profile-item">
        <span class="label">coat pattern</span>
        <span class="value">{{ userData.colorPattern }}</span>
      </div>
      <div class="profile-item">
        <span class="label">email</span>
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
      userImage: require('@/assets/slike/tomi.jpg'),
      userData: {
        name: "Tomi",
        gender: "Male",
        birthday: "2024-06-20",
        colorPattern: "Three Color",
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
    },
    triggerFileInput() {
      this.$refs.fileInput.click(); 
    },
    onImageChange(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.userImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
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

.image-container {
  position: fixed;
  right: 190px;
  top: 24%;
  width: 250px; 
  height: 250px; 
  overflow: hidden; 
  z-index: 1;
}

.border-image {
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
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

.user-data {
  margin-top: 44vh;
  padding: 20px;
  background-color: transparent; 
  width: 50%;
  max-width: 370px;
  margin-left: 40%;
  margin-right: auto;
  z-index: 3; 
}

.profile-item {
  margin-bottom: 2px; 
  display: flex;
  justify-content: space-between;
  transform: rotate(-10deg);
}

.label {
  font-weight: bold;
  color: #5F5F5F;
  font-family: 'ChunkyRetro', sans-serif;
  font-size: 40px;
}

.value {
  color: #5F5F5F;
  font-family: 'Century Gothic', sans-serif;
  font-weight: bold;
  font-size: 15px;
}

.image-actions {
  position: fixed; 
  right: 190px; 
  top: 51.5%; 
  z-index: 3;
  cursor: pointer;
  color: #5F5F5F;
  font-family: 'ChunkyRetro', sans-serif;
  font-size: 20px;
  white-space: nowrap; 
}
</style>

