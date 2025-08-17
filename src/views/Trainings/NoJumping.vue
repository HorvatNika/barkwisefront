<template>
  <div class="no-jumping">
    <div class="title-box">
      <div class="page-title">no jumping</div>
      <div class="content">
        <h2>Teaching Your Dog Not to Jump</h2>
        <ol>
          <li><strong>Prevent Jumping:</strong> Attach a long leash to your dog to maintain control over their movements. If the dog tries to jump, step on the leash to restrict their movement. Avoid pushing or physically correcting the dog, as this can be counterproductive and encourage rough play.</li>
          <li><strong>Encourage Calm Behavior:</strong> Do not accidentally reward jumping by petting or verbally praising the dog while they are in the air. As soon as all four paws are on the ground, say <strong>good job</strong> or use a clicker (if you have one) and reward with a treat. Repeat this process every time the dog attempts to jump, rewarding only calm behavior.</li>
          <li><strong>Introduce the Off Command:</strong> Once the dog begins to understand that jumping is not rewarded, introduce a command such as <strong>off</strong>. Say the command as soon as you notice signs that the dog is about to jump. If the dog listens and stays on the ground, immediately reward them.</li>
          <li><strong>Gradually Increase Challenges:</strong> When the dog reliably responds to the <strong>off</strong> command in a calm environment, introduce distractions like toys, other people, or exciting situations. The goal is for the dog to ignore these distractions and remain calm, even when excited.</li>
        </ol>

        <div class="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/7P1DgDED23o" 
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
  name: "NoJumping",
  data() {
    return {
      comment: '',
      comments: [],
      componentId: 'NoJumping',
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
.no-jumping {
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
