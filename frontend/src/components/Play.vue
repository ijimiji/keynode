<template>
  <div id="play">
      <v-btn small tile v-bind:is="currentComponent" v-on:game-start="gameStart"></v-btn>
  </div>
</template>

<script>
import GameDisplay from './Game/GameDisplay'
import GameEndDisplay from './Game/GameEndDisplay'
import GameStartDisplay from './Game/GameStartDisplay'

export default {
  name: 'Play',
  components: {
    GameDisplay,
    GameEndDisplay,
    GameStartDisplay
  },
  data() {
    return {
      currentComponent: GameStartDisplay
    }
  },
  computed: {
    isDied() {
        return this.$store.state.isDied
    }
  },
  watch: {
    isDied() {
      if (!this.isDied) {
        return
      }
      this.currentComponent = GameEndDisplay
    }
  },
  methods: {
    gameStart() {
      this.$store.commit('resetAll')
      this.currentComponent = GameDisplay
    }
  }
}
</script>

<style>
#play {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 80px;
}
</style>
