<template>
  <div class="sit-stay">
    <div class="title-box">
      <div class="page-title">sit and stay</div>
      <div class="content">
        <h2>Teaching Your Dog to Sit</h2>
        <ol>
          <li>
            <strong>Lure Your Dog into a Sitting Position:</strong> Hold a treat above your dog’s head. As you lift the treat, the dog’s rear will naturally move down. Once you see the muscles in their hind legs shifting into a sit, click a clicker or use a marker word like <strong>yes</strong>.
          </li>
          <li>
            <strong>Encourage Staying in a Sitting Position:</strong> Use quick treat delivery to reward the dog for remaining seated. As the dog improves, gradually increase the time between marking the behavior and delivering the treat. If the dog stands, lure them back into the sitting position, wait, and reward.
          </li>
          <li>
            <strong>Train a Release Command:</strong> When your dog can sit for 5–10 seconds, introduce a release command like <strong>free</strong> or <strong>release</strong>. Say the command, and if the dog doesn’t stand, encourage them to do so by clapping or gesturing. Reward them once they stand.
          </li>
          <li>
            <strong>Remove the Lure and Add a Hand Signal:</strong> Pretend to hold a treat, lure the dog into a sitting position, then reward from another hand or treat pouch. Gradually turn the luring motion into a hand signal by reducing the proximity of your hand to the dog’s face.
          </li>
          
          <div class="video-container">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/ksBLKi6lj1s" 
              frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>

        </ol>

        <h2>Teaching Your Dog to Stay</h2>
        <ol>
          <li>
            <strong>Start with Basic Stays:</strong> With your dog sitting, give the <strong>stay</strong> command. Take a single step backward, then return and reward the dog for staying.
          </li>
          <li>
            <strong>Increase Distance Gradually:</strong> Repeat step one while slowly increasing the number of steps away. Always return to the dog and reward.
          </li>
          <li>
            <strong>Train the Out-of-Sight Stay:</strong> Once your dog can stay with you across the room, give the <strong>stay</strong> command, step out of sight, and return quickly. Gradually increase the time spent out of sight before rewarding.
          </li>
          <li>
            <strong>Add Distractions:</strong> Introduce simple distractions like touching your treat pouch, gradually progressing to more complex ones like tossing a frisbee. Reward the dog for staying seated.
          </li>
          <li>
            <strong>Perfect the Release Command:</strong> Teach your dog that they can only move when given the release command. Use distractions to test their focus, and reward them only when they wait for your command.
          </li>
        </ol>
      </div>
    </div>

    <div class="title-box">
      <div class="content">
        <h2 class="training-talk">Training Talk</h2>
        <textarea v-model="comment" placeholder="Write your comment here..." rows="4" class="comment-box"></textarea>
        <button @click="submitComment" class="comment-btn">Submit</button>
        <div v-if="comments.length > 0" class="comments-list">
          <ul>
            <li v-for="(comment, index) in comments" :key="index">{{ comment }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SitStay",
  data() {
    return {
      comment: '',
      comments: []
    };
  },
  methods: {
    submitComment() {
      if (this.comment.trim()) {
        this.comments.push(this.comment);
        this.comment = ''; 
      }
    }
  }
};
</script>

<style scoped>
.sit-stay {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #EEEEE6;
  min-height: 100vh;
  padding: 2rem;
}

.title-box {
  display: flex;
  flex-direction: column;
  background-color: #FFFEF9;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  margin: 2rem auto;
}

.page-title {
  font-family: 'ChunkyRetro', sans-serif;
  font-size: 10rem;
  color: #EDD9B7;
  text-align: center;
  opacity: 70%;
  margin-bottom: -2rem;
}

.content {
  font-family: CenturyGothic, sans-serif;
  color: #5F5F5F;
  line-height: 1.6;
  text-align: left;
}

.content h2 {
  color: #EDD9B7;
  font-size: 2rem;
  margin-top: 0.2rem;
  padding-top: 2.5rem;
}

.content h2:first-of-type {
  padding-top: 0;
}

.content ol {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.content li {
  margin-bottom: 1rem;
}

.comment-box {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  resize: none; 
  font-family: 'Century Gothic', sans-serif;
  color: #5F5F5F;
  box-sizing: border-box;
}

.comment-btn {
  background-color: #EDD9B7;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  font-family: 'Montel', sans-serif;
}

.comment-btn:hover {
  background-color: #EDD9B7;
}

.comments-list {
  margin-top: 2rem;
}

.comments-list ul {
  padding-left: 1.5rem;
}

.comments-list li {
  margin-bottom: 1rem;
}

.training-talk {
  font-family: 'Montel', sans-serif;
  font-weight: 600; 
  color: #5F5F5F;
  font-size: 2rem;
  margin-bottom: 0.6rem;
}

.comment-box:focus {
  outline: none; 
}

.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
</style>
