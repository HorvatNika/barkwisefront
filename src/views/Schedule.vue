<template>
  <div class="schedule">
    <div class="schedule-title">schedule</div>

    <div class="schedule-text">
      Plan daily or weekly activities with just a few clicks, ensuring your dog stays focused and motivated.
      Whether you're setting up obedience sessions, agility drills, or rest days, our calendar helps you
      maintain a balanced and effective routine.
    </div>

    <div class="schedule-content">
      <vue-cal
        style="height: 600px"
        :events="events"
        :time="false"
        default-view="month"
        @cell-click="onCellClick"
        @event-click="onEventClick"
      >
        <template #event="{ event }">
          <div class="custom-event-title">{{ event.title }}</div>
        </template>
      </vue-cal>
    </div>

    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="splotch-modal">
        <img src="@/assets/slike/splotch1.png" alt="splotch" class="splotch-modal-bg" />

        <div class="modal-inner" @click.stop>
          <template v-if="modalMode === 'add'">
            <h3>{{ formattedSelectedDate }}</h3>
            <input
              type="text"
              v-model="newEventTitle"
              placeholder="Enter event title..."
              @keyup.enter="focusDescription"
              autofocus
            />
            <textarea
              v-model="newEventDescription"
              placeholder="Enter event description..."
              rows="4"
              @keyup.enter="addEvent"
            ></textarea>
            <div class="modal-actions">
              <button class="circle-button transparent small" @click="addEvent">+</button>
              <button class="circle-button transparent small" @click="closeModal">-</button>
            </div>
          </template>

          <template v-else-if="modalMode === 'view' && modalEvent">
            <h3>{{ formattedSelectedDate }}</h3>
            <input
              type="text"
              v-model="modalEvent.title"
              class="modal-input"
              placeholder="Enter event title..."
            />
            <textarea
              v-model="modalEvent.content"
              class="modal-textarea"
              rows="4"
              placeholder="Enter event description..."
            ></textarea>
            <div class="modal-buttons">
              <button class="modal-action-button" @click="updateEvent(modalEvent)">save</button>
              <button class="modal-action-button" @click="deleteEvent(modalEvent)">delete</button>
              <button class="modal-action-button" @click="closeModal">close</button>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';

export default {
  name: "Schedule",
  components: { VueCal },
  data() {
    return {
      events: [],
      showModal: false,
      newEventTitle: '',
      newEventDescription: '',
      selectedDate: null,
      modalMode: 'add',
      modalEvent: null,
    };
  },
  computed: {
    formattedSelectedDate() {
      if (!this.selectedDate) return '';
      const d = new Date(this.selectedDate);
      return `${d.getDate().toString().padStart(2, '0')}.${(d.getMonth() + 1).toString().padStart(2, '0')}.${d.getFullYear()}`;
    }
  },
  mounted() {
    this.fetchEvents();
  },
  methods: {
    async fetchEvents() {
      try {
        const response = await axios.get('https://barkwisebackend.onrender.com/schedule');
        this.events = response.data.map(event => ({
          id: event._id,
          title: event.title,
          content: event.content,
          start: new Date(event.start),
          end: new Date(event.end)
        }));
      } catch (err) {
        console.error("Failed to fetch events:", err);
      }
    },

    async addEvent() {
      if (!this.newEventTitle.trim()) return;

      const newEvent = {
        title: this.newEventTitle.trim(),
        content: this.newEventDescription.trim(),
        start: this.selectedDate,
        end: this.selectedDate
      };

      try {
        const response = await axios.post('https://barkwisebackend.onrender.com/schedule', newEvent);
        const created = response.data.event;
        this.events.push({
          id: created.id,
          title: created.title,
          content: created.content,
          start: new Date(created.start),
          end: new Date(created.end)
        });
        this.closeModal();
      } catch (err) {
        console.error("Failed to add event:", err);
      }
    },

    async updateEvent(event) {
      try {
        const updatedEvent = {
          title: event.title,
          content: event.content,
          start: event.start,
          end: event.end
        };

        await axios.put(`https://barkwisebackend.onrender.com/schedule/${event.id}`, updatedEvent);
        const index = this.events.findIndex(e => e.id === event.id);
        if (index !== -1) {
          this.events.splice(index, 1, {
            ...updatedEvent,
            id: event.id
          });
        }
        this.closeModal();
      } catch (err) {
        console.error("Failed to update event:", err);
      }
    },

    async deleteEvent(event) {
      try {
        await axios.delete(`https://barkwisebackend.onrender.com/schedule/${event.id}`);
        this.events = this.events.filter(e => e.id !== event.id);
        this.closeModal();
      } catch (err) {
        console.error("Failed to delete event:", err);
      }
    },

    closeModal() {
      this.showModal = false;
      this.newEventTitle = '';
      this.newEventDescription = '';
      this.selectedDate = null;
      this.modalEvent = null;
    },

    onCellClick(date) {
      this.selectedDate = date;
      this.newEventTitle = '';
      this.newEventDescription = '';
      this.modalMode = 'add';
      this.showModal = true;
    },

    onEventClick(event) {
      this.modalEvent = { ...event };
      this.selectedDate = event.start;
      this.modalMode = 'view';
      this.showModal = true;
    },

    focusDescription() {
      this.$nextTick(() => {
        this.$el.querySelector('textarea')?.focus();
      });
    }
  }
};
</script>

