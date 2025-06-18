<template>
  <div class="schedule">
    <div class="schedule-title">schedule</div>

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

    <img src="@/assets/slike/bordernar.png" alt="bordernar" class="bordernar-image" />

    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div :class="['modal-content', modalMode === 'add' ? 'add-mode' : '']">
        <h3>{{ modalMode === 'add' ? formattedSelectedDate : modalEvent.title }}</h3>

        <template v-if="modalMode === 'add'">
          <input
            type="text"
            v-model="newEventTitle"
            placeholder="Unesite naziv eventa"
            @keyup.enter="focusDescription"
            autofocus
          />
          <textarea
            v-model="newEventDescription"
            placeholder="Unesite opis eventa (opciono)"
            rows="4"
            @keyup.enter="addEvent"
          ></textarea>
          <div class="modal-buttons">
            <button @click="addEvent">Dodaj</button>
            <button @click="closeModal">Otkaži</button>
          </div>
        </template>

        <template v-else-if="modalMode === 'view'">
          <p v-if="modalEvent.content">{{ modalEvent.content }}</p>
          <p v-else><em>Nema opisa za ovaj događaj.</em></p>
          <div class="modal-buttons">
            <button @click="closeModal">Zatvori</button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

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
      const day = d.getDate().toString().padStart(2, '0');
      const month = (d.getMonth() + 1).toString().padStart(2, '0');
      const year = d.getFullYear();
      return `${day}.${month}.${year}`;
    }
  },
  methods: {
    onCellClick(date) {
      this.selectedDate = date;
      this.newEventTitle = '';
      this.newEventDescription = '';
      this.modalMode = 'add';
      this.showModal = true;
    },
    addEvent() {
      if (this.newEventTitle.trim() === '') return;
      this.events.push({
        start: this.selectedDate,
        end: this.selectedDate,
        title: this.newEventTitle.trim(),
        content: this.newEventDescription.trim()
      });
      this.closeModal();
    },
    closeModal() {
      this.showModal = false;
      this.newEventTitle = '';
      this.newEventDescription = '';
      this.selectedDate = null;
      this.modalEvent = null;
    },
    focusDescription() {
      this.$nextTick(() => {
        this.$el.querySelector('textarea').focus();
      });
    },
    onEventClick(event) {
      this.modalEvent = event;
      this.modalMode = 'view';
      this.showModal = true;
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
  font-size: 15rem;
  color: #fffef9;
  text-align: left;
  width: 100%;
  z-index: 2;
  opacity: 60%;
  margin-top: 5%;
  margin-left: 15%;
}

.schedule-content {
  margin: 3% 10% 5% 10%;
  font-family: 'CenturyGothic', sans-serif;
  font-size: 1.5rem;
  color: #333;
  z-index: 2;
}

.bordernar-image {
  position: fixed;
  right: 70px;
  top: 24%;
  width: auto;
  height: 35%;
  object-fit: contain;
  z-index: 10;
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

.modal-content {
  background-color: rgba(237, 217, 183, 0.95);
  padding: 2rem;
  width: 320px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  text-align: center;
  font-family: 'CenturyGothic', sans-serif;
}

.modal-content.add-mode h3 {
  color: #fffef9;
}

.modal-content h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.modal-content input[type="text"],
.modal-content textarea {
  width: 100%;
  padding: 0.5rem;
  margin-top: 1rem;
  font-size: 1rem;
  box-sizing: border-box;
  font-family: 'CenturyGothic', sans-serif;
  background-color: #fffef9;
  border: none;
  outline: none;
}

.modal-content textarea {
  resize: none;
}

.modal-buttons {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.modal-buttons button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  font-family: 'CenturyGothic', sans-serif;
  background-color: #fffef9;
  border: none;
}
  
.custom-event-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'CenturyGothic', sans-serif;
  cursor: pointer;
}
</style>
