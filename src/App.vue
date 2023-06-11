<template>
  <div class="ctr">
    <Transition name="fade" mode="out-in">
      <quizQuestions
        v-if="questionsAnswered < data.questions.length"
        :questions="data.questions"
        :questionsAnswered="questionsAnswered"
        @question-answered="questionAnswered"
      />
      <quizResult v-else :results="data.results" :totalCorrect="totalCorrect" />
    </Transition>
    <button
      type="button"
      class="reset-btn"
      @click.prevent="reset"
      v-if="questionsAnswered === data.questions.length"
    >
      Reset
    </button>
  </div>
</template>

<script setup>
import quizQuestions from '@/components/quizQuestions.vue';
import quizResult from '@/components/quizResult.vue';
import { ref } from 'vue';
import { data } from '@/data.js';

const questionsAnswered = ref(0);
const totalCorrect = ref(0);

function questionAnswered(is_correct) {
  if (is_correct) {
    totalCorrect.value++;
  }
  questionsAnswered.value++;
}
function reset() {
  totalCorrect.value = 0;
  questionsAnswered.value = 0;
}
</script>

<style scoped>
button {
  cursor: pointer;
}
</style>
