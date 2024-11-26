<template>
    <div class="frisbee-training">
      <div class="title-box">
        <div class="page-title">frisbee</div>
        <div class="content">
          <h2>Teaching Your Dog to Play Frisbee</h2>
          <ol>
            <li>
              <strong>Ignite Interest in the Frisbee:</strong> Start with two frisbees to grab your dog’s attention, using one to entice them while they play with the other. Drag the frisbee on the ground to encourage the dog to chase and catch it. When your dog catches the frisbee, engage in a tug-of-war game to make it more fun and exciting. Show your dog the second frisbee while they are playing with the first, encouraging them to drop it and catch the second. 
            </li>
            <li>
              <strong>Teach Your Dog to Take the Frisbee:</strong> Use two frisbees and the “take” technique to teach your dog to grab the frisbee. Hold one frisbee still and encourage your dog to take it. Reward your dog with praise and play when they successfully take the frisbee.
            </li>
            <li>
              <strong>First Aerial Catch:</strong> Once your dog masters grabbing the frisbee, move to holding the frisbee in the air. Hold the frisbee near the dog’s mouth, encouraging them to grab it. Gradually increase the distance the frisbee hovers as your dog progresses. Do not throw the frisbee immediately, as the dog is still learning the concept of catching it mid-air. Celebrate every attempt, regardless of whether the catch is successful.
            </li>
            <li>
              <strong>Running in Circles:</strong> Teach your dog to run in a circle around you before throwing the frisbee. This allows the dog to spot the frisbee in flight and prepare to catch it while running. Use the frisbee as a lure to guide the dog into running the circle, and reward them when they complete the circle successfully. Once your dog masters running in a circle, combine it with the aerial catch.
            </li>
            <li>
              <strong>Advanced Tricks:</strong> Once your dog has mastered the basic techniques, you can start teaching them advanced frisbee tricks. This could include multiple catches, jumping off your body, mid-air flips, and other fun moves. Be creative and have fun designing new tricks with the frisbee.
            </li>
          </ol>
  
          <div class="video-container">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/watch?v=HPGkH3Dm7Yo" 
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
    name: "FrisbeeTraining",
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
  .frisbee-training {
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
  