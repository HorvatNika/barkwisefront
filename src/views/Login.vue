<template>
  <div class="login">
    <div class="form-container">
      <div class="title-container">
        <h2>Login</h2>
      </div>
      <form @submit.prevent="submitForm">
        <div class="input-container">
          <label for="email" class="input-label">Email</label>
          <input 
            type="email" 
            id="email"
            v-model="email" 
            class="input-field" 
            required />
        </div>
        <div class="input-container">
          <label for="password" class="input-label">Password</label>
          <input 
            type="password" 
            id="password"
            v-model="password" 
            class="input-field" 
            required />
<router-link to="/forgot-password" class="forgot-password">forgot password?</router-link>

        </div>
        <button type="submit" class="submit-btn">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('https://barkwisebackend.onrender.com/login', {
          email: this.email,
          password: this.password
        });

        const { token } = response.data.user;
        localStorage.setItem('token', token);

        localStorage.setItem('user', JSON.stringify(response.data.user));

        this.$router.push('/menu'); 
      } catch (error) {
        if (error.response && error.response.status === 401) {
          alert('Invalid email or password.');
        } else {
          alert('Login failed. Please try again.');
        }
        console.error('Login error:', error);
      }
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: 'Montel';
  src: url('@/assets/fonts/montel.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'CenturyGothic';
  src: url('@/assets/fonts/centurygothic.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.login {
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
  padding: 20px;
  border-radius: 130px;
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

.title-container {
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Montel', sans-serif;
  color: #EDD9B7;
  font-size: 50px;
  font-weight: bold;
  margin: 0;
}

h2 {
  margin: 0;
  color: inherit;
}

.input-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.input-label {
  color: #FFFEF9;
  font-size: 18px; 
  margin-bottom: 5px;
  font-family: 'Montel', sans-serif;
  text-align: left; 
  width: 90%; 
  margin-right: 15%;
}

.input-field {
  width: 110%; 
  padding: 17px;
  font-size: 16px;
  border-radius: 60px;
  border: 1px solid #FFFEF9; 
  background-color: #FFFEF9;
  font-family: 'CenturyGothic', sans-serif;
  color: #EDD9B7;
  text-align: left; 
}

.input-field::placeholder {
  color: #EDD9B7;
}

.input-field:focus {
  outline: none;
  border-color: #EDD9B7;
}

.submit-btn {
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

.submit-btn:hover {
  background-color: #EDD9B7; 
  color: #FFFEF9;
}

.submit-btn:hover + .title-container h2 {
  color: #EDD9B7; 
}

.forgot-password {
  font-family: 'CenturyGothic', sans-serif;
  font-size: 15px;
  color: #FFFEF9;
  text-align: right;
  margin-top: 5px;
  margin-left: 30px;
  width: 90%;
  cursor: pointer;
}

.forgot-password:hover {
  color: #FFFEF9;
  font-weight: bold;
}
</style>