<script setup>
import ProgressBar from './components/ProgressBar.vue';


export default {
  methods: {
    currentYearDay() {
      const current = new Date();
      const start = new Date(current.getFullYear(), 0, 0);
      const diff = (current - start) + ((start.getTimezoneOffset() - current.getTimezoneOffset()) * 60 * 1000);
      const oneDay = 1000 * 60 * 60 * 24;
      const yearDay = Math.floor(diff / oneDay);

      const year = current.getFullYear()
      const daysInYear = ((year % 4 === 0 && year % 100 > 0) || year %400 == 0) ? 366 : 365;

      const yearPerc = (yearDay/daysInYear) * 100;
      return yearPerc;
    },

    currentMonthDay() {
      const current = new Date();
      const currentYear = date.getFullYear();
      const currentMonth = date.getMonth() + 1;

      const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();

      const monthDay = current.getDate()

      const monthPerc = (monthDay/daysInMonth) * 100
      return monthPerc;
    }
  }
}

</script>

<template>
  <ProgressBar label="Year" maxN="365 days" perc={{ currentYearDay() }}/>
  <ProgressBar label="Month" maxN="30 days"/>
  <ProgressBar label="Week" maxN="Saturday"/>
  <ProgressBar label="Day" maxN="24h"/>
  <ProgressBar label="Hour" maxN="60m"/>
  <ProgressBar label="Minute" maxN="60s"/>
</template>

<style scoped>

</style>