<style scoped>
.schedule {
  display: flex;
  flex-direction: column;
  background-color: #edd9b7;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
}

.schedule-title {
  font-family: 'ChunkyRetro', sans-serif;
  font-size: 17rem;
  color: #FFFEF9;
  text-align: left;
  position: fixed;
  top: 1%;
  left: 15%;
  width: 100%;
  z-index: 2;
  opacity: 60%;
}

.schedule-text {
  font-family: 'CenturyGothic', sans-serif;
  font-size: 1rem;
  color: #FFFEF9;
  text-align: left;
  margin-top: 11%;
  position: absolute;
  left: 15%;
  width: 50%;
  z-index: 2;
}

.schedule-content {
  margin: 3% 10% 5% 10%;
  padding-top: 17rem;
  font-family: 'CenturyGothic', sans-serif;
  font-size: 1.5rem;
  color: #333;
  z-index: 2;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.splotch-modal {
  position: relative;
  max-width: 1100px;
  width: 90%;
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
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  width: 80%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  font-family: 'CenturyGothic', sans-serif;
  color: #fffef9;
  text-align: center;
  z-index: 2;
}

.modal-inner input[type="text"],
.modal-inner textarea {
  width: 100%;
  padding: 0.5rem;
  margin-top: 1rem;
  font-size: 1rem;
  box-sizing: border-box;
  font-family: 'CenturyGothic', sans-serif;
  background-color: #fffef9;
  color: #333;
  border: none;
  outline: none;
  border-radius: 0;
}

.modal-inner textarea {
  resize: none;
}

.modal-input {
  width: 100%;
  padding: 0.5rem;
  margin-top: 1rem;
  font-size: 1rem;
  box-sizing: border-box;
  font-family: 'CenturyGothic', sans-serif;
  background-color: #fffef9;
  color: #333;
  border: none;
  outline: none;
  border-radius: 0;
}

.modal-textarea {
  width: 100%;
  padding: 0.5rem;
  margin-top: 1rem;
  font-size: 1rem;
  box-sizing: border-box;
  font-family: 'CenturyGothic', sans-serif;
  background-color: #fffef9;
  color: #333;
  border: none;
  outline: none;
  border-radius: 0;
  resize: none;
}

.modal-inner h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #fffef9;
}

.modal-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.circle-button.transparent.small {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  font-size: 1.5rem;
  color: #edd9b7;
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

.modal-buttons {
  display: flex;
  justify-content: center;
  margin-top: 0.25rem;
  gap: 1rem;
}

.modal-action-button {
  font-family: 'ChunkyRetro', sans-serif;
  font-size: 35px;
  color: #5F5F5F;
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 0.5rem;
  padding: 0.25rem 0.75rem;
  opacity: 0.85;
}

.custom-event-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'CenturyGothic', sans-serif;
  cursor: pointer;
}
</style>
