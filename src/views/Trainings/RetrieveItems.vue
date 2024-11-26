<template>
    <div class="retrieve-items">
      <div class="title-box">
        <div class="page-title">retrieve items</div>
        <div class="content">
          <h2>Teaching Your Dog to Retrieve Items</h2>
          <ol>
            <li>
              <strong>Introduce the Object:</strong> Start with an item that is not too valuable, such as a blanket. Encourage your dog to show interest in the object by waving it, enticing it to nibble and play with it. The goal is for the dog to understand that it's okay to grab and carry the item.
            </li>
            <li>
              <strong>Encourage Fetching:</strong> Once your dog shows interest in the object, try placing it on the floor and encourage your dog to pick it up. Reward your dog with praise and a treat when it successfully picks up the item.
            </li>
            <li>
              <strong>Introduce Distance:</strong> Gradually increase the distance between you and your dog while encouraging it to bring the item to you. Start with a short distance and gradually increase it as your dog progresses.
            </li>
            <li>
              <strong>Encourage Returning:</strong> When your dog picks up the item, encourage it to run to you by moving in the opposite direction. Dogs love to chase, so they'll instinctively run toward you.
            </li>
            <li>
              <strong>Redirect Behavior:</strong> When your dog reaches you with the item, reward it with praise, play, or a treat. If the dog tends to chew or handle the item roughly, redirect it to a chew toy after retrieving the item.
            </li>
            <li>
              <strong>Generalize the Skill:</strong> Once your dog masters retrieving one item, repeat the process with different objects, such as slippers or a leash. This helps the dog understand the concept of retrieving different items.
            </li>
          </ol>
  
          <div class="video-container">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/watch?v=cdFka56hAtM" 
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
    name: "RetrieveItemsTraining",
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
  .retrieve-items {
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
  