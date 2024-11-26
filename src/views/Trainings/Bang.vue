<template>
    <div class="bang">
      <div class="title-box">
        <div class="page-title">bang</div>
        <div class="content">
          <h2>Teaching Your Dog to Play Bang!</h2>
          <ol>
            <li>
              <strong>Start with the Dog in a Lying Position:</strong> First, place the dog in a lying position. You can lure them into this position or gently push them until their rear end touches the ground.
            </li>
            <li>
              <strong>Tip the Dog onto Its Side:</strong> Gently push the dog's side until they roll onto their side. It is important that the dog is lying on their side with their legs stretched out.
            </li>
            <li>
              <strong>Lower the Dog's Head:</strong> Gently lift and pull the dog's head backward until it touches the ground.
            </li>
            <li>
              <strong>Reward the Dog:</strong> Once the dog is in the desired position (on its side with its head touching the ground), reward them with a treat and praise.
            </li>
            <li>
              <strong>Repeat Steps 2-4:</strong> Repeat the previous steps to help the dog associate the reward with the <strong>bang</strong> position.
            </li>
            <li>
              <strong>Introduce the Command Bang:</strong> Once the dog reliably assumes the <strong>bang</strong> position, introduce the verbal command <strong>bang</strong>. Say <strong>bang</strong> while gently guiding the dog into the desired position.
            </li>
            <li>
              <strong>Use a Hand Signal:</strong> Along with the verbal command, you can also use a hand signal, simulating a gunshot.
            </li>
            <li>
              <strong>Gradually Remove Physical Contact:</strong> As the dog understands the trick, gradually reduce physical contact. The goal is for the dog to eventually perform the trick only with the verbal command and hand signal.
            </li>
            <li>
              <strong>Practice from Different Positions:</strong> Once the dog masters the <strong>bang</strong> from the lying position, start practicing from other positions, such as standing.
            </li>
          </ol>
  
          <div class="video-container">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/watch?v=ghL7Z-0kXgU" 
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
    name: "Bang",
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
  .bang {
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
  