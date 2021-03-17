<template>
<div style="width:20em;margin-left:auto;margin-right:auto;text-align:center">
    <div style="margin-top:10px" v-for="user in users" v-bind:key="user.username">
        <v-card class="mx-auto">
            <v-list-item>
                <p> {{user.username}}</p>
            </v-list-item>
            <v-card-actions>
                <v-btn>
                    Click me!
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        getUsers() {
            this.axios.get('/users').then((res) => {
                this.users = res.data;
            })
        },
    },
    name: "Users",
    data() {
        return {
            users: null
        }
    },
    mounted() {
        this.getUsers();
    }
}
</script>
