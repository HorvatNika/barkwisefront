<template>
  <div class="call-name">
    <div class="title-box">
      <div class="page-title">call name</div>
      <div class="content">
        <h2>Teaching Your Dog to Come When Called</h2>
        <ol>
          <li>
            <strong>Start in a Safe Environment:</strong> Practice in a fenced yard or on a long leash to prevent the dog from running away.
          </li>
          <li>
            <strong>Charge the Dog’s Name with Meaning:</strong> Start by tossing a piece of food to the dog. After it eats it, call its name. As the dog comes back, mark the positive response with a clicker or the word <strong>yes</strong>. When the dog approaches, give it 4-5 pieces of food.
          </li>
          <li>
            <strong>Make Coming Back Worthwhile:</strong> The goal is to help the dog understand that coming to you brings rewards. Give it more treats when it returns than when it leaves you.
          </li>
          <li>
            <strong>Short and Intense Sessions:</strong> Practice in short sessions, ranging from 30 seconds to 2-3 minutes, several times a day. This will keep the dog motivated and prevent boredom.
          </li>
          <li>
            <strong>Introduce Limited Return:</strong> Have someone help you hold the dog in a sitting position while you move a few meters away. When you're ready, have the helper release the dog as you call its name. The dog will <strong>launch</strong> toward you. Repeat this exercise several times.
          </li>
          <li>
            <strong>Death Triangle:</strong> Have two people stand in a triangle with you. While the dog is with one person, the other person calls it by name. When it reaches them, reward the dog. Then, have the third person call the dog’s name. This teaches the dog to pay attention to who is calling it.
          </li>
          <li>
            <strong>Using a Leash:</strong> At this stage, use a regular collar and leash. Throw food to the dog, and while it eats, gently pull on the leash and call its name. Reward the dog when it comes. This teaches the dog that your command hold weight, even when it’s distracted.
          </li>
          <li>
            <strong>Introducing an Electronic Collar:</strong> This step is advanced and requires caution and expertise. It is not recommended without guidance from a professional dog trainer. The idea is to use the electronic collar as a <strong>digital leash</strong>, providing a mild reminder (vibration or sound) if the dog does not respond to the verbal command.
          </li>
          <li>
            <strong>Testing in Real-Life Situations:</strong> Once the dog reliably comes when called in a controlled environment, test it in real-life situations with gradually increasing distractions). Always have a leash or electronic collar ready for safety.
          </li>
        </ol>

        <div class="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/watch?v=--PXr3edQDo" 
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
  name: "CallName",
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
.call-name {
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
  color: #BAE1F0;
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
  color: #BAE1F0;
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
  background-color: #BAE1F0;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  font-family: 'Montel', sans-serif;
}

.comment-btn:hover {
  background-color: #A3C8D7;
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
