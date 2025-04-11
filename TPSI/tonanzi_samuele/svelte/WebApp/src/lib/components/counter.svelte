



<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Bungee+Spice&display=swap"
                rel="stylesheet">
</svelte:head>


<script>
    import { createEventDispatcher } from "svelte";
    import {store_counter} from "../js/store.js"
    const dispatch = createEventDispatcher();
    export let counter = 0;



    function emit_event(tipo){
        dispatch('contatore', {
            tipo:tipo,
            valore:counter
        });
    }
</script>
<main>
    <div class="container">
        <div class="pulsante">
            <button on:click={()=>{
                counter -=1;
                $store_counter = counter;
                emit_event("decr")
            }}>
                <span class="material-symbols-outlined icon">
                    remove
                    </span>
            </button>
        </div>
        <div class="number">
            {counter}
        </div>
        <div class="pulsante">
            <button on:click={()=> {
                counter +=1;
                $store_counter = counter;
                emit_event("incr")
            }}>
                <span class="material-symbols-outlined icon">
                    add
                    </span>
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

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}

</style>