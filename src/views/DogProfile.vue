<template>
  <div class="profile">
    <div class="profile-title">dog profile</div>
    
    <div class="image-container">
      <div class="image-frame"></div>
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
        <input type="text" v-model="userData.name" class="value editable" />
      </div>

      <div class="profile-item">
        <span class="label">birthday</span>
        <input 
          type="text" 
          v-model="userData.birthday" 
          class="value editable" 
          placeholder="dd.mm.gggg" 
          @blur="validateDateFormat"
        />
      </div>

      <div class="profile-item">
        <span class="label">coat pattern</span>
        <input type="text" v-model="userData.colorPattern" class="value editable" />
      </div>

      <div class="profile-item">
        <span class="label">email</span>
        <div style="display: flex; flex-direction: column; align-items: flex-end;">
          <span class="value">{{ userData.email }}</span>
          <span class="change-password" @click="handleChangePassword">change password</span>
        </div>
      </div>

      <div class="save-actions">
        <span class="save-changes" @click="saveProfile">save changes</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DogProfile",
  data() {
    return {
      userImage: require('@/assets/slike/sitstay.jpg'),
      userData: {
        name: '',
        birthday: '',
        colorPattern: '',
        email: '',
      },
      newProfilePicture: null, 
    };
  },
  methods: {
    formatDate(dateString) {
      if (!dateString) return '';
      const date = new Date(dateString);
      if (isNaN(date)) return '';
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
        this.newProfilePicture = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.userImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    validateDateFormat() {
      const regex = /^\d{2}\.\d{2}\.\d{4}$/;
      if (this.userData.birthday && !regex.test(this.userData.birthday)) {
        alert("Date format must be dd.mm.gggg");
        this.userData.birthday = "";
      }
    },
    handleChangePassword() {
      this.$router.push('/reset-password'); 
    },
    async saveProfile() {
      try {
        const token = localStorage.getItem("token");
        if (!token) return this.$router.push('/login');

        const formData = new FormData();
        formData.append("name", this.userData.name);
        formData.append("birthday", this.userData.birthday);
        formData.append("colorPattern", this.userData.colorPattern);
        if (this.newProfilePicture) {
          formData.append("profilePicture", this.newProfilePicture);
        }

        const res = await fetch("https://barkwisebackend.onrender.com/forgot-password/profile", {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });

        const data = await res.json();

        this.userData = {
          name: data.user.name || '',
          birthday: this.formatDate(data.user.birthday),
          colorPattern: data.user.colorPattern || '',
          email: data.user.email || this.userData.email,
        };
        
        if (data.user.profilePicture) {
          this.userImage = `https://barkwisebackend.onrender.com/forgot-password${data.user.profilePicture}`;
        }
        
        this.newProfilePicture = null;

        alert("Profile updated!");
      } catch (err) {
        alert("OK");
        console.error("Failed to update profile:", err);
      }
    }
  },
  mounted() {
    const token = localStorage.getItem('token');
    if (!token) return this.$router.push('/login');

    fetch('https://barkwisebackend.onrender.com/forgot-password/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then(res => res.json())
      .then(data => {
        this.userData = {
          name: data.name || '',
          birthday: this.formatDate(data.birthday),
          colorPattern: data.colorPattern || '',
          email: data.email || '',
        };
        if (data.profilePicture) {
          this.userImage = `https://barkwisebackend.onrender.com${data.profilePicture}`;
        }
      })
      .catch(err => {
        console.error('Failed to fetch profile:', err);
        this.$router.push('/login');
      });
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
  z-index: 2;
}

.image-frame {
  position: absolute;
  top: -10px;
  left: -10px;
  width: 270px;
  height: 270px;
  background-color: #fffef9;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  z-index: 0;
}

.border-image {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  top: 52.25%;
  z-index: 3;
  cursor: pointer;
  color: #5F5F5F;
  font-family: 'ChunkyRetro', sans-serif;
  font-size: 20px;
  white-space: nowrap;
}

.editable {
  border: none;
  background: transparent;
  color: #5F5F5F;
  font-family: 'Century Gothic', sans-serif;
  font-weight: bold;
  font-size: 15px;
  text-align: right;
  outline: none;
}

.change-password {
  color: #5F5F5F;
  font-family: 'ChunkyRetro', sans-serif;
  font-size: 25px;
  cursor: pointer;
  margin-top: 25px;
}

.save-actions {
  margin-top: 30px;
  text-align: center; 
}

.save-changes {
  color: #5F5F5F;
  font-family: 'ChunkyRetro', sans-serif;
  font-size: 25px;
  cursor: pointer;
  display: inline-block;
  margin-top: 5px;
  transform: rotate(-10deg);
  margin-left: 125px;
}
</style>


