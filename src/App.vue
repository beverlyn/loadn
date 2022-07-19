<script setup>
import { reactive } from 'vue';
import ProgressBar from './components/ProgressBar.vue';

function getDaysInYear(date) {
  const year = date.getFullYear();
  return (year % 4 === 0 && year % 100 > 0) || year % 400 == 0 ? 366 : 365;
}

function getDaysInMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

function getYearProgress(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff =
    date -
    start +
    (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  const yearDay = Math.floor(diff / oneDay);

  return yearDay / getDaysInYear(date);
}

const getMonthProgress = (date) => date.getDate() / getDaysInMonth(date);
const getWeekProgress = (date) => (date.getDay() + 1) / 7;
const getDayProgress = (date) => (date.getHours() * 60 + date.getMinutes()) / 1440;
const getHourProgress = (date) => date.getMinutes() / 60;
const getMinuteProgress = (date) => date.getSeconds() / 60;

const date = new Date();
const progress = reactive({
  year: getYearProgress(date),
  month: getMonthProgress(date),
  week: getWeekProgress(date),
  day: getDayProgress(date),
  hour: getHourProgress(date),
  minute: getMinuteProgress(date),

  totalYearDays: getDaysInYear(date),
  totalMonthDays: getDaysInMonth(date),
});

setInterval(() => {
  const date = new Date();
  console.log(date);

  progress.year = getYearProgress(date);
  progress.month = getMonthProgress(date);
  progress.week = getWeekProgress(date);
  progress.day = getDayProgress(date);
  progress.hour = getHourProgress(date);
  progress.minute = getMinuteProgress(date);

  progress.yearDays = getDaysInYear(date);
  progress.monthDays = getDaysInMonth(date);
}, 1000);
</script>

<template>
  <ProgressBar title="Year" :end-label="progress.yearDays" :percent="progress.year" />
  <ProgressBar title="Month" :end-label="progress.monthDays" :percent="progress.month" />
  <ProgressBar title="Week" end-label="Saturday" :percent="progress.week" />
  <ProgressBar title="Day" end-label="24h" :percent="progress.day" />
  <ProgressBar title="Hour" end-label="60m" :percent="progress.hour" />
  <ProgressBar title="Minute" end-label="60s" :percent="progress.minute" />
</template>

<style scoped></style>
