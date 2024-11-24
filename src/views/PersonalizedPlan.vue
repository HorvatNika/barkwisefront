<template>
    <div class="training-plan">
      <div class="training-title">personalized plan</div>
  
      <div class="menu-container">
        <div class="menu">
          <div class="dropdown">
            <button class="dropbtn">select age</button>
            <div class="dropdown-content">
              <div class="menu-item" 
                   :class="{ selected: form.age === 'Puppy' }"
                   @click="selectAge('Puppy')">puppy (younger than 6 months)</div>
              <div class="menu-item" 
                   :class="{ selected: form.age === 'Young' }"
                   @click="selectAge('Young')">young (6-12 months)</div>
              <div class="menu-item" 
                   :class="{ selected: form.age === 'Adult' }"
                   @click="selectAge('Adult')">adult (1-2 years)</div>
              <div class="menu-item" 
                   :class="{ selected: form.age === 'Mature' }"
                   @click="selectAge('Mature')">mature (2-7 years)</div>
              <div class="menu-item" 
                   :class="{ selected: form.age === 'Senior' }"
                   @click="selectAge('Senior')">senior (older than 7 years)</div>
            </div>
          </div>
  
          <div class="dropdown">
            <button class="dropbtn">training goals</button>
            <div class="dropdown-content">
              <div class="menu-item"
                   :class="{ selected: form.goals.includes('behavioral') }"
                   @click="toggleGoal('behavioral')">behavioral control</div>
              <div class="menu-item"
                   :class="{ selected: form.goals.includes('tricks') }"
                   @click="toggleGoal('tricks')">trick training</div>
              <div class="menu-item"
                   :class="{ selected: form.goals.includes('advanced') }"
                   @click="toggleGoal('advanced')">advanced training</div>
              <div class="menu-item"
                   :class="{ selected: form.goals.includes('active') }"
                   @click="toggleGoal('active')">active disciplines</div>
              <div class="menu-item"
                   :class="{ selected: form.goals.includes('potty') }"
                   @click="toggleGoal('potty')">potty training</div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="exercise-list">
        <div v-if="plan" class="exercise-item">
          <h2>Your Comprehensive Training Plan:</h2>
          <pre>{{ plan }}</pre>
        </div>
      </div>
  
      <div class="generate-button-container">
        <button class="generate-button" @click="generatePlan">generate plan</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          age: "",
          goals: [],
        },
        plan: "",
      };
    },
    methods: {
      selectAge(age) {
        this.form.age = age;
      },
      toggleGoal(goal) {
        if (this.form.goals.includes(goal)) {
          this.form.goals = this.form.goals.filter(g => g !== goal);
        } else {
          this.form.goals.push(goal);
        }
      },
      generatePlan() {
        if (!this.form.age) {
          this.plan = "Please select an age.";
          return;
        }
        if (this.form.goals.length === 0) {
          this.plan = "Please select at least one training goal.";
          return;
        }
  
        let planDetails = [];
  
        const exercises = {
  behavioral: {
    Puppy: [
      "Sit and Stay", "Leave It", "Quiet", "Recall", "No Jumping", 
      "Crate Training (can help with housebreaking)", "Door Manners", 
      "Not Pulling", "Place Command"
    ],
    Young: [
      "Sit and Stay", "Leave It", "Quiet", "Recall", "No Jumping", 
      "Crate Training", "Door Manners", "Not Pulling", "Place Command"
    ],
    Adult: [
      "Sit", "Stay", "Leave It", "Recall", "No Jumping", 
      "Crate Training", "Door Manners", "Not Pulling", "Place Command"
    ],
    Mature: [
      "Sit", "Stay", "Leave It", "Recall", "No Jumping", 
      "Crate Training", "Door Manners", "Not Pulling", "Place Command"
    ],
    Senior: [
      "Sit", "Stay", "Leave It", "Recall", "No Jumping", 
      "Crate Training (helpful for comfort)", "Door Manners", 
      "Not Pulling", "Place Command"
    ]
  },
  tricks: {
    Puppy: [
      "Shake Hand", "Paw", "Wave", "High Five", "Kiss"
    ],
    Young: [
      "Shake Hand", "Paw", "Spin", "Roll Over", "Wave", 
      "High Five", "Kiss", "Frisbee", "Bang", "Back Up", "Crawl"
    ],
    Adult: [
      "Shake Hand", "Paw", "Spin", "Roll Over", "Wave", 
      "High Five", "Kiss", "Frisbee", "Bang", "Back Up", "Crawl"
    ],
    Mature: [
      "Shake Hand", "Paw", "Spin", "Roll Over", "Wave", 
      "High Five", "Kiss", "Frisbee", "Bang", "Back Up", "Crawl"
    ],
    Senior: [
      "Shake Hand", "Paw", "Spin", "Roll Over", "Wave", 
      "High Five", "Kiss", "Bang", "Back Up", "Crawl"
    ]
  },
  active: {
    Puppy: [],
    Young: [
      "Agility Training", "Flyball"
    ],
    Adult: [
      "Agility Training", "Flyball", "Frisbee"
    ],
    Mature: [
      "Agility Training", "Parkour"
    ],
    Senior: [
      "Frisbee (lightly)", "Parkour (modified to fit comfort level)"
    ]
  },
  advanced: {
    Puppy: [],
    Young: [
      "Recall at greater distance", "Advanced Heel", 
      "Retrieve Specific Items", "Search", "Heel", "Off-Leash"
    ],
    Adult: [
      "Advanced Off-Leash", "Find Your Keys", "Parkour", 
      "Search and Rescue", "Advanced Agility", "Heel", "Off-Leash"
    ],
    Mature: [
      "Off-Leash Training", "Search and Rescue", 
      "Parkour", "Find Your Keys", "Heel", "Off-Leash"
    ],
    Senior: [
      "Advanced Recall", "Off-Leash (if possible)", "Heel"
    ]
  },
  potty: {
    Puppy: [
      "Scheduled Potty Breaks", "Puppy Pad"
    ],
    Young: [],
    Adult: [],
    Mature: [],
    Senior: [
      "Scheduled Potty Breaks", "Crate Training"
    ]
  }
};
  
        let selectedExercises = [];
        
        if (this.form.goals.includes('behavioral')) {
          selectedExercises.push(...exercises.behavioral[this.form.age]);
        }
        if (this.form.goals.includes('tricks')) {
          selectedExercises.push(...exercises.tricks[this.form.age]);
        }
        if (this.form.goals.includes('active')) {
          selectedExercises.push(...exercises.active[this.form.age]);
        }
        if (this.form.goals.includes('advanced')) {
          selectedExercises.push(...exercises.advanced[this.form.age]);
        }
        if (this.form.goals.includes('potty')) {
          selectedExercises.push(...exercises.potty[this.form.age]);
        }
  
        if (selectedExercises.length > 0) {
          this.plan = selectedExercises.join("\n");
        } else {
          this.plan = "No exercises available for the selected options.";
        }
      }
    }
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
  
  .menu-item:hover,
  .menu-item.selected {
    background-color: #EDD9B7;
    color: #FFFEF9;
  }
  
  .exercise-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 5%;
    padding: 0 5%;
  }
  
  .exercise-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 600px;
    margin-bottom: 50px;
    font-family: 'CenturyGothic', sans-serif;
    font-size: 1rem;
    color: #333;
  }
  
  .generate-button-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .generate-button {
    font-family: 'ChunkyRetro', sans-serif;
    font-size: 3rem;
    color: #EDD9B7;
    background-color: #FFFEF9;
    padding: 10px 20px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    opacity: 60%;
  }
  
  .generate-button:hover {
    background-color: #EDD9B7;
    color: #FFFEF9;
  }
  </style>
  