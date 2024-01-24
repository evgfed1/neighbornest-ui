<template>

  <div class="container-fluid">

    <div>
      <h1>News</h1>
      <ul>
        <li v-for="(newsItem, index) in newsList" :key="index">
          <div class="news-item">
            <h3>{{ newsItem.title }}</h3>
            <p class="datetime">{{ newsItem.dateTime }}</p>
            <p class="content">{{ newsItem.text }}</p>
          </div>
        </li>
      </ul>

      <button @click="toggleForm" class="btn btn-outline-dark">Add news</button>

      <div v-if="showForm">
        <h2>Create news</h2>
        <form @submit.prevent="addNews">
          <div class="mb-3">
            <label for="titleInput" class="form-label">Title:</label>
            <input type="text" id="titleInput" class="form-control" v-model="newNewsTitle" required>
          </div>

          <div class="mb-3">
            <label for="dateTimeInput" class="form-label">Date/time:</label>
            <input type="datetime-local" id="dateTimeInput" class="form-control" v-model="newNewsDateTime" required>
          </div>

          <div class="mb-3">
            <label for="newsInput" class="form-label">Content:</label>
            <textarea id="newsInput" class="form-control" rows="5" v-model="newNewsText" required></textarea>
          </div>

          <button type="submit" class="btn btn-outline-dark">Add</button>
        </form>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "NewsView",
  data() {
    return {
      newsList: [],
      showForm: false,
      newNewsText: "",
      newNewsTitle: "",
      newNewsDateTime: "",
    };
  },
  methods: {

n
    toggleForm() {
      this.showForm = !this.showForm;
    },

    addNews() {
      if (this.newNewsText.trim() !== "" &&
          this.newNewsTitle.trim() !== "" &&
          this.newNewsDateTime.trim() !== "") {
        const newNews = {
          title: this.newNewsTitle,
          dateTime: this.newNewsDateTime,
          text: this.newNewsText,
        };
        this.newsList.push(newNews);
        this.newNewsTitle = "";
        this.newNewsDateTime = "";
        this.newNewsText = "";
        this.showForm = false;
      }
    },
  },

}
</script>



