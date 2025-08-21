<template>
  <div class="journal">
    <div class="journal-title">journal</div>
    <div class="journal-text">
      Record all the important moments and memories from your dog's life. Create a personalized journal to document special events and milestones that you and your furry friend will cherish forever.
    </div>
    <div class="journal-entries">
<!-- MODIFIED (use stable id instead of index for the key) -->
<div v-for="(entry, index) in journalEntries" :key="entry.id" class="journal-entry">
        <h3 
          class="card-title" 
          contenteditable="true"
          @blur="updateTitle($event, index)"
          @keydown.enter.prevent="$event.target.blur()"
        >
          {{ entry.title }}
        </h3>

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
              class="description-input no-outline" 
              v-model="entry.description"
              @blur="updateDescription(index)"
              :placeholder="entry.description ? '' : 'Describe the moment...'"
            ></textarea>
          </div>
        </div>

        <button class="delete-entry-button" @click="deleteEntry(index)">delete</button>
      </div>
    </div>

    <button class="add-entry-button" @click="showModal = true">+</button>

    <div v-if="showModal" class="modal-overlay">
      <div class="splotch-modal">
        <img src="@/assets/slike/splotch2.png" alt="splotch" class="splotch-modal-bg" />
        <div class="modal-inner">
          <input 
            v-model="newEntryTitle" 
            placeholder="enter title..." 
            class="modal-input no-outline left-align no-radius" 
          />
          <div class="modal-actions">
            <button class="circle-button transparent small" @click="createJournalEntry">+</button>
            <button class="circle-button transparent small" @click="showModal = false">-</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

// NEW (right after `import axios from 'axios';`)
const api = axios.create({ baseURL: 'https://barkwisebackend.onrender.com' });

// attach JWT automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // wherever you store it
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default {
  name: "Journal",
  data() {
    return {
      journalEntries: [],
      showModal: false,
      newEntryTitle: "",
    };
  },
  mounted() {
    this.fetchJournalEntries();
  },
  methods: {
   // MODIFIED methods (swap axios -> api and keep your fixed delete URL)
async fetchJournalEntries() {
  try {
    const response = await api.get('/journal');
    this.journalEntries = response.data.map(entry => ({
      id: entry._id,
      title: entry.title,
      description: entry.description || "",
      image: entry.image || "",
      timestamp: entry.timestamp
    }));
  } catch (err) {
    console.error("Failed to fetch journal entries:", err);
  }
},

async createJournalEntry() {
  if (!this.newEntryTitle.trim()) return;

  try {
    const response = await api.post('/journal', {
      title: this.newEntryTitle.trim(),
      description: "",
      image: ""
    });

    const newEntry = {
      id: response.data.entry.id,
      title: response.data.entry.title,
      description: response.data.entry.description,
      image: response.data.entry.image,
      timestamp: response.data.entry.timestamp
    };

    this.journalEntries.push(newEntry);
    this.newEntryTitle = "";
    this.showModal = false;
  } catch (err) {
    console.error("Failed to create journal entry:", err);
  }
},

async deleteEntry(index) {
  try {
    const entry = this.journalEntries[index];
    await api.delete(`/journal/${entry.id}`);
    this.journalEntries.splice(index, 1);
  } catch (err) {
    console.error("Failed to delete journal entry:", err);
  }
},

async saveEntryToBackend(index) {
  try {
    const entry = this.journalEntries[index];
    await api.put(`/journal/${entry.id}`, {
      title: entry.title,
      description: entry.description,
      image: entry.image
    });
  } catch (err) {
    console.error("Failed to update journal entry:", err);
  }
},


    async handleImageChange(event, index) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = async (e) => {
          this.journalEntries[index].image = e.target.result;
          await this.saveEntryToBackend(index);
        };
        reader.readAsDataURL(file);
      }
    },

    async updateTitle(event, index) {
      this.journalEntries[index].title = event.target.innerText.trim();
      await this.saveEntryToBackend(index);
    },

    async updateDescription(index) {
      await this.saveEntryToBackend(index);
    },

  },
  watch: {
    showModal(val) {
      if (!val) {
        this.newEntryTitle = "";
      }
    }
  }
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
  z-index: 1;
}

.card-title {
  font-family: 'ChunkyRetro', sans-serif;
  font-size: 4rem;
  color: #5F5F5F;
  margin: 1.5rem 0 -0.5rem 0;
  text-align: center;
  opacity: 60%;
  cursor: text;
  outline: none;
  border: none;
  background: transparent;
  caret-color: #5F5F5F;
}

.journal-card {
  display: flex;
  background-color: #FFFEF9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 860px;
  height: 300px;
  padding: 1rem;
  gap: 1rem;
  margin: 0 auto;
  z-index: 0;
  border-radius: 0;
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
  color: #5F5F5F;
  outline: none;
  border-radius: 0;
}

.add-entry-button {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 2.5rem;
  color: white;
  background-color: #5F5F5F;
  border: none;
  cursor: pointer;
  z-index: 999;
  opacity: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  font-family: 'ChunkyRetro', sans-serif;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.splotch-modal {
  position: relative;
  width: 100%;
  max-width: 850px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.splotch-modal-bg {
  width: 100%;
  height: auto;
  display: block;
}

.modal-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  padding: 0 2rem;
  text-align: center;
}

.modal-input {
  width: 100%;
  max-width: 350px;
  padding: 0.75rem 1rem;
  font-size: 2.5rem;
  font-family: 'ChunkyRetro', sans-serif;
  border-radius: 0;
  border: none;
  outline: none;
  text-align: center;
  color: #FFFEF9;
  background-color: transparent;
  z-index: 2;
  margin-bottom: 1.5rem;
  margin-left: -100px;
}

.modal-input::placeholder {
  color: #FFFEF9;
  opacity: 1;
  font-size: 2.5rem;
  font-family: 'ChunkyRetro', sans-serif;
}

.modal-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-left: 27rem; 
}

.circle-button.transparent {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  font-size: 1.5rem;
  color: #BAE1F0;
  font-family: 'ChunkyRetro', sans-serif;
  background-color: #fffef9;
  border: none;
  cursor: pointer;
  opacity: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.delete-entry-button {
  font-family: 'ChunkyRetro', sans-serif;
  font-size: 25px;
  color: #5F5F5F;
  background: none;
  border: none;
  cursor: pointer;
  opacity: 80%;
  align-self: flex-end;
  margin-top: 0.25rem;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  background-color: #BAE1F0;
  min-height: 100vh;
}
</style>
