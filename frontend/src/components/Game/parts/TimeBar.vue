<template>
    <div :style="style">
        time {{style.width}}
    </div>
</template>

<script>
  export default {
    name: 'TimeBar',
    data() {
      return {
        width: 100,
        interval: null,
      }
    },
    computed: {
      style() {
        return {
          width: this.width + '%'
        }
      },
      missCount() {
        return this.$store.state.missCount
      },
      typeSuccessCount() {
        return this.$store.state.typeSuccessCount
      },
      timeInterval() {
        return this.$store.state.interval
      },
      successStage() {
        return this.$store.state.successStage
      }
    },
    watch: {
      missCount() {
        this.width -= 7
        this.checkTimeOver()
      },
      typeSuccessCount() {
        const healPoint = 7
        if (99 < this.width + healPoint) {
          this.width = 100
          return
        }
        this.width += healPoint;
      },
      successStage() {
        this.restart()
      }
    },
    mounted() {
      this.start()
    },
    methods: {
      checkTimeOver() {
        if (this.width > 0) {
          return
        }
        this.width = 0
        clearInterval(this.interval)
        this.$store.commit('die')
      },
      restart() {
        this.width = 100
        clearInterval(this.interval)
        this.start()
      },
      start() {
        this.interval = setInterval(() => {
          this.width--
          this.checkTimeOver()
        }, this.timeInterval);
      },
    }
  }
</script>

<style scoped lang="scss">
    div {
        margin: 20px 0;
        height: 25px;
        line-height: 25px;
        background: black;
        color: #aaaaaa;
        opacity: 0.7;
        overflow: hidden;

    }
</style>
