<template>
  <div class="register">
    <div class="form-container">
      <div v-if="showFirstForm" class="input-container">
        <div class="profile-picture-container" @click="triggerFileInput">
          <input
            type="file"
            id="profilePicture"
            ref="fileInput"
            @change="handleProfilePictureUpload"
            accept="image/*"
            style="display: none;"
          />
          <div v-if="profilePicture" class="profile-picture-preview">
            <img :src="profilePicture" alt="Profile Picture" />
          </div>
          <div v-else class="profile-picture-placeholder">
            <span>+</span>
          </div>
        </div>

        <div class="input-item">
          <label for="name" class="input-label">Name</label>
          <div class="input-line">
            <input
              type="text"
              id="name"
              v-model="name"
              class="input-text"
              placeholder="Enter your name"
            />
          </div>
        </div>

        <div class="input-item">
          <label for="gender" class="input-label">Gender</label>
          <div class="input-line">
            <select id="gender" v-model="gender" class="input-select">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <div class="input-item">
          <label for="birthday" class="input-label">Birthday</label>
          <div class="input-line">
            <input
              type="date"
              id="birthday"
              v-model="birthday"
              class="input-text"
            />
          </div>
        </div>

        <div class="input-item">
          <label for="colorPattern" class="input-label">Coat Pattern</label>
          <div class="input-line">
            <input
              type="text"
              id="colorPattern"
              v-model="colorPattern"
              class="input-text"
              placeholder="Enter color pattern"
            />
          </div>
        </div>
      </div>

      <div v-else class="input-container">
        <div class="input-item">
          <label for="email" class="input-label">Email</label>
          <div class="input-line">
            <input
              type="email"
              id="email"
              v-model="email"
              class="input-text"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div class="input-item">
          <label for="password" class="input-label">Password</label>
          <div class="input-line">
            <input
              type="password"
              id="password"
              v-model="password"
              class="input-text"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <div class="input-item">
          <label for="confirmPassword" class="input-label">Confirm Password</label>
          <div class="input-line">
            <input
              type="password"
              id="confirmPassword"
              v-model="confirmPassword"
              class="input-text"
              placeholder="Confirm your password"
            />
          </div>
        </div>

        <div class="button-container">
          <button type="submit" class="register-btn" @click.prevent="registerUser">Register</button>
        </div>
      </div>

      <div class="toggle-buttons">
        <div 
          class="circle" 
          :class="{ active: showFirstForm }" 
          @click="showFirstForm = true"
        ></div>
        <div 
          class="circle" 
          :class="{ active: !showFirstForm }" 
          @click="showFirstForm = false"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      name: '',
      gender: '',
      birthday: '',
      colorPattern: '',
      email: '',
      password: '',
      confirmPassword: '',
      showFirstForm: true,
      profilePicture: null,
      profilePictureFile: null,
    };
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleProfilePictureUpload(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith('image/')) {
        this.profilePictureFile = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.profilePicture = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please upload a valid image.');
      }
    },
    async registerUser() {
  try {
    const formData = new FormData();
    if (this.profilePictureFile) {
      formData.append('profilePicture', this.profilePictureFile);
      console.log("📦 Profile picture file:", this.profilePictureFile?.name);

      
    }
    formData.append('name', this.name);
    formData.append('gender', this.gender);
    formData.append('birthday', this.birthday);
    formData.append('colorPattern', this.colorPattern);
    formData.append('email', this.email);
    formData.append('password', this.password);
    formData.append('confirmPassword', this.confirmPassword);

    const response = await axios.post('http://localhost:3000/register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.status === 201) {
      this.$router.push('/login'); 
    }
  } catch (error) {
    if (error.response && error.response.status === 409) {
      alert('Email is already registered.');
    } else {
      alert('Registration failed. Please try again.');
    }
    console.error('Registration failed:', error);
  }
}


  },
};
</script>



<style scoped>
.register {
  background-color: #FBFBC0;
  min-height: 100vh;
  background-image: 
    url('@/assets/slike/pocetna2.png'), 
    url('@/assets/slike/pocetna1.png'), 
    url('@/assets/slike/pocetna3.png');
  background-repeat: no-repeat;
  background-position: bottom left, bottom left 15%, bottom right;
  background-size: 500px, 800px, 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Montel', sans-serif;
}

.form-container {
  background-color: #EDD9B7;
  padding: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

h2 {
  font-family: 'Montel', sans-serif;
  color: #EDD9B7;
  font-size: 36px;
  font-weight: bold;
  margin-top: -10px;
}

.input-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.input-item {
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
}

.input-label {
  color: #FFFEF9;
  font-size: 18px;
  margin-right: 15px;
  font-family: 'Montel', sans-serif;
  text-align: left;
  width: 40%;
}

.input-line {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
}

.input-text, .input-select {
  font-family: 'Century Gothic', sans-serif;
  color: #FFFEF9;
  font-size: 16px;
  text-align: left;
  width: 100%;
  background-color: transparent;
  border: none;
}

.input-select option {
  color: #EDD9B7;
  background-color: transparent;
}

input::placeholder, .input-select::placeholder {
  color: #FFFEF9;
}

input:focus, .input-select:focus {
  outline: none;
  border-bottom: 0.5px solid #FFFEF9;
}

.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #FFFEF9;
  border: 2px solid #FFFEF9;
  cursor: pointer;
}

.circle.active {
  background-color: #EDD9B7;
}

.toggle-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
}

.profile-picture-container {
  width: 100%;
  height: 290px; 
  background-color: #FFFEF9;
  border: 2px dashed #EDD9B7;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden; 
}

.profile-picture-preview img {
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
}

.profile-picture-placeholder {
  font-size: 30px;
  color: #EDD9B7;
}

.button-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.register-btn {
  width: 50%;
  padding: 17px;
  background-color: #FFFEF9;
  color: #EDD9B7;
  border: none;
  border-radius: 50px;
  font-size: 20px;
  cursor: pointer;
  font-family: 'Montel', sans-serif;
  margin-top: 5px;
  margin-bottom: 10px;
  transition: all 0.3s ease;
}

.register-btn:hover {
  background-color: #EDD9B7;
  color: #FFFEF9;
}
</style>
