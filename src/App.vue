<script setup>
import ProgressBar from './components/ProgressBar.vue'
</script>

<template>
  <ProgressBar label="Year" maxN="365 days"/>
  <ProgressBar label="Month" maxN="30 days"/>
  <ProgressBar label="Week" maxN="Saturday"/>
  <ProgressBar label="Day" maxN="24h"/>
  <ProgressBar label="Hour" maxN="60m"/>
  <ProgressBar label="Minute" maxN="60s"/>
</template>

<style scoped>

</style>
