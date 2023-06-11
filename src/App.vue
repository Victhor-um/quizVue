<template>
  <div class="ctr">
    <quizQuestions
      v-if="questionsAnswered < data.questions.length"
      :questions="data.questions"
    />
    <quizResult v-else />
    <button type="button" class="reset-btn">Reset</button>
  </div>
</template>

<script setup>
import quizQuestions from '@/components/quizQuestions.vue';
import quizResult from '@/components/quizResult.vue';
import { ref } from 'vue';
import { data } from '@/data.js';

const questionsAnswered = ref(0);
</script>

<style lang="scss" scoped></style>
