<template>
    <div class="gameDisplay" :style="style" :class="klass">
        <time-bar></time-bar>
        <display-string></display-string>
        <strings></strings>
    </div>
</template>

<script>
  import Strings from './parts/Strings'
  import DisplayString from './parts/DisplayString'
  import TimeBar from './parts/TimeBar'

  export default {
    name: 'GameDisplay',
    components: {
      Strings,
      DisplayString,
      TimeBar
    },
    data() {
      return {
        style: {},
        klass: []
      }
    },
    computed: {
      missCount() {
        return this.$store.state.missCount
      }
    },
    watch: {
      missCount() {
        this.klass = ['damaged']
        setTimeout(() => {
          this.klass = []
        }, 200)
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

    .damaged {
        animation: damage;
        animation-duration: .2s;
    }

    @keyframes damage {
        0% {
            background : rgb(255, 0, 0);
            opacity: 0.3;
        }
        100% {
            background : inherit;
        }
    }
</style>
