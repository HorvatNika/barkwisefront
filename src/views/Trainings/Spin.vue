<template>
    <div class="spin">
      <div class="title-box">
        <div class="page-title">spin</div>
        <div class="content">
          <h2>Teaching Your Dog to Spin</h2>
          <ol>
            <li>
              <strong>Lure Your Dog with Food:</strong> Hold pieces of food in your hand and make sure your dog is standing. Hold your hand at the level of your dog’s nose and slowly move it in a circle. The goal is for the dog to follow your hand and turn in a circle. Be careful not to say any commands initially as the dog doesn’t know what to expect yet.
            </li>
            <li>
              <strong>Encourage Spinning:</strong> While moving your hand, try to keep it at nose level to prevent the dog from sitting down. When the dog completes the spin, say <strong>good boy</strong> or any other praise word and reward them with food.
            </li>
            <li>
              <strong>Repeat the Process:</strong> Continue practicing the spin with the lure until your dog starts following your hand more easily. In the beginning, move your hand very slowly so the dog can easily follow the food. As the dog becomes more skilled, you can start moving your hand faster.
            </li>
            <li>
              <strong>Introduce a Command:</strong> Once your dog can easily follow your hand and spin, you can start introducing a command like <strong>left</strong> or <strong>right</strong>. Hold the food in your hand, say the command, and then move your hand in the desired direction. It’s important to say the command a second before you start moving your hand.
            </li>
            <li>
              <strong>Practice Both Sides:</strong> Practice spinning to both the left and right sides using the appropriate commands.
            </li>
            <li>
              <strong>Start Fading the Lure:</strong> Once your dog reliably follows the command, begin gradually fading the food lure. You can do this by holding the food in your hand but not showing it to the dog. If the dog successfully performs the spin, reward them with the food you’ve hidden.
            </li>
            <li>
              <strong>Practice Without Food in Your Hand:</strong> When your dog can spin on command without seeing the food in your hand, you can begin practicing without food in your hand. Always have some food ready to reward the dog when they successfully complete the spin.
            </li>
            <li>
              <strong>Fade the Hand Signal:</strong> Eventually, you can try removing the hand signal and only give the verbal command.
            </li>
            <li>
              <strong>Be Patient and Consistent:</strong> Learning new tricks takes time and patience. Some dogs will learn faster than others. It's important to be consistent with your training and reward your dog for every success, no matter how small.
            </li>
          </ol>
  
          <div class="video-container">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/EjYsuEjEZL4" 
              frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
          
          <p><strong>Some dogs may not like turning in circles. If your dog shows signs of discomfort, stop the training and try a different method.</strong></p>
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
    name: "Spin",
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
  .spin {
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
  