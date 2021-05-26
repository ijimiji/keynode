<template>
    <div class="healthBar" :style="style">
        health
    </div>
</template>

<script>
  export default {
    name: 'HealthBar',
    data() {
      return {
        style: {
          width: (this.health * 20) + 'px',
        }
      }
    },
    computed: {
      health() {
        return this.$store.state.health
      }
    },
    mounted() {
      // const health = this.health
      // this.style.width = (health * 20) + 'px'
    }

  }
</script>

<style scoped lang="scss">
    div {
        margin: 10px;
        height: 20px;
        background: blue;
        color: white;
    }
</style>
