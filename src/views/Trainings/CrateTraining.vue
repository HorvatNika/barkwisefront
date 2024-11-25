<template>
    <div class="crate-training">
      <div class="title-box">
        <div class="page-title">crate training</div>
        <div class="content">
          <h2>Crate Training for Your Puppy</h2>
          <ol>
            <li>
              <strong>Familiarization:</strong> The first step is to introduce the dog to the crate. Place the crate in a visible spot in your home where the dog spends time. Leave the door open and add soft blankets, toys, and treats. Do not force the dog inside, let it explore on its own. Praise and reward it when it shows interest in the crate.
            </li>
            <li>
              <strong>Positive Associations:</strong> Toss treats into the crate when the dog is nearby. Use the word <strong>good</strong> or click the clicker when it enters the crate to get the treat. This helps the dog associate the crate with positive experiences.
            </li>
            <li>
              <strong>Offer Game:</strong> Hold a treat in your hand and wait for the dog to show interest in the crate. When it approaches, reward it with the treat. Over time, try placing the treat inside the crate and let the dog enter to get it.
            </li>
            <li>
              <strong>Feeding:</strong> Begin feeding the dog in the crate with the door open. Gradually close the door while it eats, first for short periods, then for longer durations. Be careful not to force the door shut if the dog seems scared.
            </li>
            <li>
              <strong>Short Stays:</strong> Close the dog in the crate for short periods while you are at home. Start with a few minutes and gradually increase the time. Provide toys and chewables inside the crate. Ignore whining or barking at first, unless it’s in panic.
            </li>
            <li>
              <strong>Different Locations:</strong> Move the crate around the house to different rooms and practice short stays in each location. The goal is for the dog to learn that the crate is its safe space, no matter where it is.
            </li>
            <li>
              <strong>Calm Exits:</strong> Do not open the crate door when the dog is whining or barking. Wait for it to calm down and reward it when it exits the crate calmly.
            </li>
            <li>
              <strong>Freedom:</strong> Once the dog is reliable in the crate, gradually increase the time spent outside of it, starting with a controlled environment like one room. Provide interesting activities and supervise it.
            </li>
          </ol>
  
          <div class="video-container">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/watch?v=wxJXJes0_pM" 
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
    name: "CrateTraining",
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
  .crate-training {
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
  