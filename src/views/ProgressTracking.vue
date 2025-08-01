<template>
  <div class="weight-change">
    <h1 class="title">Track Dog's Weight</h1>

    <form @submit.prevent="addWeight">
      <input type="date" v-model="newEntry.date" required />
      <input type="number" step="0.1" v-model.number="newEntry.weight" placeholder="Weight (kg)" required />
      <button type="submit">Add Entry</button>
    </form>

    <canvas ref="weightChart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'WeightChange',
  data() {
    return {
      chart: null,
      newEntry: {
        date: '',
        weight: null,
      },
      weights: [],
    };
  },
  methods: {
    async fetchWeights() {
      try {
        const res = await fetch('http://localhost:3000/dog-weight-history');
        const { weights } = await res.json();
        this.weights = weights;
        this.updateChart();
      } catch (err) {
        console.error('Failed to fetch weights:', err);
      }
    },
    async addWeight() {
  try {
    const res = await fetch('http://localhost:3000/dog-weight-history', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.newEntry)
    });

    if (res.status === 409) {
      alert('Weight for this date already exists!');
      return;
    }

    if (!res.ok) throw new Error('Add failed');

    this.newEntry.date = '';
    this.newEntry.weight = null;

    await this.fetchWeights(); 
  } catch (err) {
    console.error('Failed to add weight:', err);
  }
},

   updateChart() {
  const labels = this.weights.map(w => w.date);
  const data = this.weights.map(w => w.weight);

  if (this.chart) {
    this.chart.destroy();
  }

  const ctx = this.$refs.weightChart.getContext('2d');
  this.chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Weight (kg)',
        data,
        backgroundColor: '#EDD9B7',
        borderRadius: 5,
      }]
    },
    options: {
      responsive: true,
      events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        title: {
          display: true,
          text: 'Weekly Dog Weight',
          font: { size: 22 }
        },
        legend: { display: false }
      },
      scales: {
        y: {
          title: {
            display: true,
            text: 'kg'
          },
          beginAtZero: false
        },
        x: {
          title: {
            display: true,
            text: 'Date'
          }
        }
      }
    }
  });
}

  },
  mounted() {
    this.fetchWeights();
  }
};
</script>

<style scoped>
.weight-change {
  background-color: #FBFBC0;
  min-height: 100vh;
  padding: 40px;
  font-family: 'Montel', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  color: #5F5F5F;
  font-size: 2.5rem;
  margin-bottom: 30px;
}

form {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}

input, button {
  padding: 10px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-family: 'Century Gothic', sans-serif;
}

button {
  background-color: #EDD9B7;
  color: #5F5F5F;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #d4c1a5;
}

canvas {
  max-width: 800px;
  width: 100%;
  background: white;
  padding: 20px;
  border-radius: 10px;
}
</style>
