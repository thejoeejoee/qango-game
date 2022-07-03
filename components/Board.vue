<template>
  <div>
    <div
      v-if="!game.result"
      class="flex flex-row justify-center items-center py-4 gap-x-4"
    >
      player
      <span
        class="rounded-full uppercase text-xl border-2 h-12 w-12"
        :class="{
            'bg-white border-gray-100 text-gray-700': game.nextPlayer === 0,
            'bg-gray-800 border-gray-700 text-gray-100': game.nextPlayer === 1,
        }"
      ></span>
      is playing
    </div>
    <div
      v-if="game.result"
      class="text-center rounded bg-green-200 text-green-700 border-2 border-green-300 my-2 py-4 text-xl font-bold"
    >
      {{ game.result }}
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
          }"
        :title="indexToPosition(i)"
        @click="game.playPosition(indexToPosition(i))"
      >
        <div
            v-if="game.positionToToken(indexToPosition(i))"
            class="
              w-16 h-16
              rounded-full
              shadow-xl border-2
            "
            :class="{
              'bg-white border-gray-100': game.positionToToken(indexToPosition(i)).player === 0,
              'bg-gray-800 border-gray-700': game.positionToToken(indexToPosition(i)).player === 1,
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
