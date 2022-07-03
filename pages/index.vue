<template>
  <div class="flex flex-row items-center justify-center">
    <Board class="max-w-5xl"></Board>

    <span class="
      hidden
      bg-pink-400 bg-yellow-400 bg-red-300 bg-blue-300 bg-green-400
    "></span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
