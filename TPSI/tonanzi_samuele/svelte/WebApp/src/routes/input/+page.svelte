<script>
    let nome,cognome,eta,residenza;
    
    let confermato = false;
</script>

<main>
    <h1>Input Page</h1>
Cognome <input bind:value={cognome}>
Nome <input bind:value={nome}>
Età <input bind:value={eta}>
Residenza <input bind:value={residenza}>

<br><br>

Confermato <input type="checkbox" bind:checked={confermato}>

<br><br>

Io sono {cognome} {nome} ed ho {eta} anni, abito a {residenza}.

<br><br>

<button disabled ={!confermato}>Invia</button>
</main>
