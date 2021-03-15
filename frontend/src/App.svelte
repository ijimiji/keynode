<script>
	let menu = "404"
	import Login from "./Login.svelte";
	import Users from "./Users.svelte";
	import { Switch, Icon, MaterialApp } from 'svelte-materialify';
	import { mdiThemeLightDark, mdiHome, mdiAccount, mdiLogin } from '@mdi/js';
	import Register from "./Register.svelte";
	let theme = 'light';
	
	function menuSet(option){
		menu = option;
	}
	function toggleTheme() {
		if (theme === 'light') theme = 'dark';
		else theme = 'light';
	  }
</script>
	
<MaterialApp {theme}>
	<div class="d-flex pt-4 pb-4 justify-space-around align-center">
	<Switch on:change="{toggleTheme}"><Icon path={mdiThemeLightDark} /> </Switch>
	<button on:click={() => menu = 'register'}>
		<Icon path={mdiHome} />
	</button>
	<button on:click={() => menu = 'users'}>
		<Icon path={mdiAccount} />
	</button>
	<button on:click={() => menu = 'login'}>
		<Icon path={mdiLogin} />
	</button>
	</div>

	{#if menu === 'register'}
	<Register />
	{:else if menu === 'users'}
	<Users />
	{:else if menu === 'login'}
	<Login />
	{:else}
	<h2>
		Page Not Found
	</h2>
	{/if}
</MaterialApp>
