<script setup>
import ProgressBar from './components/ProgressBar.vue';

function currentYearDay() {
  const current = new Date();
  const start = new Date(current.getFullYear(), 0, 0);
  const diff =
    current -
    start +
    (start.getTimezoneOffset() - current.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  const yearDay = Math.floor(diff / oneDay);

  const year = current.getFullYear();
  const daysInYear =
    (year % 4 === 0 && year % 100 > 0) || year % 400 == 0 ? 366 : 365;

  const yearPerc = yearDay / daysInYear;
  return yearPerc;
}

function currentMonthDay() {
  const current = new Date();
  const currentYear = current.getFullYear();
  const currentMonth = current.getMonth() + 1;
  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();

  const monthDay = current.getDate();

  const monthPerc = monthDay / daysInMonth;
  return monthPerc;
}

function currentWeekday() {
  const current = new Date();
  const currentDay = current.getDay() + 1;
  const weekPerc = currentDay / 7;
  return weekPerc;
}

function currentDayHour() {
  const current = new Date();
  const currentHour = current.getHours();
  const currentMinute = current.getMinutes();
  const totalMinute = currentHour * 60 + currentMinute;

  const dayPerc = totalMinute / 1440;
  return dayPerc;
}

function currentHour() {
  const current = new Date();
  const currentMinute = current.getMinutes();

  const hourPerc = currentMinute / 60;
  return hourPerc;
}

function currentMinute() {
  const current = new Date();
  const currentSecond = current.getSeconds();

  const minutePerc = currentSecond / 60;
  return minutePerc;
}
</script>

<template>
  <ProgressBar title="Year" end-label="365 days" :percent="currentYearDay()" />
  <ProgressBar title="Month" end-label="30 days" :percent="currentMonthDay()" />
  <ProgressBar title="Week" end-label="Saturday" :percent="currentWeekday()" />
  <ProgressBar title="Day" end-label="24h" :percent="currentDayHour()" />
  <ProgressBar title="Hour" end-label="60m" :percent="currentHour()" />
  <ProgressBar title="Minute" end-label="60s" :percent="currentMinute()" />
</template>

<style scoped></style>
