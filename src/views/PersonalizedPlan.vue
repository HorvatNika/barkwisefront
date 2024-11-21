<template>
    <div class="personalized-plan">
      <h1>Comprehensive Personalized Training Plan for Your Border Collie</h1>
  
      <div>
        <label for="age">Select Your Dog's Age:</label>
        <select v-model="form.age" id="age">
          <option value="">--Select Age--</option>
          <option value="Puppy">Puppy (Younger than 6 months)</option>
          <option value="Young">Young (6-12 months)</option>
          <option value="Adult">Adult (1-2 years)</option>
          <option value="Mature">Mature (2-7 years)</option>
          <option value="Senior">Senior (Older than 7 years)</option>
        </select>
      </div>
  
      <form @submit.prevent="generatePlan">
        <div>
          <label>Select Training Goals:</label>
          <div>
            <input type="checkbox" id="behavioral" value="behavioral" v-model="form.goals" />
            <label for="behavioral">Behavioral Control</label>
          </div>
          <div>
            <input type="checkbox" id="tricks" value="tricks" v-model="form.goals" />
            <label for="tricks">Trick Training</label>
          </div>
          <div>
            <input type="checkbox" id="advanced" value="advanced" v-model="form.goals" />
            <label for="advanced">Advanced Training</label>
          </div>
          <div>
            <input type="checkbox" id="active" value="active" v-model="form.goals" />
            <label for="active">Active Disciplines</label>
          </div>
          <div>
            <input type="checkbox" id="potty" value="potty" v-model="form.goals" />
            <label for="potty">Potty Training</label>
          </div>
          <div>
            <input type="checkbox" id="mental" value="mental" v-model="form.goals" />
            <label for="mental">Mental Stimulation & Problem Solving</label>
          </div>
        </div>
  
        <div>
          <button type="submit">Generate Plan</button>
        </div>
      </form>
  
      <div v-if="plan" class="plan-result">
        <h2>Your Comprehensive Training Plan:</h2>
        <pre>{{ plan }}</pre>
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
    computed: {
      trainingTimePerSession() {
        const times = {
          "Puppy": "5-10 minutes",
          "Young": "10-15 minutes",
          "Adult": "15-20 minutes",
          "Mature": "20-30 minutes",
          "Senior": "10-15 minutes",
        };
        return times[this.form.age] || "0 minutes";
      },
    },
    methods: {
      generatePlan() {
        if (this.form.goals.length === 0) {
          this.plan = "Please select at least one training goal.";
          return;
        }
  
        let exerciseList = [];
  
        const ageExercises = {
          "Puppy": {
            behavioral: [
              "Basic Commands (Sit, Stay, Come): Focus on short, positive reinforcement-based sessions.",
              "Crate Training: Essential for safe and calm behavior management.",
            ],
            tricks: ["Shake Hands, Paw: Begin light trick training with rewards."],
            advanced: ["None at this stage."],
            active: ["Interactive Play, Fetch (Short bursts of activity)."],
            potty: ["Scheduled Potty Breaks: Create a consistent potty schedule for success."],
            mental: ["Puzzle Toys: Start with easy-to-solve puzzles to engage their intelligence."]
          },
          "Young": {
            behavioral: [
              "Advanced Recall (Come when called): Introduce more distractions and environment changes.",
              "Leash Training: Control over walking pace and no pulling.",
            ],
            tricks: ["Spin, Roll Over, Play Dead: Increase complexity as they learn."],
            advanced: ["Introduction to Agility Training: Start with basic obstacles like tunnels."],
            active: ["Short Agility Sessions (Weaving, tunnels), Fetch with distractions."],
            potty: ["Consistent Potty Breaks and Crate Training with added distractions."],
            mental: ["Puzzle Games: Increase complexity of puzzles for problem-solving."],
          },
          "Adult": {
            behavioral: [
              "Leash Walking (Heel): Focus on loose-leash walking and focus on you.",
              "Place Command: Instruct the dog to stay in a designated spot until released.",
            ],
            tricks: [
              "Wave, High Five, Back Up, Crawl, Kiss: Complex tricks to keep them mentally sharp.",
              "Advanced Sit and Stay with distractions.",
            ],
            advanced: ["Advanced Agility (More difficult obstacles and increased speed)."],
            active: ["Agility Training, Flyball, Fetch with Speed and Direction Changes."],
            potty: ["Continue Scheduled Potty Breaks with added distractions."],
            mental: ["Advanced Puzzle Games: Introduce problem-solving toys that take longer to solve."],
          },
          "Mature": {
            behavioral: [
              "No Pulling, Heel: Focus on perfecting walking skills in real-life situations.",
              "Place Command, Stay: Extend duration for advanced self-control.",
            ],
            tricks: ["Advanced Tricks: Teach new tricks like 'Spin and Crawl'."],
            advanced: ["Advanced Agility (Complex sequences and longer durations)."],
            active: ["Frisbee (Light), Agility Training."],
            potty: ["Scheduled Potty Breaks with more independence from you."],
            mental: ["Interactive Mental Challenges: Introduce complex toys and scent games."],
          },
          "Senior": {
            behavioral: [
              "Gentle Commands: Focus on maintaining calm and stability, no intense corrections.",
              "Recall: Practice recall with low-intensity distractions.",
            ],
            tricks: ["Shake Hands, Paw: Keep tricks light and gentle to prevent strain."],
            advanced: ["Gentle Agility or Light Frisbee."],
            active: ["Light Agility or Slow-Paced Fetch."],
            potty: ["Scheduled Potty Breaks: Monitor for signs of incontinence or difficulty."],
            mental: ["Puzzle Games with Slow Pace: Use simple, easy puzzles to stimulate their mind."],
          },
        };
  
        this.form.goals.forEach(goal => {
          if (ageExercises[this.form.age][goal]) {
            exerciseList.push(...ageExercises[this.form.age][goal]);
          }
        });
  
        this.plan = `Training Plan for Your Border Collie:\n\n` + exerciseList.join("\n\n") || "No training plan available for selected goals.";
      },
    },
  };
  </script>
  
  <style scoped>
  .plan-result {
    margin-top: 20px;
    padding: 20px;
    background-color: #f9f9f9;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-family: Arial, sans-serif;
  }
  </style>
  