<script>
import {
    Button,
    Row,
    Col,
    TextField,
    MaterialApp
} from 'svelte-materialify';
import axios from 'axios';
var regForm = {
    password: '',
    username: '',
};

function cleanForm() {
    regForm.password = '';
    regForm.username = '';
};

function register() {
    const payload = {
        username: regForm.username,
        password: regForm.password
    };
    const path = `http://localhost:3000/api/users`;
    axios.post(path, payload)
        .then(() => {
            console.log("Success");
        })
        .catch((error) => {
            console.log(error);
        });
    cleanForm();
};
</script>

<h2>Register</h2>

<div id="header" style="width:864px;margin-top:10px">
    <div id="centered" style="margin: 0 auto; width:855px;">
        <TextField filled bind:value={regForm.username}>Username</TextField>
        <TextField type='password' filled bind:value={regForm.password}>Password</TextField>
        <Button on:click={register}>Register</Button>
    </div>
</div>

<style>
h2 {
    text-align: center;
}
</style>
