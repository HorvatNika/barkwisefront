<template>
    <div class="find-keys">
      <div class="title-box">
        <div class="page-title">find keys</div>
        <div class="content">
          <h2>Teaching Your Dog to Find Keys</h2>
          <ol>
            <li>
              <strong>Introducing the Keys:</strong> Start by introducing the dog to the smell and appearance of the keys. Hold the keys in front of the dog and let it sniff and touch them. When it does, immediately reward with a treat and a marker word like <strong>bravo</strong> or <strong>yes</strong>. This step will create a positive association with the keys.
            </li>
            <li>
              <strong>Throwing the Keys:</strong> Toss the keys a short distance so the dog can easily see where they land. When the dog goes to the keys and touches them with its nose, use the marker word and reward with a treat. By repeating this step, the dog will start to understand that touching the keys brings a reward.
            </li>
            <li>
              <strong>Introducing the Command:</strong> Once the dog reliably runs to the keys after you throw them, introduce the command. As you throw the keys, say <strong>find</strong> or <strong>find the keys</strong>. Repeat this step, throwing the keys and saying the command, and reward the dog with a marker word and treat when it finds them. It’s important to say the command before the dog finds the keys so it associates the command with the action.
            </li>
            <li>
              <strong>Hiding the Keys:</strong> After the dog understands the connection between the command and finding the keys, start hiding them. Initially, hide them in easy-to-reach places, like under a pillow or behind a chair leg. Say <strong>find</strong> and let the dog search. When it finds the keys, marker word and treat! Repeating this step will help the dog learn that the command <strong>find</strong> means searching for the keys, no matter where they are hidden.
            </li>
            <li>
              <strong>Increasing the Difficulty:</strong> As the dog progresses, gradually increase the difficulty of hiding the keys. Place them under a blanket, in a box, or behind a door. The goal is for the dog to learn to use its nose to find the keys, even when they’re not in plain sight.
            </li>
            <li>
              <strong>Introducing the Indication:</strong> When the dog finds the keys, instead of rewarding immediately, teach it to sit or lie down next to the keys. Only after it performs that action, use the marker word and reward. This step ensures that the dog stays next to the keys and doesn't start playing with them.
            </li>
          </ol>
  
          <div class="video-container">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/sqjUJFHBV_8" 
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
    name: "FindKeys",
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
  .find-keys {
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
  