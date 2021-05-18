<template>
    <div :style="style">
        <transition-group name="list" tag="p">
            <span v-for="(char) in currentString" :key="char">{{char}}</span>
        </transition-group>
    </div>
</template>

<script>
  export default {
    name: 'Strings',
    data() {
      return {
        style: {},
        currentString: [],
        keyListener: null,
      }
    },
    computed: {
      storeString() {
        return this.$store.state.strings
      }
    },
    watch: {
      storeString() {
        this.currentString = this.storeString
      }
    },
    mounted() {
      this.keyListener = (event) => {
        this.keyDown(event.key)
      }
      window.addEventListener('keydown', this.keyListener);
      this.$store.commit('choice')
    },
    destroyed() {
      window.removeEventListener('keydown', this.keyListener)

    },
    methods: {
      keyDown(code) {
        const string = this.currentString
        if (code !== string[0]) {
          this.$store.commit('typeMiss')
          return false;
        }
        string.shift()
        this.$store.commit('typeSuccess')
        // stage cleared
        if (!string[0]) {
          this.stageClear()
        }
      },
      stageClear() {
        // choice next word
        this.$store.commit('choice')
        this.$store.commit('stageSuccess')
        // n stageごとにtimeが短くなる
        if (this.$store.state.typeSuccessCount % 3 === 0) {
          if (this.$store.state.interval < 20) {
            this.$store.commit('decrementInterval', 1);
          } else {
            this.$store.commit('decrementInterval', 5);
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
    div {
        font-size: 40px;
        margin-top: 20px;
        text-align: center;
    }

    span {
        display: inline-block;
    }

    .list-leave-active {
        transition: all .5s;
        position: absolute;
    }

    .list-enter-active {
        transition: all .5s;
    }

    .list-enter, .list-leave-to /* .list-leave-active for below version 2.1.8 */
    {
        opacity: 0;
        transform: translateY(100px);
    }
</style>
