<template>
  <div class="healthcare">
    <div class="home-title">home</div>
    <div class="home-text">
      Learn about the unique traits of Border Collies, including their intelligence, energy, and agility. Discover how their working nature and trainability make them excellent companions and pets. Understanding these traits helps you provide the best care and training for your Border Collie.
    </div>

    <div class="health-care-title">health and care</div>

    <div class="top-background"></div>
    <div class="middle-line"></div>

    <div class="bottom-background">
      <router-link to="/grooming" class="square left">
        <div class="square-title-wrapper">
          <div class="square-title">Grooming Your Border Collie: Essential Care Tips for a Cared Dog</div>
          <div class="square-description">
            Border Collies have thick, medium-length coats that require regular grooming to stay healthy and look their best. Learn how often to bathe your dog, how to brush their fur to prevent mats and tangles, and how to trim their nails safely. We'll also discuss how to take care of their ears and teeth, which can be prone to buildup.
          </div>
        </div>
      </router-link>

      <router-link to="/dentalcare" class="square center">
        <div class="square-title-wrapper">
          <div class="square-title">Dental Care for Border Collies: Keeping Their Teeth Healthy</div>
          <div class="square-description">
            Oral health is just as important for dogs as it is for humans. Border Collies can suffer from tartar buildup, gum disease, and even tooth loss if their teeth aren't properly cared for. Learn how to brush your dog’s teeth effectively, the importance of dental chews, and when to schedule professional cleanings with a veterinarian. By maintaining good dental hygiene, you can help prevent painful oral issues and keep your Border Collie’s mouth fresh and healthy for years to come.
          </div>
        </div>
      </router-link>

      <router-link to="/mentalhealth" class="square right">
        <div class="square-title-wrapper">
          <div class="square-title">Mental Health and Well-being: Supporting Your Border Collie's Emotional Needs</div>
          <div class="square-description">
            Border Collies are highly intelligent and sensitive dogs that require mental stimulation and emotional care. Learn how to recognize signs of stress or anxiety, create a stimulating environment, and build a strong bond with your dog. We'll discuss games, training techniques, and activities that promote mental well-being and ensure a happy, balanced life for your Border Collie.
          </div>
        </div>
      </router-link>
    </div>

    <img src="@/assets/slike/borderzel.png" alt="borderzel" class="borderzel-image" />
  </div>
</template>

<script>
export default {
  name: "Healthcare",
};
</script>

<style scoped>
.healthcare {
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

.health-care-title {
  font-family: 'ChunkyRetro', sans-serif;
  font-size: 15rem;
  color: #5F5F5F;
  text-align: center;
  position: absolute;
  top: 37.5%;
  width: 100%;
  z-index: 2;
  opacity: 30%;
  pointer-events: none;
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
</style>
