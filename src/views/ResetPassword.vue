<template>
  <div class="auth-container">
    <h2 class="title">reset your password</h2>
    <form @submit.prevent="resetPassword">
      <input v-model="password" type="password" placeholder="New Password" required />
      <input v-model="confirmPassword" type="password" placeholder="Confirm Password" required />
      <button type="submit">reset password</button>
    </form>
    <p v-if="message" class="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      confirmPassword: '',
      token: '',
      message: ''
    };
  },
  mounted() {
    this.token = this.$route.query.token;
    if (!this.token) {
      this.message = 'Missing reset token.';
    }
  },
  methods: {
    async resetPassword() {
      try {
        const response = await fetch('http://localhost:3000/reset-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            token: this.token,
            newPassword: this.password,
            confirmPassword: this.confirmPassword
          })
        });

        const data = await response.json();
        this.message = data.message;

        if (response.ok) {
          setTimeout(() => this.$router.push('/login'), 2000);
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
  text-transform: lowercase;
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
