<template>
  <time :title="toTitleDate(currentDate)" :datetime="currentDate">
    {{ formattedDate }}
  </time>
</template>

<script>
export default {
  props: {
    date: {
      type: Date,
      required: true,
    },
  },
  data() {
    return {
      formattedDate: '',
      currentDate: this.date,
    };
  },
  methods: {
    toTitleDate(date) {
      return date.toISOString();
    },
    updateFormattedDate() {
      const options = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Europe/Tallinn',
      };
      this.formattedDate = this.currentDate.toLocaleString('en-GB', options);
    },
  },
  computed: {
    updateTime() {
      setInterval(() => {
        this.currentDate = new Date();
        this.updateFormattedDate();
      }, 1000);
    },
  },
  watch: {
    date: 'updateFormattedDate',
  },
  created() {
    this.updateFormattedDate();
    this.updateTime;
  },
};
</script>
