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
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: left;
}

.progress-bar {
  background-color: #aaa;
  width: 100%;
  height: 8px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #555;
  transition: width 1s ease-out;
}

.end-label {
  font-size: 12px;
  text-align: right;
  margin-top: 8px;
}
</style>
