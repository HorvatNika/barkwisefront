<template>
    <div class="weave">
      <div class="title-box">
        <div class="page-title">weave</div>
        <div class="content">
          <h2>Teaching Your Dog the Leg Weave Trick</h2>
          <ol>
            <li>
              <strong>Teach the Hand Target Skill:</strong> This is the foundation for the "leg weave". The dog must learn to touch your hand with their nose on cue.
              <ul>
                <li>Start by holding a treat between your thumb and index finger and showing it to your dog. When the dog touches your hand, say <strong>yes</strong> and reward them with the treat.</li>
                <li>Gradually hide the food in your fist but still reward the dog when they touch your hand.</li>
                <li>Practice the <strong>hand target</strong> with your hand in different positions so the dog learns that the goal is to touch your hand, no matter where it is.</li>
              </ul>
            </li>
            <li>
              <strong>Positioning Your Dog:</strong> Have your dog sit in front of you, and spread your legs apart.
            </li>
            <li>
              <strong>Drop Your Right Hand:</strong> Place both hands behind your back and then drop your right hand between your legs.
            </li>
            <li>
              <strong>Lure Your Dog Through Your Legs:</strong> When the dog touches your right hand, pull it through your left leg and give the dog a treat.
            </li>
            <li>
              <strong>Repeat with Left Hand:</strong> Return both hands behind your back and drop your left hand between your legs. When the dog touches your left hand, pull it through your right leg and reward them.
            </li>
            <li>
              <strong>Practice Without Food:</strong> After your dog understands the concept, start practicing without food in your hand. Use the <strong>hand target</strong> only to guide them through your legs.
            </li>
            <li>
              <strong>Be Patient and Consistent:</strong> As with any dog training, patience and consistency are key. Don’t get discouraged if your dog takes time to understand the trick.
            </li>
          </ol>
  
          <div class="video-container">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/watch?v=vWI4OGHVuZM" 
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
    name: "Weave",
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
  .weave {
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
  