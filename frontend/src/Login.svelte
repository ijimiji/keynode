<script>
let snackbar = false;
import axios from 'axios';
import {
    onMount
} from 'svelte';
import {
    Row,
    Snackbar,
    Col,
    TextField,
    Card,
    CardTitle,
    CardActions,
    Button,
} from 'svelte-materialify';
let token = '';
let users = [];
let loginForm = {
    username: '',
    password: ''
}

function cleanForm() {
    loginForm.password = '';
    loginForm.username = '';
};

function getUsers() {
    axios.get(`http://localhost:3000/api/users`)
        .then((res) => {
            users = res.data;
        });
};

function login() {
    for (var user of users) {
        if (user.username === loginForm.username && user.password === loginForm.password) {
            token = "Succes!";
        } else {
            token = "Login error!";
        }
        snackbar = true;
    }
    cleanForm();
}
onMount(async () => {
    getUsers();
})
</script>

<h2>Login</h2>

<div id="header" style="width:864px;margin-top:10px">
    <div id="centered" style="margin: 0 auto; width:855px;">
        <TextField filled bind:value={loginForm.username}>Username</TextField>
        <TextField type='password' filled bind:value={loginForm.password}>Password</TextField>
        <Button on:click={login}>Sign in</Button>
    </div>
</div>
<Snackbar class="justify-space-between" bind:active={snackbar} right top timeout={3000}>
    {token}
    <Button
        text
        on:click={() => {
        snackbar = false;
        }}>
        Dismiss
    </Button>
</Snackbar>
