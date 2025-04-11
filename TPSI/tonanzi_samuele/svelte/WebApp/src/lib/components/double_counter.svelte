<svelte:head>

   
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Bungee+Spice&display=swap"
                rel="stylesheet">
</svelte:head>


<script>
     import { createEventDispatcher } from "svelte";
     import {store_dcounter} from "../js/store.js"
     const dispatch = createEventDispatcher();
    export let doublecounter = 0;
    function emit_event(aumenta){
        dispatch('aumenta', {
            tipo: aumenta,
            valore:2
        });
    }
    function emit_event2(decrementa){
        dispatch('decrementa', {
            tipo: decrementa,
            valore:3
        });
    }
</script>
<main>
    <div class="container">
        <div class="pulsante">
            <button on:click={()=>{
                doublecounter -= 3;
                $store_dcounter = doublecounter;
                emit_event2("decr");
                }}>
                <span class="material-symbols-outlined icon">remove</span>
            </button>
        </div>
        <div class="number">
            {doublecounter}
        </div>
        <div class="pulsante">
            <button on:click={()=>{
                doublecounter += 2;
                $store_dcounter = doublecounter;
                emit_event("incr");
                }}>
                <span class="material-symbols-outlined icon">add</span>
            </button>
        </div>
    </div>
</main>

<style>
    .container {
        border: 4px solid #D43C2F;
display: flex;
justify-content: space-between;
border-radius: 30px;
width: 300px;
padding: 10px;
    }
.icon {
font-size: 2.5rem;
color: #F09C00;
font-weight: bolder;
}
.icon:hover {
color: #D43C2F;
cursor: pointer;
}
.pulsante {
display: flex;
align-items: center;
}
.icon:active {
text-shadow: 1px 1px 10px #043C2F;
}
button {
border: none;
background: none;
}
.number {
font-size: 4rem;
font-family: 'Bungee Spice', cursive;
}
</style>