<script>
import axios from 'axios';
import {
    Card,
    CardTitle,
    CardActions,
    Button,
    Col,
} from 'svelte-materialify';
import {
    onMount
} from 'svelte';
import {
    get
} from 'svelte/store';
let users = [];

function getUsers() {
    axios.get(`http://localhost:3000/api/users`)
        .then((res) => {
            users = res.data;
        });
};

function removeUser(userID) {
    const path = `http://localhost:3000/api/users/${userID.user._id}`;
    axios.delete(path)
        .then(() => {
            console.log('Success');
            getUsers();
        })
        .catch((error) => {
            console.error(error);
            getUsers();
        });
};

onMount(async () => {
    const res = await fetch("http://localhost:3000/api/users");
    users = await res.json();
    console.log(users);
});
</script>
<h2>Users</h2>

<Col>
{#each users as user}
<Card>
    <CardTitle>{user.username}</CardTitle>
    <CardActions>
        <Button on:click={removeUser({user})} >Remove</Button>
    </CardActions>
</Card>
{/each}
</Col>

<style>
h2 {
    text-align: center;
}
</style>
