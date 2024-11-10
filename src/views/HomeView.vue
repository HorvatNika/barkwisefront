<template>
  <div id="barkwise">
    <div class="header">
      <h1>
        <span class="barkwise">Barkwise</span><br />
        <span class="collie">Collie</span>
      </h1>
      <img src="@/assets/slike/logo.png" alt="Logo" class="logo" />
    </div>
    <div v-if="showLogin" class="login-register-text">
      <p class="login-text" @click="handleLoginClick">login</p>
      <p class="register-text" @click="handleRegisterClick">register</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showLogin: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.showLogin = true;
    }, 2500);
  },
  methods: {
    handleLoginClick() {
      console.log('Login clicked');
    },
    handleRegisterClick() {
      console.log('Register clicked');
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: 'chunkyretro';
  src: url('@/assets/fonts/chunkyretro.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

#barkwise {
  background-color: #FBFBC0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  font-family: Arial, sans-serif;
  padding-top: 20vh;
  background-image: 
    url('@/assets/slike/pocetna2.png'),
    url('@/assets/slike/pocetna1.png'), 
    url('@/assets/slike/pocetna3.png');
  background-repeat: no-repeat;
  background-position: bottom left, bottom left 15%, bottom right;  
  background-size: 500px, 800px, 600px; 
  animation: fadeInBlur 2s ease-out forwards;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: right;
  width: 100%;
}

h1 {
  font-family: 'chunkyretro';
  margin: 0;
  line-height: 0.5;
  font-size: 280px;
  color: #D7BDF2;
  text-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
               inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
  opacity: 0;
  animation: fadeInText 2s ease-out forwards;
  text-align: right;
}

.logo {
  width: 240px;
  height: auto;
  margin-left: 20px;
  margin-top: -150px;
  opacity: 0;
  animation: fadeInLogo 2s ease-out forwards;
}

.barkwise {
  color: #D7BDF2;
}

.collie {
  color: #F0C3CE;
  position: relative;   
  left: 30px; 
}

.login-register-text {
  display: flex;
  justify-content: center;
  opacity: 0;
  animation: fadeInLoginRegister 2s ease-out forwards;
}

.login-text,
.register-text {
  font-size: 100px;
  color: #5F5F5F;
  margin: 0 15px;
  cursor: pointer;
  opacity: 0;
  animation: fadeInText 2s ease-out forwards;
  font-family: 'chunkyretro';
  margin: 0 40px;
}

.login-text:hover,
.register-text:hover {
  color: #838383;
}

@keyframes fadeInBlur {
  0% {
    filter: blur(10px);
  }
  100% {
    filter: blur(0);
  }
}

@keyframes fadeInText {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLogo {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeInLoginRegister {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
