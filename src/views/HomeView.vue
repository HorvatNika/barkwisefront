<template>
  <div id="barkwise">
    <h1>
      <span class="barkwise">Barkwise</span><br />
      <span class="collie">Collie</span>
    </h1>
    <img src="@/assets/slike/logo.png" alt="Logo" class="logo" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
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
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  font-family: Arial, sans-serif;
  padding-top: 20vh;

  background-image: 
                    url('@/assets/slike/pocetna2.png'),
                    url('@/assets/slike/pocetna1.png'), 
                    url('@/assets/slike/pocetna3.png');
  background-repeat: no-repeat;
  background-position: bottom left, bottom left 15%, bottom right;  
  background-size: 500px, 800px, 600px; 
}

h1 {
  font-family: 'chunkyretro';
  margin: 0;
  line-height: 0.5;
  text-align: right;
  font-size: 280px;
  color: #D7BDF2;
  text-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
               inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
}

.logo {
  width: 235px;
  height: auto;
  margin-top: -40px;
  margin-left: 15px;
}

.barkwise {
  color: #D7BDF2;
}

.collie {
  color: #F0C3CE;
}

p {
  color: #555;
}
</style>
