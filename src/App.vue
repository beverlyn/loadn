<script setup>
import { reactive } from 'vue';
import ProgressBar from './components/ProgressBar.vue';

function currentYearDay(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff =
    date -
    start +
    (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  const yearDay = Math.floor(diff / oneDay);

  const year = date.getFullYear();
  const daysInYear =
    (year % 4 === 0 && year % 100 > 0) || year % 400 == 0 ? 366 : 365;

  return yearDay / daysInYear;
}

function currentMonthDay(date) {
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
  const monthDay = date.getDate();

  return monthDay / daysInMonth;
}

function currentWeekday(date) {
  return (date.getDay() + 1) / 7;
}

function currentDayHour(date) {
  const currentHour = date.getHours();
  const currentMinute = date.getMinutes();
  const totalMinute = currentHour * 60 + currentMinute;

  return totalMinute / 1440;
}

const getHourProgress = (date) => date.getMinutes() / 60;
const getMinuteProgress = (date) => date.getSeconds() / 60;

const date = new Date();
const progress = reactive({
  minute: getMinuteProgress(date),
  hour: getHourProgress(date),
});

setInterval(() => {
  const date = new Date();
  console.log(date);
  progress.minute = getMinuteProgress(date);
  progress.hour = getHourProgress(date);
}, 1000);
</script>

<template>
  <ProgressBar
    title="Year"
    end-label="365 days"
    :percent="currentYearDay(date)"
  />
  <ProgressBar
    title="Month"
    end-label="30 days"
    :percent="currentMonthDay(date)"
  />
  <ProgressBar
    title="Week"
    end-label="Saturday"
    :percent="currentWeekday(date)"
  />
  <ProgressBar title="Day" end-label="24h" :percent="currentDayHour(date)" />
  <ProgressBar title="Hour" end-label="60m" :percent="progress.hour" />
  <ProgressBar title="Minute" end-label="60s" :percent="progress.minute" />
</template>

<style scoped></style>
