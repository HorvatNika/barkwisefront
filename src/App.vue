<template>
  <nav>
    <div class="logo-container">
      <h1 class="logo-text">
        <span class="barkwise">Barkwise</span><br />
        <span class="collie">Collie</span>
      </h1>
      <img src="@/assets/slike/logo.png" alt="Logo" class="logo" />
    </div>
    <div class="nav-links">
      <router-link to="/menu" class="nav-button menu-button">Menu</router-link>
      <button class="nav-button logout-button" @click="logout">Logout</button>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  methods: {
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.$router.push('/login');
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5F5F5F;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-family: 'CenturyGothic', sans-serif;
  background-color: transparent;
  position: fixed;
  width: 100%;
  z-index: 1000;
  left: 0;
  top: 0;
  box-sizing: border-box;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.logo-text {
  font-family: 'chunkyretro';
  font-size: 40px;
  margin: 0;
  text-align: right;
  line-height: 0.6;

  .barkwise {
    color: #D7BDF2;
    margin: 0;
  }

  .collie {
    color: #F0C3CE;
    margin-top: -10px;
  }
}

.logo {
  width: 40px;
  height: 40px;
  margin-left: 10px;
  margin-top: -20px;
}

.nav-links {
  display: flex;
  gap: 10px;
  align-items: center;
}

.nav-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 45px;
  font-family: 'Century Gothic', sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: white;
}

.menu-button {
  background-color: #D7BDF2;
}

.menu-button:hover {
  background-color: #bda6e0;
}

.logout-button {
  background-color: #F0C3CE;
}

.logout-button:hover {
  background-color: #d6aab8;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: center;
  }

  .nav-links {
    justify-content: center;
    width: 100%;
    margin-top: 20px;
  }
}

@media (max-width: 480px) {
  .logo-text {
    font-size: 30px;
  }

  .logo {
    width: 30px;
    height: 30px;
  }

  .nav-button {
    width: 100px;
    height: 40px;
    font-size: 14px;
  }
}
</style>
