<script >
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
    getUsers();
});
</script>
<h2>Users</h2>

<div id="header" style="width:20em;margin-left:auto;margin-right:auto;margin-top:10px;text-align:center">
<Col>
{#each users as user}
<div style="margin-top:8px;">
<Card>
    <CardTitle>{user.username}</CardTitle>
    <CardActions>
        <Button on:click={removeUser({user})} >Remove</Button>
    </CardActions>
</Card>
</div>
{/each}
</Col>
</div>