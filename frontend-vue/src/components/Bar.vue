<template>
<v-card class="mx-auto overflow-hidden">
    <v-app-bar dark short app>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>Keynode!</v-toolbar-title>
        <v-spacer />
        <v-icon v-on:click="$vuetify.theme.dark = !$vuetify.theme.dark">mdi-theme-light-dark</v-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
        <v-list nav dense>
            <v-list-item-group>
                <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content @click="drawer = false">
                        <router-link tag=div :to=item.route>{{item.text}}</router-link>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</v-card>
</template>

<script>
export default {
    name: "Bar",
    data: () => ({
        drawer: false,
        items: [{
                route: '/users',
                text: 'Users',
                icon: 'mdi-clock'
            },
            {
                route: '/',
                text: 'Home',
                icon: 'mdi-clock'
            }
        ],
    }),
}
</script>

<style>
</style>
