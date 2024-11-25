<template>
    <div class="search">
      <div class="title-box">
        <div class="page-title">search</div>
        <div class="content">
          <h2>Teaching Your Dog to Search</h2>
          <ol>
            <li>
              <strong>Introducing the Scent:</strong> Before your dog starts actively searching, it’s important to familiarize it with the target scent. The source uses birch oil. Place a few drops of the oil in an open box along with something that strongly attracts the dog. Let the dog explore the box freely. The goal is for the dog, attracted by the motivator, to discover the scent of the oil. Reward the dog when it shows interest in the box with the scent and motivator.
            </li>
            <li>
              <strong>Searching in Boxes:</strong> Set up several open boxes in a room. Put the target scent (birch oil) in only one of them. At this stage, still use the motivator in the box with the scent. Let the dog explore the boxes. When it finds the box with the scent and motivator, reward it. After each successful search, change the arrangement of the boxes so that the dog has to actively use its nose to find the scent, rather than relying on visual cues or memory.
            </li>
            <li>
              <strong>Removing the Motivator:</strong> When the dog reliably finds the box with the scent and motivator, it’s time to gradually remove the motivator. The goal is for the dog to search for the scent itself, not the food. At this stage, place only the scent in one of the boxes. Let the dog search. When it finds the box with the scent, reward it. Although there’s no longer a motivator in the box, it’s important to reward the dog near the box to reinforce the connection between finding the scent and the reward.
            </li>
            <li>
              <strong>Outdoor Searching:</strong> Once the dog successfully finds the scent in boxes without a motivator, it’s time to move the training to an outdoor environment. Choose a calm location without too many distractions. Hide the scent (without the motivator) in a natural spot, such as under leaves, behind a rock, or by the base of a tree. Let the dog search. When it finds the scent, reward it. At this stage, it’s important to be patient and encourage the dog to explore.
            </li>
            <li>
              <strong>Introducing an Indication:</strong> At this stage, teach the dog to signal in a specific way when it has found the scent. The indication could be sitting, lying down, or barking next to the found scent. These details aren’t from your sources, but they are generally accepted practices in dog training. Choose an indication that is natural and easy for the dog to perform. When the dog finds the scent, encourage it to perform the indication next to the scent. Reward it when it does.
            </li>
          </ol>
  
          <div class="video-container">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/watch?v=-fwPCf4b9pE" 
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
    name: "Search",
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
  .search {
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
  