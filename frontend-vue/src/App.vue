<template>
<v-app>
    <v-app-bar dark short app>
        <v-icon v-on:click="$vuetify.theme.dark = !$vuetify.theme.dark">mdi-theme-light-dark</v-icon>
    </v-app-bar>
    <v-main>
        <div v-if="users && users.length">
            <v-card class="mx-auto" style="margin-top:5px;width:20em;" 
                    v-for="user of users" 
                    v-bind:key="user.username">
                <p><strong>{{user.username}}</strong></p>
                <p>{{user.password}}</p>
            </v-card>
        </div>
    </v-main>
</v-app>
</template>

<script>
export default {
    methods: {
        async getUsers() {
            var res = await this.axios.get('/users');
            this.users = res.data;
        }
    },
    data() {
        return {
            users: [],
        }
    },

    created() {
        this.getUsers();
    }
}
</script>
