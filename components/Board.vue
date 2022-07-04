<template>
  <div>
    <div
      v-if="!game.result"
      class="flex flex-row justify-center items-center py-4 gap-x-4"
    >
      player
      <span
        class="Token Token--small"
        :class="{
            'Token--light': game.nextPlayer === 0,
            'Token--dark': game.nextPlayer === 1,
        }"
      ></span>
      is playing
    </div>
    <div
      v-if="game.result"
      class="text-center rounded bg-green-200 text-green-700 border-2 border-green-300 my-2 py-4 text-xl font-bold"
    >
      <template v-if="game.result.winner === 0">Player white is a winner.</template>
      <template v-else-if="game.result.winner === 1">Player black is a winner.</template>
      <template v-else-if="game.result.winner === undefined">It's a draw.</template>
    </div>
    <div class="grid grid-cols-6 gap-2">
      <div
        v-for="(_, i) in new Array(36)"
        class="
            h-32 w-32 border-1 border-gray-300 rounded-lg
            flex items-center justify-center
            text-2xl shadow-md hover:shadow
          "
        :class="{
            [game.positionToGroup(indexToPosition(i)).color]: true,
            'cursor-pointer': !game.positionToToken(indexToPosition(i)),
            'animate-pulse': game.result && game.result.includesTileIndex(i)
          }"
        :title="indexToPosition(i)"
        @click="game.playPosition(indexToPosition(i))"
      >
        <div
            v-if="game.positionToToken(indexToPosition(i))"
            class="Token blur"
            :class="{
              'Token--light': game.positionToToken(indexToPosition(i)).player === 0,
              'Token--dark': game.positionToToken(indexToPosition(i)).player === 1,
            }"
        ></div>
      </div>

    </div>
  </div>
</template>


<script>
import {indexToPosition} from "~/model/position";
import {Game} from "~/model/game";

export default {
  data: () => ({game: new Game()}),

  methods: {indexToPosition},
}
</script>

<style>
.Token {
  @apply w-16 h-16 rounded-full shadow-xl border-2;
}
.Token--small {
  @apply w-12 h-12;
}
.Token--light {
  @apply bg-white border-gray-100;

  box-shadow: 5px 5px 0 lightgray;
}
.Token--dark {
  @apply bg-gray-800 border-gray-700;


  box-shadow: 5px 5px 0 #444;
}
</style>
