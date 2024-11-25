<template>
    <div class="scheduled-potty">
      <div class="title-box">
        <div class="page-title">potty training</div>
        <div class="content">
          <h2>Scheduled Potty Training for Your Puppy</h2>
          <ol>
            <li>
              <strong>Start Early:</strong> The earlier you start, the easier it will be. Ideally, begin as soon as you bring your puppy home. Border collies learn quickly, so early training is key.
            </li>
            <li>
              <strong>Establish a Routine:</strong> Dogs thrive on routine. Take your puppy outside in the morning, after meals, after naps, and before bed. Consistency will help it understand when it's time to potty.
            </li>
            <li>
              <strong>Positive Reinforcement:</strong> Every time your puppy goes potty outside, praise it and give it a treat. This will help it associate pottying outside with positive feelings and rewards.
            </li>
            <li>
              <strong>Watch Closely:</strong> Border collies are quick and clever, so it's important to watch them closely during training. If you notice your puppy sniffing or circling, it’s a sign that it needs to go outside. Take it out immediately to avoid accidents in the house.
            </li>
            <li>
              <strong>Cage Training:</strong> Cage training can be helpful. Dogs don’t like to potty in their sleeping area, so keeping your puppy in a crate when you can’t supervise can help prevent accidents. Choose a crate that’s big enough for the puppy to stand, turn around, and lie comfortably.
            </li>
            <li>
              <strong>Consistent Command:</strong> Pick a command for pottying, like <strong>go potty</strong>. Use the same command every time you take your puppy outside. Over time, the puppy will associate the command with pottying and will be able to do it on command.
            </li>
            <li>
              <strong>Patience:</strong> Potty training takes time and patience. There will be accidents, but it’s important to remain consistent and positive. Praise your puppy when it goes outside, and never punish it for accidents indoors.
            </li>
            <li>
              <strong>Proper Cleaning:</strong> If an accident happens indoors, it’s important to clean it properly to remove any smells that could encourage the puppy to potty in the same spot again. Use an enzymatic cleaner specifically designed for pets and thoroughly clean the area.
            </li>
            <li>
              <strong>Monitor Water Intake:</strong> Monitor how much your puppy drinks, especially in the evening. Limit water intake before bedtime to avoid late-night potty breaks. This will also help it learn to hold its bladder for longer periods.
            </li>
          </ol>
  
          <div class="video-container">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/watch?v=qntFDpcxtIc" 
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
    name: "ScheduledPotty",
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
  .scheduled-potty {
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
  