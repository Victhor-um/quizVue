<template>
  <div class="result">
    <div class="title">
      {{ results[resultIndex].title }} Total correct: {{ totalCorrect }}!
    </div>
    <div class="desc">{{ results[resultIndex].desc }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(['results', 'totalCorrect']);

const resultIndex = computed(() => {
  return props.results.findIndex((item) => {
    return item.min <= props.totalCorrect && item.max >= props.totalCorrect;
  });
});
</script>

<style lang="scss" scoped></style>
