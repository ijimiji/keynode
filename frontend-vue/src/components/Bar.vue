<template>
  <v-navigation-drawer app mini-variant>
    <v-list-item-group>

      <v-list-item>
        <v-list-item-content
          @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        >
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-for="(item, i) in items" :key="i">
        <v-list-item-content>
          <router-link tag="div" :to="item.route">
            <v-icon v-text="item.icon"></v-icon>
           </router-link>
        </v-list-item-content>
      </v-list-item>

    </v-list-item-group>
  </v-navigation-drawer>
</template>

<script>
import { routes } from "../routes";
export default {
  name: "Bar",
  data() {
    return {
      items: routes,
    };
  },
};
</script>
