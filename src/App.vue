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
      <router-link to="/">HomePage</router-link> 
      <router-link to="/login">Login</router-link> 
      <router-link to="/register">Register</router-link> 
      <router-link to="/menu">Menu</router-link> 
      <router-link to="/home">Home</router-link> 
      <router-link to="/training">Training</router-link> 
      <router-link to="/profile">Profile</router-link> 
      <router-link to="/collietraits">CollieTraits</router-link> 
    </div>
  </nav>
  <router-view/>
</template>

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
  box-shadow: none;
  position: fixed;
  width: 100%;
  z-index: 1000;
  left: 0;  
}

.nav-container {
  width: 100%; 
  max-width: 1200px; 
  margin: 0 auto; 
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
  align-items: center;
  justify-content: flex-start; 
}

.nav-links a {
  color: #FFFEF9;
  margin: 0 10px;
  text-decoration: none;

  &.router-link-exact-active {
    color: #FFFEF9;
    font-weight: bold;
  }
}
</style>
