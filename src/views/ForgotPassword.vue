<template>
  <div class="auth-container">
    <h2 class="title">forgot password</h2>
    <form @submit.prevent="submitEmail">
      <input v-model="email" type="email" placeholder="Enter your email" required />
      <button type="submit">send reset link</button>
    </form>
    <p v-if="message" class="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: ''
    };
  },
  methods: {
    async submitEmail() {
      try {
        const response = await fetch('https://barkwisebackend.onrender.com/forgot-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: this.email })
        });

        const data = await response.json();
        this.message = data.message;

        if (data.previewUrl) {
          window.open(data.previewUrl, '_blank');
        }
      } catch (err) {
        this.message = 'Something went wrong.';
      }
    }
  }
};
</script>

<style scoped>
.auth-container {
  max-width: 450px;
  margin: 100px auto;
  padding: 30px;
  background: #fffef0;
  border-radius: 0px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.title {
  font-family: 'ChunkyRetro', sans-serif;
  font-size: 3rem;
  color: #5f5f5f;
  margin-bottom: 25px;
}

input {
  width: 100%;
  padding: 12px 16px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 0px;
  font-family: 'Century Gothic', sans-serif;
  font-size: 1rem;
  text-align: left;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 12px;
  margin-top: 15px;
  background-color: #BAE1F0;
  color: #5f5f5f;
  font-family: 'ChunkyRetro', sans-serif;
  font-size: 2rem;
  border: none;
  border-radius: 0px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background-color: #A6D4E2;
}

.message {
  margin-top: 20px;
  font-family: 'Century Gothic', sans-serif;
  color: green;
  font-size: 1rem;
}
</style>
