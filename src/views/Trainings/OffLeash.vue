<template>
    <div class="off-leash">
      <div class="title-box">
        <div class="page-title">off leash</div>
        <div class="content">
          <h2>Preparing Your Dog for Off-Leash Walking</h2>
          <ol>
            <li>
              <strong>Achieving Perfect Leash Control:</strong> Before considering off leash walking, ensure your dog obeys commands perfectly while on a leash, such as walking by your side, sitting and staying, and responding to <strong>leave it</strong>. This ensures you have control even when the dog is not physically tethered to you.
            </li>
            <li>
              <strong>On-Leash Training as Preparation:</strong> The goal is for your dog to walk beside you regardless of the leash. Achieve this through consistent corrections when the dog tries to stray or pull, followed by praise and rewards when they stay by your side.
            </li>
            <li>
              <strong>Transitioning to a Dropped Leash:</strong> Once your dog reliably walks beside you on the leash, begin letting the leash trail on the ground while still holding it. This simulates off leash walking but allows for quick reaction if the dog attempts to wander.
            </li>
            <li>
              <strong>Fake Leash Removal:</strong> This is a crucial step before actual off leash walking. Pretend to remove the leash by making the sound of unclipping it but leave it attached. Reward the dog for staying by your side despite believing they are off leash. This teaches them not to associate leash removal with immediate freedom.
            </li>
            <li>
              <strong>Actual Leash Removal:</strong> Only attempt true off leash walking when your dog demonstrates exceptional control with the dropped leash and during fake leash removal. Start in a safe and controlled environment, such as a fenced yard or a dog park, to minimize risks from traffic or distractions.
            </li>
          </ol>
  
          <div class="video-container">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/watch?v=e4VXiqMK8is" 
              frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
  
          <div class="training-tips">
            <h3><strong>Important Notes:</strong></h3>
            <ul>
              <li>
                <strong>Safety First:</strong> Never let your dog off-leash near roads or in areas where they could harm themselves or others.
              </li>
              <li>
                <strong>Consistency and Patience:</strong> Training your dog for off-leash walking takes time, consistency, and patience. Be persistent in training and don’t give up if your dog doesn’t succeed right away.
              </li>
              <li>
                <strong>Leash Regulations:</strong> Check local leash laws. In some areas, off-leash walking may be prohibited.
              </li>
            </ul>
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
    name: "OffLeash",
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
  .off-leash {
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
  
  .training-tips ul {
    padding-left: 1.5rem;
    margin: 1rem 0;
  }
  
  .training-tips h3 {
    font-size: 1.5rem;
    margin-top: 2rem;
    font-weight: bold;
  }
  
  .training-tips li {
    margin-bottom: 1rem;
  }
  </style>
  