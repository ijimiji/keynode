<template>
  <v-app>
    <Bar />
    <v-main>
      <p>Hello!</p>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Bar from "./components/Bar";
export default {
  components: {
    Bar,
  },
};
</script>
