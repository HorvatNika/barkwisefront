<template>
  <div class="no-pulling">
    <div class="title-box">
      <div class="page-title">no pulling</div>
      <div class="content">
        <h2>Teaching Your Dog to Walk Without Pulling</h2>
        <ol>
          <li>
            <strong>Start the Walk:</strong> Begin with your dog on a leash. Use a collar that provides control.
          </li>
          <li>
            <strong>Recognizing Pulling:</strong> When the dog starts pulling or moves ahead, prepare for a corrective turn.
          </li>
          <li>
            <strong>Perform a Corrective Turn:</strong>
            <ul>
              <li>Quickly and decisively turn in the opposite direction of the dog.</li>
              <li>As you turn, give a light tug on the leash to provide a pop sensation.</li>
              <li>Avoid dragging the dog toward you; the tug should be brief but firm.</li>
            </ul>
          </li>
          <li>
            <strong>Dog's Reaction:</strong> The dog will likely turn back toward you after the correction. A small yelp is a normal reaction.
          </li>
          <li>
            <strong>Continue Walking:</strong> Proceed in the new direction. If the dog stays by your side without pulling, praise and reward with a treat.
          </li>
          <li>
            <strong>Repetition:</strong> Repeat the corrective turn every time the dog begins pulling. The goal is to teach the dog that pulling leads to an unpleasant pop and a change in direction.
          </li>
        </ol>

        <div class="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/watch?v=v1ftuJIJjTw" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>

        <div class="additional-techniques">
          <h3><strong>Additional Techniques:</strong></h3>
          <ul>
            <li>
              <strong>Sudden Stops:</strong> When the dog starts pulling, stop abruptly. The tension on the leash will signal the dog to pay attention to you.
            </li>
            <li>
              <strong>Leash Tapping:</strong> If the dog starts moving ahead, give a gentle tap on the leash to remind them to stay beside you.
            </li>
          </ul>
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
  name: "NoPulling",
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
.no-pulling {
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

.content h3 {
  color: #5F5F5F;
  font-size: 1.5rem;
  margin-top: 1.5rem;
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

.additional-techniques ul {
  padding-left: 1.5rem;
  margin: 1rem 0;
}
</style>
