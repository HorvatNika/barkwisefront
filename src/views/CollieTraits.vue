<template>
    <div class="collietraits">
      <div class="home-title">home</div>
      <div class="home-text">
        Learn about the unique traits of Border Collies, including their intelligence, energy, and agility. Discover how their working nature and trainability make them excellent companions and pets. Understanding these traits helps you provide the best care and training for your Border Collie.
      </div>
  
      <div class="collie-traits-title">collie traits</div>
  
      <div class="top-background"></div>
      <div class="middle-line"></div>
      
      <div class="bottom-background">
        <div v-if="currentSet === 1" class="square left">
          <div class="square-title-wrapper">
            <div class="square-title">The Colorful World of Border Collies: Exploring Coat Colors and Patterns</div>
            <div class="square-description">
              Border Collies come in a variety of stunning coat colors, including classic black-and-white, tricolor, and the rare merle. Each pattern is genetically unique and reflects the dog's heritage. While the black-and-white Border Collie is iconic, other color patterns add to their beauty and can even influence health traits like vision and hearing.
            </div>
          </div>
        </div>
        <div v-if="currentSet === 1" class="square center">
          <div class="square-title-wrapper">
            <div class="square-title">Why Border Collies Are the Ultimate Working Dogs: Intelligence, Energy, and Loyalty Combined</div>
            <div class="square-description">
              Border Collies are known for their intelligence and boundless energy. As the smartest dog breed, they excel in herding, agility, and obedience. Their loyalty makes them fantastic companions, but they need constant mental and physical stimulation to stay happy and healthy.
            </div>
          </div>
        </div>
        <div v-if="currentSet === 1" class="square right">
          <div class="square-title-wrapper">
            <div class="square-title">Border Collie Varieties: Discovering the Different Types and Their Unique Traits</div>
            <div class="square-description">
              Border Collies are found in different lines, including working and show lines. Working dogs are bred for herding with higher drive and agility, while show dogs focus on appearance and are often more relaxed. Understanding these differences helps in choosing the right Border Collie for your needs.
            </div>
          </div>
        </div>
  
        <div v-if="currentSet === 2" class="square left">
          <div class="square-title-wrapper">
            <div class="square-title">New Border Collie Health Insights: Understanding Common Health Issues</div>
            <div class="square-description">
              Border Collies can suffer from health issues like hip dysplasia, epilepsy, and Collie eye anomaly (CEA). Regular vet check-ups and early detection are essential for managing these conditions and ensuring a long, healthy life for your dog.
            </div>
          </div>
        </div>
        <div v-if="currentSet === 2" class="square center">
          <div class="square-title-wrapper">
            <div class="square-title">Training Techniques for Border Collies: Achieving Excellence</div>
            <div class="square-description">
              Border Collies are quick learners and excel with positive reinforcement techniques. Agility training is particularly beneficial, providing both mental and physical challenges that keep them engaged and help strengthen your bond with your dog.
            </div>
          </div>
        </div>
        <div v-if="currentSet === 2" class="square right">
          <div class="square-title-wrapper">
            <div class="square-title">Border Collie Agility Competitions: Preparing for Success</div>
            <div class="square-description">
              Border Collies excel in agility competitions due to their speed and intelligence. Training for agility involves teaching them to navigate obstacles while maintaining focus. With consistent practice, they can succeed in both casual and competitive environments.
            </div>
          </div>
        </div>
      </div>
      
      <img src="@/assets/slike/borderzel.png" alt="borderzel" class="borderzel-image" />
      
      <div class="navigation">
        <div class="nav-circle" @click="changeSet(1)"></div>
        <div class="nav-circle" @click="changeSet(2)"></div>
      </div>
    </div>
  </template>   
  
  <script>
  export default {
    name: "Home",
    data() {
      return {
        currentSet: 1,
      };
    },
    methods: {
      changeSet(setNumber) {
        this.currentSet = setNumber;
      },
    },
  };
  </script>
  
  <style scoped>
.collietraits {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  position: relative;
}

.home-title {
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

.home-text {
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

.collie-traits-title {
  font-family: 'ChunkyRetro', sans-serif;
  font-size: 15rem;  
  color: #5F5F5F;
  text-align: center;
  position: absolute;
  top: 37.5%; 
  width: 100%;
  z-index: 2;
  opacity: 30%;
}

.top-background {
  background-color: #AEEBBA;
  flex: 1;
  z-index: 1;
}

.middle-line {
  background-color: #FFFEF9;
  height: 100px;
  z-index: 1;
}

.bottom-background {
  background-color: #EEEEE6;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  padding: 0 10%;
}

.square {
  width: 27%;
  height: 270px;
  background-color: #EDD9B7;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.square-title-wrapper {
  position: absolute;
  top: 15%;
  width: 95%;
  text-align: left;
  left: 5%;
}

.left, .center, .right {
  background-color: #FFFEF9;
}

.square-title {
  font-family: 'CenturyGothic', sans-serif;
  font-size: 0.95em;
  font-weight: bold;
  color: #5F5F5F;
}

.square-description {
  font-family: 'CenturyGothic', sans-serif;
  font-size: 0.85rem;
  color: #5F5F5F;
  margin-top: 10px;
  width: 95%;
}

.borderzel-image {
  position: fixed;
  right: 60px;
  top: 8%;
  width: auto;
  height: 50%;
  object-fit: contain;
  z-index: 2;
}

.navigation {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
  z-index: 10;
}

.nav-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #FFFEF9;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.nav-circle:hover {
  background-color: #AEEBBA;
}
  </style>
  