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

      <button v-if="statusAdmin" @click="toggleForm" class="btn btn-outline-dark">Add news</button>

      <div v-if="showForm">
        <h2>Create news</h2>
        <form @submit.prevent="addNews">
          <div class="mb-3">
            <label for="titleInput" class="form-label">Title:</label>
            <input type="text" id="titleInput" class="form-control" v-model="newsRequest.title" required>
          </div>

          <div class="mb-3">
            <label for="dateTimeInput" class="form-label">Event date/time:</label>
            <!--                        <vue-flatpickr v-model="newNewsDateTime" type="text"></vue-flatpickr>-->
            <input type="datetime-local" id="dateTimeInput" class="form-control" v-model="newsRequest.eventDate" required>
          </div>

          <div class="mb-3">
            <label for="newsInput" class="form-label">Content:</label>
            <textarea id="newsInput" class="form-control" rows="5" v-model="newsRequest.content" required></textarea>
          </div>

          <button @click="sendNewNewsRequest" type="submit" class="btn btn-outline-dark">Add</button>
        </form>
      </div>

    </div>
  </div>

</template>

<script>


import VueFlatpickr from "vue-flatpickr-component";


export default {
  name: "NewsView",
  components: {VueFlatpickr},

  data() {
    return {
      statusAdmin: false,
      roleName: sessionStorage.getItem('roleName'),
      newsList: [],
      showForm: false,
      newsRequest: {
        userId: sessionStorage.getItem('userId'),
        content: "",
        title: "",
        eventDate: "",
      }
    };
  },
  methods: {

    sendNewNewsRequest() {
      this.$http.post("/news/create", this.newsRequest
      ).then(response => {

      }).catch(error => {

      });
    },

    checkAdminStatus() {
      if (this.roleName === 'admin') {
        this.statusAdmin = !this.statusAdmin;
      }
    },

    toggleForm() {
      this.showForm = !this.showForm;
    },

    addNews() {
      if (this.newsRequest.content.trim() !== "" &&
          this.newsRequest.title.trim() !== "" &&
          this.newsRequest.eventDate.trim() !== "") {
        const newNews = {
          title: this.newsRequest.title,
          dateTime: this.newsRequest.eventDate,
          text: this.newsRequest.content,
        };
        this.newsList.push(newNews);
        this.newsRequest.title = "";
        this.newsRequest.eventDate = "";
        this.newsRequest.content = "";
        this.showForm = false;
      }
    },
  },
  mounted() {
    this.checkAdminStatus()
  }

}
</script>