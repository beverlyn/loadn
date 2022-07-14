<script setup>
defineProps({
  label: String,
  maxN: String,
  perc: String,
});
</script>

<template>
  <p class="label">
    {{ label }}
  </p>
  <div class="progressBar">
    <div class="progress">{{ perc }}</div>
  </div>
  <p class="maxN">
    {{ maxN }}
  </p>
</template>

<style scoped>
    .label {
        font-size: 20px;
        text-align: left;
    }
  
    .progressBar {
        background-color: rgb(192, 192, 192);
        width: 100%;
    }
  
    .progress {
        background-color: rgb(116, 194, 92);
        color: white;
        padding: 1%;
        text-align: right;
        font-size: 20px;
        width:80%;
    }

    .maxN {
      text-align: right;
      margin-top: 0px;
    }

</style>
