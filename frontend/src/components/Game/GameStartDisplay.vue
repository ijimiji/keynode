<template>
    <div class="gameDisplay">
        <h1>
            <fuwa-moji v-for="(char, i) in title" :key="i" :char="char" :index="i"></fuwa-moji>
        </h1>
        <v-btn small tile @click="gameStart">Start Game</v-btn>
    </div>
</template>

<script>
  import FuwaMoji from './parts/FuwaMoji'
  export default {
    name: 'GameStartDisplay',
    components: {
        FuwaMoji
    },
    data() {
        return {
          title: 'Vue-Typing'.split('')
        }
    },
    methods: {
      gameStart() {
        this.$emit('game-start')
      }
    }
  }
</script>

<style scoped lang="scss">
    .gameDisplay {
        width: 600px;
        height: 400px;
        //border: 1px solid #CCC;
        margin: auto;
        position: relative;
    }
    h1 {
        margin-top: 160px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        position: relative;
        display: table;
    }
</style>
