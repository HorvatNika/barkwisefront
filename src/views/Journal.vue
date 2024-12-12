<template>
  <div class="journal">
    <div class="journal-title">journal</div>
    <div class="journal-text">
      Record all the important moments and memories from your dog's life. Create a personalized journal to document special events and milestones that you and your furry friend will cherish forever.
    </div>
    <div class="journal-entries">
      <div v-for="(entry, index) in journalEntries" :key="index" class="journal-entry">
        <h3 class="card-title">{{ entry.title }}</h3> 
        <div class="journal-card">
          <div class="card-image">
            <input 
              type="file" 
              accept="image/*" 
              class="image-input" 
              @change="handleImageChange($event, index)" 
            />
            <img v-if="entry.image" :src="entry.image" alt="Uploaded Image" />
          </div>
          <div class="card-text">
            <textarea 
              class="description-input" 
              placeholder="Describe the moment...">
            </textarea>
          </div>
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
        { title: "first day at home", image: null },
        { title: "first walk", image: null },
        { title: "first trick learned", image: null },
        { title: "favorite toy", image: null },
        { title: "first birthday", image: null },
        { title: "favorite sleeping spot", image: null },
        { title: "funny habits and behaviors", image: null },
        { title: "first visit to the vet", image: null },
        { title: "favorite treat", image: null },
      ],
    };
  },
  methods: {
    handleImageChange(event, index) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.journalEntries[index].image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
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
  position: fixed;
  top: 0.5%;
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
  margin-top: 9%;
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
  align-items: center; 
}

.journal-entry {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
}

.card-title {
  font-family: 'ChunkyRetro', sans-serif;
  font-size: 4rem;
  color: #5F5F5F;
  margin: 1.5rem 0 -0.5rem 0; 
  text-align: center;
  opacity: 60%;
}

.journal-card {
  display: flex;
  background-color: #FFFEF9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 820px; 
  height: 300px; 
  padding: 1rem;
  gap: 1rem;
  margin: 0 auto; 
}

.card-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F0F0F0;
  overflow: hidden;
  width: 200px;
  height: 100%;
  position: relative;
}

.card-image img {
  object-fit: cover;
  width: 100%;
  height: 100%;
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
  height: 100%;
}

.description-input {
  font-family: 'CenturyGothic', sans-serif;
  font-size: 1rem;
  border: 1px solid #eeeeee;
  padding: 0.5rem; 
  resize: none;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  overflow: auto;
  text-align: left; 
}

body {
  margin: 0;
  padding: 0;
  background-color: #BAE1F0;
  min-height: 100vh;
}
</style>
