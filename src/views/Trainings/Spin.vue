<template>
  <div class="spin">
    <div class="title-box">
      <div class="page-title">spin</div>
      <div class="content">
        <h2>Teaching Your Dog to Spin</h2>
        <ol>
          <li><strong>Lure Your Dog with Food:</strong> Hold pieces of food in your hand and make sure your dog is standing. Hold your hand at the level of your dog’s nose and slowly move it in a circle. The goal is for the dog to follow your hand and turn in a circle. Be careful not to say any commands initially as the dog doesn’t know what to expect yet.</li>
          <li><strong>Encourage Spinning:</strong> While moving your hand, try to keep it at nose level to prevent the dog from sitting down. When the dog completes the spin, say <strong>good boy</strong> or any other praise word and reward them with food.</li>
          <li><strong>Repeat the Process:</strong> Continue practicing the spin with the lure until your dog starts following your hand more easily. In the beginning, move your hand very slowly so the dog can easily follow the food. As the dog becomes more skilled, you can start moving your hand faster.</li>
          <li><strong>Introduce a Command:</strong> Once your dog can easily follow your hand and spin, you can start introducing a command like <strong>left</strong> or <strong>right</strong>. Hold the food in your hand, say the command, and then move your hand in the desired direction. It’s important to say the command a second before you start moving your hand.</li>
          <li><strong>Practice Both Sides:</strong> Practice spinning to both the left and right sides using the appropriate commands.</li>
          <li><strong>Start Fading the Lure:</strong> Once your dog reliably follows the command, begin gradually fading the food lure. You can do this by holding the food in your hand but not showing it to the dog. If the dog successfully performs the spin, reward them with the food you’ve hidden.</li>
          <li><strong>Practice Without Food in Your Hand:</strong> When your dog can spin on command without seeing the food in your hand, you can begin practicing without food in your hand. Always have some food ready to reward the dog when they successfully complete the spin.</li>
          <li><strong>Fade the Hand Signal:</strong> Eventually, you can try removing the hand signal and only give the verbal command.</li>
          <li><strong>Be Patient and Consistent:</strong> Learning new tricks takes time and patience. Some dogs will learn faster than others. It's important to be consistent with your training and reward your dog for every success, no matter how small.</li>
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
            <li v-for="(comment, index) in comments" :key="comment._id">
              <div v-if="editIndex === index">
                <input 
                  v-model="editText" 
                  class="edit-input" 
                  placeholder="Edit your comment..."
                />
                <div class="edit-actions">
                  <button class="delete-entry-button" @click="updateComment(comment._id)">save</button>
                  <button class="delete-entry-button" @click="cancelEdit">cancel</button>
                </div>
              </div>
              <div v-else>
                <strong>{{ comment.author }}:</strong> {{ comment.text }}
                <div class="action-buttons" v-if="isOwnComment(comment)">
                  <button class="delete-entry-button" @click="startEdit(index, comment.text)">edit</button>
                  <button class="delete-entry-button" @click="deleteComment(comment._id)">delete</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Spin",
  data() {
    return {
      comment: '',
      comments: [],
      componentId: 'Spin',
      editIndex: null,
      editText: ''
    };
  },
  methods: {
    async submitComment() {
      if (!this.comment.trim()) return;
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const res = await axios.post(
          'https://barkwisebackend.onrender.com/comments',
          { text: this.comment.trim(), componentId: this.componentId },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        this.comments.push(res.data.comment);
        this.comment = '';
      } catch (err) {
        console.error('Failed to submit comment:', err);
      }
    },

    async fetchComments() {
      try {
        const response = await axios.get(`https://barkwisebackend.onrender.com/comments?componentId=${this.componentId}`);
        this.comments = response.data.filter(c => c.componentId === this.componentId);
      } catch (err) {
        console.error("Failed to fetch comments:", err);
      }
    },

    isOwnComment(comment) {
      const user = JSON.parse(localStorage.getItem('user'));
      return user && (user.name === comment.author || user.email === comment.author);
    },

    startEdit(index, text) {
      this.editIndex = index;
      this.editText = text;
    },

    cancelEdit() {
      this.editIndex = null;
      this.editText = '';
    },

    async updateComment(_id) {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const res = await axios.put(
          `https://barkwisebackend.onrender.com/comments/${_id}`,
          { text: this.editText },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (res.data?.comment?._id) {
          await this.fetchComments();
          this.cancelEdit();
        }
      } catch (err) {
        console.error("Failed to update comment:", err);
      }
    },

    async deleteComment(id) {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        await axios.delete(`https://barkwisebackend.onrender.com/comments/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        this.comments = this.comments.filter(c => c._id !== id);
      } catch (err) {
        console.error("Failed to delete comment:", err);
      }
    }
  },

  mounted() {
    this.fetchComments();
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
  margin-bottom: 0.5rem;
}

.edit-input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  font-family: 'Century Gothic', sans-serif;
  border: 1px solid #ddd;
  color: #5F5F5F;
  margin-bottom: 0.3rem;
  box-sizing: border-box;
}

.comment-box:focus,
.edit-input:focus {
  outline: none; 
}

.comment-btn {
  background-color: #EDD9B7;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 0.5rem;
  font-family: 'Montel', sans-serif;
}

.comment-btn:hover {
  background-color: #d5be9d;
}

.delete-entry-button {
  font-family: 'ChunkyRetro', sans-serif;
  font-size: 25px;
  color: #5F5F5F;
  background: none;
  border: none;
  cursor: pointer;
  opacity: 80%;
  padding: 0 0.25rem;
}

.action-buttons {
  display: inline-flex;
  margin-left: 0.5rem;
  vertical-align: middle;
  margin-top: 0.35rem;
}

.edit-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 0.35rem;
  margin-left: 0.5rem;
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
