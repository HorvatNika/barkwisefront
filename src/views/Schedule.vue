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
      />
    </div>

    <img src="@/assets/slike/bordernar.png" alt="bordernar" class="bordernar-image" />
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
    };
  },
  methods: {
    onCellClick(date) {
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
</style>
