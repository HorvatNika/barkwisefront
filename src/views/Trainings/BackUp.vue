<template>
  <div class="back-up">
    <div class="title-box">
      <div class="page-title">back up</div>
      <div class="content">
        <h2>Teaching Your Dog to Back Up</h2>
        <ol>
          <li>
            <strong>Start with the Dog in a Standing Position:</strong> Position your dog in front of you in a standing position.
          </li>
          <li>
            <strong>Apply Light Forward Pressure:</strong> Walk slowly toward the dog to create frontal pressure. This will encourage the dog to move backward.
          </li>
          <li>
            <strong>Introduce the Verbal Command:</strong> As the dog walks backward, say the command <strong>back</strong> or <strong>reverse</strong>.
          </li>
          <li>
            <strong>Reward the Dog:</strong> As soon as the dog takes a step backward, immediately reward it with a treat and praise.
          </li>
          <li>
            <strong>Increase the Distance:</strong> As the dog understands the concept, gradually increase the distance it moves backward.
          </li>
          <li>
            <strong>Introduce a Hand Signal:</strong> While walking toward the dog, gently tap your hand in the backward direction.
          </li>
          <li>
            <strong>Pair the Hand Signal with the Verbal Command:</strong> Use both the hand signal and verbal command while the dog moves backward.
          </li>
          <li>
            <strong>Gradually Remove Frontal Pressure:</strong> As the dog becomes more confident, reduce the pressure so it can walk backward using only the hand signal and verbal command.
          </li>
        </ol>

        <div class="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/lqR57PTKUQY" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
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
  name: "BackUp",
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
.back-up {
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

.content ul {
  padding-left: 2rem;
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

.content p {
  text-align: left;
  margin-top: 2rem;
  font-size: 1rem;
}
</style>
