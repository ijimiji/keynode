<template>
    <div class="gameDisplay">
        <h1>Game End</h1>
        <p>Success Stages: {{successStage}}</p>
        <p>Total Type: {{totalTypeCount}}</p>
        <p>Success Type: {{successTypeCount}}</p>
        <p>Accuracy: {{accuracy}}%</p>
        <button @click="gameStart">Retry</button>
    </div>
</template>

<script>
  export default {
    name: 'GameEndDisplay',
    components: {},
    computed: {
      successStage() {
        return this.$store.state.successStage
      },
      totalTypeCount() {
        return this.successTypeCount + this.missTypeCount
      },
      successTypeCount() {
        return this.$store.state.typeSuccessCount
      },
      missTypeCount() {
        return this.$store.state.missCount
      },
      accuracy() {
        if (this.totalTypeCount === 0) {
            return 0
        }
        return Math.ceil((this.successTypeCount / this.totalTypeCount) * 100);
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
        margin-top: 70px;
    }
</style>
