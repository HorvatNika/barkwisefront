<template>
    <div class="place">
      <div class="title-box">
        <div class="page-title">place</div>
        <div class="content">
          <h2>Teaching Your Dog the Place Command</h2>
          <ol>
            <li>
              <strong>Introducing the Platform:</strong> Start by luring your dog onto the platform with a treat. When the dog places all four paws on the platform, mark the behavior with a <strong>yes</strong> or a clicker (if you're using one) and reward with a treat. Don’t expect the dog to stay on the platform for long initially, the goal is to help your dog associate the platform with positive experiences.
            </li>
            <li>
              <strong>Introducing the Place Command:</strong> Once your dog is comfortable with the platform, start using the <strong>place</strong> command while luring them onto it. Be sure to say the command before the dog steps onto the platform. Repeat this process until your dog begins to go to the platform independently upon hearing the command.
            </li>
            <li>
              <strong>Adding the Down Command:</strong> When your dog reliably goes to the platform on the <strong>place</strong> command, teach them to lie down on it. While your dog is on the platform, lure them into a lying position, mark the behavior with <strong>yes</strong> or a clicker, and reward. Over time, your dog will understand that <strong>place</strong> means going to the platform and lying down.
            </li>
            <li>
              <strong>Increasing Duration and Distance:</strong> Gradually increase the amount of time your dog stays on the platform before rewarding them. You can also increase the distance from which you give the <strong>place</strong> command. The ultimate goal is for your dog to remain on the platform until released with a <strong>free</strong> command.
            </li>
          </ol>
  
          <div class="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/watch?v=zyfz2ydi5g8"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
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
    name: "PlaceCommand",
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
  .place {
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
  