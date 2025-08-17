<template>
  <div class="call-name">
    <div class="title-box">
      <div class="page-title">call name</div>
      <div class="content">
        <h2>Teaching Your Dog to Come When Called</h2>
        <ol>
          <li><strong>Start in a Safe Environment:</strong> Practice in a fenced yard or on a long leash to prevent the dog from running away.</li>
          <li><strong>Charge the Dog’s Name with Meaning:</strong> Start by tossing a piece of food to the dog. After it eats it, call its name. As the dog comes back, mark the positive response with a clicker or the word <strong>yes</strong>. When the dog approaches, give it 4-5 pieces of food.</li>
          <li><strong>Make Coming Back Worthwhile:</strong> The goal is to help the dog understand that coming to you brings rewards. Give it more treats when it returns than when it leaves you.</li>
          <li><strong>Short and Intense Sessions:</strong> Practice in short sessions, ranging from 30 seconds to 2-3 minutes, several times a day. This will keep the dog motivated and prevent boredom.</li>
          <li><strong>Introduce Limited Return:</strong> Have someone help you hold the dog in a sitting position while you move a few meters away. When you're ready, have the helper release the dog as you call its name. The dog will <strong>launch</strong> toward you. Repeat this exercise several times.</li>
          <li><strong>Death Triangle:</strong> Have two people stand in a triangle with you. While the dog is with one person, the other person calls it by name. When it reaches them, reward the dog. Then, have the third person call the dog’s name. This teaches the dog to pay attention to who is calling it.</li>
          <li><strong>Using a Leash:</strong> At this stage, use a regular collar and leash. Throw food to the dog, and while it eats, gently pull on the leash and call its name. Reward the dog when it comes. This teaches the dog that your command hold weight, even when it’s distracted.</li>
          <li><strong>Introducing an Electronic Collar:</strong> This step is advanced and requires caution and expertise. It is not recommended without guidance from a professional dog trainer. The idea is to use the electronic collar as a <strong>digital leash</strong>, providing a mild reminder (vibration or sound) if the dog does not respond to the verbal command.</li>
          <li><strong>Testing in Real-Life Situations:</strong> Once the dog reliably comes when called in a controlled environment, test it in real-life situations with gradually increasing distractions. Always have a leash or electronic collar ready for safety.</li>
        </ol>

        <div class="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/--PXr3edQDo" 
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
  name: "Recall",
  data() {
    return {
      comment: '',
      comments: [],
      componentId: 'Recall',
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
.call-name {
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
