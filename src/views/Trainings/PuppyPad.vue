<template>
    <div class="puppy-pad">
      <div class="title-box">
        <div class="page-title">puppy pad</div>
        <div class="content">
          <h2>Teaching Your Puppy to Use a Puppy Pad</h2>
          <ol>
            <li>
              <strong>Start as Soon as Possible:</strong> The sooner you begin training, the better. Puppies have small bladders and drink a lot of water, so it's essential to establish a routine right away.
            </li>
            <li>
              <strong>Observe Your Puppy:</strong> Pay attention to the spots where your puppy tends to pee. These are ideal locations for setting up the puppy pad.
            </li>
            <li>
              <strong>Place the Puppy Pad in Strategic Locations:</strong> Place the puppy pad in areas where your puppy has already shown interest in peeing. Common spots include the bedroom and living room.
            </li>
            <li>
              <strong>Attract the Puppy to the Pad:</strong> Use treats to lure your puppy onto the puppy pad. Once your puppy steps onto the pad, give it a treat.
            </li>
            <li>
              <strong>Positive Reinforcement:</strong> When your puppy goes potty on the pad, reward it immediately with a treat and praise. This helps your puppy associate the pad with a positive experience.
            </li>
            <li>
              <strong>Patience and Consistency:</strong> Patience is key for successful training. Puppies learn at their own pace, and accidents are normal.
            </li>
            <li>
              <strong>Avoid Aggression:</strong> Never punish your puppy for accidents. Shoving its nose into the pee or using any form of physical punishment is counterproductive and can damage your relationship with your puppy.
            </li>
          </ol>
  
          <div class="video-container">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/watch?v=5dLMpI_kCJY" 
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
    name: "PuppyPadTraining",
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
  .puppy-pad {
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
  