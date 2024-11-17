<template>
  <div class="training-plan">
    <div class="training-title">training plan</div>
    <div class="top-background"></div>
    <div class="bottom-background">
      <div class="menu">
        <div 
          class="menu-item" 
          v-for="(item, index) in trainingOptions" 
          :key="index"
          @click="toggleMenu(index)"
        >
          <div class="menu-title">{{ item.title }}</div>
          <div v-if="item.isOpen" class="submenu">
            <ul>
              <li 
                v-for="(subitem, subindex) in item.suboptions" 
                :key="subindex"
                @click.stop="selectOption(item.title, subitem)"
              >
                {{ subitem }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="content" v-if="selectedContent">
        <h2 class="content-title">Selected: {{ selectedContent.title }}</h2>
        <p class="content-description">
          You selected: <strong>{{ selectedContent.option }}</strong>.
        </p>
        <p class="content-details">
          {{ contentDetails }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Training",
  data() {
    return {
      selectedContent: null,
      trainingOptions: [
        {
          title: "Commands",
          suboptions: ["Sit", "Lie down", "Come", "Stop", "Stay"],
          isOpen: false, // Stanje proširenja
        },
        {
          title: "Behavioral Training",
          suboptions: [
            "Socialization with people and other dogs",
            "Learning proper leash manners",
            "Eliminating unwanted habits",
          ],
          isOpen: false,
        },
        {
          title: "Tricks",
          suboptions: [
            "Giving a paw",
            "Rolling over",
            "Spinning in a circle",
            "Jumping through a hoop",
            "Putting a paw on their face",
            "Playing dead",
            "Carrying objects",
          ],
          isOpen: false,
        },
        {
          title: "Advanced Training",
          suboptions: [
            "Retrieving items by name",
            "Recognizing and distinguishing colors",
            "Navigating obstacles",
            "Opening doors or drawers",
          ],
          isOpen: false,
        },
        {
          title: "Active Disciplines",
          suboptions: ["Agility", "Flyball", "Disc dog", "Running", "Swimming"],
          isOpen: false,
        },
        {
          title: "Potty Training",
          suboptions: ["Potty training basics and tips"],
          isOpen: false,
        },
      ],
    };
  },
  computed: {
    contentDetails() {
      if (!this.selectedContent) return "";

      const { title, option } = this.selectedContent;

      const details = {
        Commands: {
          "Sit": "Teach your dog to sit on command.",
          "Lie down": "Help your dog learn the 'lie down' command.",
          "Come": "Train your dog to come back when called.",
          "Stop": "Ensure your dog halts when you say stop.",
          "Stay": "Teach your dog to stay in place.",
        },
        "Behavioral Training": {
          "Socialization with people and other dogs": "Learn how to socialize your dog effectively.",
          "Learning proper leash manners": "Ensure a calm walk with proper leash manners.",
          "Eliminating unwanted habits": "Tips to stop jumping, barking, and chewing.",
        },
        Tricks: {
          "Giving a paw": "Show your dog how to give a paw.",
          "Rolling over": "Step-by-step guide to teach rolling over.",
          "Spinning in a circle": "Fun trick to spin in circles.",
          "Jumping through a hoop": "Teach your dog to jump through hoops.",
          "Putting a paw on their face": "Train your dog to mimic a 'shy' gesture.",
          "Playing dead": "Classic trick for 'play dead.'",
          "Carrying objects": "Train your dog to carry light objects.",
        },
        "Advanced Training": {
          "Retrieving items by name": "Train your dog to retrieve specific items.",
          "Recognizing and distinguishing colors": "Teach your dog to recognize colors.",
          "Navigating obstacles": "Prepare your dog for advanced obstacle courses.",
          "Opening doors or drawers": "Advanced training for opening objects.",
        },
        "Active Disciplines": {
          "Agility": "Learn about agility training for dogs.",
          "Flyball": "Guide to start flyball activities.",
          "Disc dog": "Teach your dog to catch flying discs.",
          "Running": "Best practices for running with your dog.",
          "Swimming": "Introduce your dog to swimming safely.",
        },
        "Potty Training": {
          "Potty training basics and tips": "Comprehensive guide to potty training.",
        },
      };

      return details[title]?.[option] || "Details unavailable for this option.";
    },
  },
  methods: {
    toggleMenu(index) {
      this.trainingOptions.forEach((item, i) => {
        if (i === index) {
          item.isOpen = !item.isOpen; 
        } else {
          item.isOpen = false;
        }
      });
    },
    selectOption(menuTitle, option) {
      this.selectedContent = { title: menuTitle, option };
    },
  },
};
</script>

<style scoped>
body, html {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

.training-plan {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  position: fixed;
  overflow-x: hidden;
}

.training-title {
  font-family: 'ChunkyRetro', sans-serif;
  font-size: 14rem;
  color: #FFFEF9;
  text-align: left;
  position: fixed;
  top: 10%;
  left: 15%;
  width: 100%;
  z-index: 2;
  opacity: 60%;
  white-space: nowrap;
}

.top-background {
  background-color: #EDD9B7;
  height: 37%;
  width: 100%;
  z-index: 1;
}

.bottom-background {
  background-color: #EEEEE6;
  flex: 1;
  width: 100%;
  height: 60%;
  padding: 20px;
  overflow-y: auto;
  overflow-x: auto;
}

.menu {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.menu-item {
  background-color: #d7bdf2;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'CenturyGothic', sans-serif;
  font-size: 1rem;
  color: #5f5f5f;
  text-align: center;
  flex: 1;
  min-width: 120px;
  box-sizing: border-box;
}

.menu-title {
  font-weight: bold;
}

.submenu {
  margin-top: 10px;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
}

.submenu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.submenu li {
  padding: 5px 0;
  color: #5f5f5f;
  cursor: pointer;
  text-align: left;
}

.content {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
}

.content-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.content-description {
  margin-bottom: 10px;
  color: #5f5f5f;
}

.content-details {
  color: #7a7a7a;
}
</style>
