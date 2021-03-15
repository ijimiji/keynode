<script>
    export let key;
    import {Button} from 'svelte-materialify'
</script>

<div class="key">
    <Button>{key}</Button>
</div>

<style>
    .key { 
        font-size: 40px;
        /* width: max-content; */
        margin: 3px;
    }
</style>