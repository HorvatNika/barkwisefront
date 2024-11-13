<template>
    <div class="register">
      <div class="title-container">
        <h2>Register</h2>
      </div>
    
      <div class="form-container">
        <div class="input-container">
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
            <label for="colorPattern" class="input-label">Color Pattern</label>
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
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Register',
    data() {
      return {
        name: '',
        gender: '',
        birthday: '',
        colorPattern: ''
      };
    }
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
    border-radius: 0px; 
  }
  
  .title-container {
    position: absolute;
    top: 330px; 
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Montel', sans-serif;
    color: #EDD9B7;
    font-size: 50px; 
    font-weight: bold;
    margin: 0;
    z-index: 10; 
  }
  
  h2 {
    margin: 0;
    color: inherit;
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
  }
  
  .input-label {
    color: #FFFEF9;
    font-size: 18px;
    margin-right: 10px; 
    font-family: 'Montel', sans-serif;
    text-align: left;
    width: 40%; 
  }
  
  .input-line {
    width: 60%; 
    display: flex;
    justify-content: flex-end;
    border-bottom: 2px solid #FFFEF9; 
  }
  
  .input-text, .input-select {
    font-family: 'CenturyGothic', sans-serif;
    color: #FFFEF9;
    font-size: 16px;
    padding: 10px;
    text-align: right; 
    width: 100%; 
    background-color: transparent; 
    border: none;
  }
  
  input::placeholder, .input-select::placeholder {
    color: #FFFEF9;
  }
  
  input[type="text"]:focus, input[type="date"]:focus, .input-select:focus {
    outline: none;
    border-color: #FFFEF9; 
  }
  
  .select, .input-select {
    border-radius: 0px; 
  }
  
  select option {
    color: #EDD9B7;
  }
  
  input[type="date"]::-webkit-calendar-picker-indicator {
    display: none; 
  }
  </style>
  