<template>
    <div class="journal">
      <div class="journal-title">journal</div>
      <div class="journal-text">
        Record all the important moments and memories from your dog's life. Create a personalized journal to document special events and milestones that you and your furry friend will cherish forever.
      </div>
      <div class="journal-entries">
        <div v-for="(entry, index) in journalEntries" :key="index" class="journal-card">
          <div class="card-image">
            <input type="file" accept="image/*" class="image-input" />
          </div>
          <div class="card-text">
            <h3 class="card-title">{{ entry.title }}</h3>
            <textarea class="description-input" placeholder="Describe the moment..."></textarea>
          </div>
        </div>
      </div>
    </div>
  </template>  
  
  <script>
  export default {
    name: "Journal",
    data() {
      return {
        journalEntries: [
          { title: "First Day at Home" },
          { title: "First Walk" },
          { title: "First Trick Learned" },
          { title: "Favorite Toy" },
          { title: "First Birthday" },
          { title: "Favorite Sleeping Spot" },
          { title: "Funny Habits and Behaviors" },
          { title: "First Visit to the Vet" },
          { title: "Favorite Treat" },
        ],
      };
    },
  };
  </script>  
  
  <style scoped>
    .journal {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: #BAE1F0;
  padding: 2rem;
  box-sizing: border-box;
  position: relative; 
}

.journal-title {
  font-family: 'ChunkyRetro', sans-serif;
  font-size: 17rem;
  color: #FFFEF9;
  text-align: left;
  position: absolute;
  bottom: 90.5%;
  left: 15%;
  width: 100%;
  z-index: 2;
  opacity: 60%;
}

.journal-text {
  font-family: 'CenturyGothic', sans-serif;
  font-size: 1rem;
  color: #FFFEF9;
  text-align: left;
  margin-top: 9.5%;
  position: absolute;
  left: 15%;
  width: 50%;
  z-index: 2;
}

.journal-entries {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  background-color: #BAE1F0;
  margin-top: 20rem; 
  padding-bottom: 2rem;
}

.journal-card {
  display: flex;
  background-color: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 1rem;
  gap: 1rem;
}

.card-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F0F0F0;
  border-radius: 8px;
  overflow: hidden;
  width: 200px; 
  height: 250px; 
  position: relative;
}

.image-input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.card-text {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card-title {
  font-family: 'CenturyGothic', sans-serif;
  font-size: 1.5rem;
  color: #333333;
  margin: 0;
}

.description-input {
  font-family: 'CenturyGothic', sans-serif;
  font-size: 1rem;
  color: #333333;
  border: 1px solid #CCCCCC;
  border-radius: 8px;
  padding: 0.5rem;
  resize: none;
  min-height: 250px; 
}

body {
  margin: 0;
  padding: 0;
  background-color: #BAE1F0;
  min-height: 100vh;
}
  </style>
  