


<script>  
    import DoubleCounter from "$lib/components/double_counter.svelte";
    import Counter from "$lib/components/counter.svelte";
    let counter = 0;
    let doublecounter = 0;
    let sottolineato = true;
    let sottolineatod = true;
    let numeri = [1,7,2,6,9,10]
    let doppio = 0
    $: doppio = counter *2;
    $: sottolineatod = doublecounter%2==0

    function gestisci_evento(evento){
        alert(`${evento.detail.tipo} -- ${evento.detail.valore}`);
    }
</script>

<main>
    <h1>pagina counter!!!</h1>
    <h2 class={counter < 5 ? "rosso"  : "verde" }>il valore del contatore è: {counter}</h2>
    <h2 class:sottolineato>il valore del contatore è: {counter}</h2>
    <h2>il suo doppio vale {doppio}</h2>    
</main>
<br><br>
<p>counter</p>
<Counter bind:counter={counter}  on:contatore={gestisci_evento}/>
<br><br>
<main>
    <h2 class:sottolineatod>il valore di double counter vale {doublecounter}</h2>

</main>
<DoubleCounter bind:doublecounter={doublecounter} on:aumenta={gestisci_evento} on:decrementa={gestisci_evento}/>
<ul>
    {#each numeri as numero,indice }
        <li>numeri[{indice}]:{numero}</li>
    {/each}
</ul>





<style>
    main {
        font-size: 20px;
    }
    .rosso{
        color: red;
    }
    .verde {
        color: green;
    }
    .sottolineato {
        text-decoration: underline;
    }
    .sottolineatod{
        text-decoration: underline;
    }
</style>