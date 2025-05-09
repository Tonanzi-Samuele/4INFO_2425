



<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined">
</svelte:head>

<script>
    export let name;
</script>

<main>
<span class="material-icons-outlined icon">{name}</span>
</main>


<style>
.icon {
    font-size: 32px;
}

.icon:hover {
    cursor: pointer;
}
</style>
