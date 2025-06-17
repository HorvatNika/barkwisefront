<template>
  <div class="schedule">
    <div class="schedule-title">schedule</div>

    <div class="schedule-content">
      <!-- Ovdje dodaj stvarni sadržaj rasporeda -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Schedule",
};
</script>

<style scoped>
.schedule {
  display: flex;
  flex-direction: column;
  background-color: #edd9b7;
  min-height: 100vh;
  overflow-x: hidden;
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
  margin: 5% 10%;
  font-family: 'CenturyGothic', sans-serif;
  font-size: 1.5rem;
  color: #333;
}
</style>
