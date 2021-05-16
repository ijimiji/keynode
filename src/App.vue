<template>
  <v-app>
    <v-main>
      <Bar/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Bar from './components/Bar'
  export default {
    components: {
      Bar
    }
  }
</script>
