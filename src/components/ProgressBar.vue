<script setup>
defineProps({
  title: String,
  endLabel: String,
  percent: Number,
});
</script>

<template>
  <p class="title">
    {{ title }}
  </p>
  <div class="progress-bar">
    <div
      class="progress"
      :style="{
        width: percent * 100 + '%',
      }"
    />
  </div>
  <p class="end-label">
    {{ endLabel }}
  </p>
</template>

<style scoped>
.title {
  font-size: 16px;
  text-align: left;
}

.progress-bar {
  background-color: rgb(192, 192, 192);
  width: 100%;
}

.progress {
  background-color: rgb(116, 194, 92);
  color: white;
  padding: 1%;
  text-align: right;
  font-size: 20px;
}

.end-label {
  text-align: right;
  margin-top: 0px;
}
</style>
