<template>
  <v-app>
    <v-main>
      <Bar />
      <transition name="fade">
        <router-view class="view" />
      </transition>
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

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>