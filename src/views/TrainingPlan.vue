<template>
  <div class="training-plan">
    <div class="training-title">training plan</div>

    <div class="menu-container">
      <div class="menu">
        <div class="dropdown">
          <button class="dropbtn">
            {{ selectedDifficulty ? selectedDifficulty : "by difficulty" }}
          </button>
          <div class="dropdown-content">
            <div class="menu-item" @click="selectDifficulty('beginner')">beginner</div>
            <div class="menu-item" @click="selectDifficulty('intermediate')">intermediate</div>
            <div class="menu-item" @click="selectDifficulty('advanced')">advanced</div>
          </div>
        </div>

        <div class="dropdown">
          <button class="dropbtn">
            {{ selectedType ? selectedType : "by type" }}
          </button>
          <div class="dropdown-content">
            <div class="menu-item" @click="selectType('commands')">commands</div>
            <div class="menu-item" @click="selectType('behavioral training')">behavioral training</div>
            <div class="menu-item" @click="selectType('tricks')">tricks</div>
            <div class="menu-item" @click="selectType('advanced training')">advanced training</div>
            <div class="menu-item" @click="selectType('active disciplines')">active disciplines</div>
            <div class="menu-item" @click="selectType('potty training')">potty training</div>
          </div>
        </div>
      </div>
    </div>

    <div class="exercise-list">
      <div v-for="(subOption, index) in filteredSubOptions" :key="index" class="exercise-item">
        <div class="exercise-image"></div>
        <div class="exercise-title">{{ subOption }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Training",
  data() {
    return {
      trainingOptions: [
        "commands",
        "behavioral training",
        "tricks",
        "advanced training",
        "active disciplines",
        "potty training",
      ],
      subOptions: {
        "commands": ["sit", "lie down", "come", "stop", "stay"],
        "behavioral training": [
          "sit and stay",
          "leave it",
          "quiet",
          "recall",
          "no jumping",
          "crate training",
          "door manners",
          "not pulling",
          "place command",
        ],
        "tricks": [
          "shake hand",
          "paw",
          "spin",
          "roll over",
          "bang",
          "wave",
          "high five",
          "back up",
          "crawl",
          "kiss",
        ],
        "advanced training": [
          "off-leash",
          "search",
          "retrieve specific items",
          "heel",
          "find your keys",
        ],
        "active disciplines": [
          "agility training",
          "flyball",
          "frisbee",
          "parkour",
        ],
        "potty training": [
          "scheduled potty breaks",
          "crate training",
          "puppy pad",
        ],
      },
      difficultyLevels: {
        beginner: [
          "sit and stay",
          "leave it",
          "quiet",
          "recall",
          "no jumping",
          "shake hand",
          "paw",
          "wave",
          "high five",
          "kiss",
          "frisbee",
        ],
        intermediate: [
          "door manners",
          "not pulling",
          "place command",
          "spin",
          "roll over",
          "crawl",
          "heel",
          "flyball",
          "agility training",
          "search",
        ],
        advanced: [
          "crate training",
          "bang",
          "back up",
          "off-leash",
          "retrieve specific items",
          "find your keys",
          "scheduled potty breaks",
          "puppy pad",
          "parkour",
        ],
      },
      selectedDifficulty: null,
      selectedType: null,
    };
  },
  computed: {
    filteredSubOptions() {
      if (this.selectedType) {
        return this.subOptions[this.selectedType] || [];
      }
      if (this.selectedDifficulty) {
        return this.difficultyLevels[this.selectedDifficulty] || [];
      }
      return [];
    },
  },
  methods: {
    selectDifficulty(difficulty) {
      this.selectedDifficulty = difficulty;
      this.selectedType = null; 
    },
    selectType(type) {
      this.selectedType = type; 
      this.selectedDifficulty = null; 
    },
  },
};
</script>

<style scoped>
.training-plan {
  display: flex;
  flex-direction: column;
  background-color: #EDD9B7;
  min-height: 100vh;
  overflow-x: hidden;
}

.training-title {
  font-family: 'ChunkyRetro', sans-serif;
  font-size: 15rem;
  color: #FFFEF9;
  text-align: left;
  width: 100%;
  z-index: 2;
  opacity: 60%;
  margin-top: 5%;
  margin-left: 15%;
}

.menu-container {
  display: flex;
  justify-content: center;
  width: 100%;
  top: 5%;
}

.menu {
  display: flex;
  gap: 80px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  background-color: #FFFEF9;
  color: #EDD9B7;
  font-family: 'ChunkyRetro', sans-serif;
  font-size: 3rem;
  padding: 16px;
  border-radius: 70px 70px 0 0;
  cursor: pointer;
  height: 80px;
  width: 270px;
  text-align: center;
  border: none;
  z-index: 10;
  opacity: 60%;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #FFFEF9;
  width: 270px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  left: 0;
  border-radius: 0 0 20px 20px;
  overflow: hidden;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.dropdown:hover .dropdown-content {
  display: block;
  opacity: 1;
  transform: translateY(0);
  opacity: 60%;
}

.menu-item {
  padding: 12px 16px;
  cursor: pointer;
  font-family: 'ChunkyRetro', sans-serif;
  font-size: 2.5rem;
  color: #EDD9B7;
  text-align: left;
}

.menu-item:hover {
  background-color: #EDD9B7;
  color: #FFFEF9;
}

.exercise-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  justify-items: center;  
  align-items: start;    
  margin-top: 5%;
  padding: 0 5%;
}

.exercise-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 250px; 
  margin-bottom: 50px;  
}

.exercise-image {
  width: 350px; 
  height: 250px;
  background-color: #D1B38D;
  margin-bottom: 10px;
}

.exercise-title {
  font-family: 'CenturyGothic', sans-serif;
  font-size: 1rem;
  color: #333;
}
</style>
