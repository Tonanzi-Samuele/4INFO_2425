



<script>
    import Icon from "./icon.svelte";
    import Priority from "./priority.svelte";
    import TodoItem from "./todo_item.svelte";

    let todos = [
        {
            id:1,
            task:"Studiare TPSI",
            done:false,
            priority:1
        },    
        {
            id:2,
            task:"Studiare RETI",
            done:true,
            priority:2
        },    
        {
            id:3,
            task:"Studiare Info",
            done:false,
            priority:3
        }    
    ]



</script>

<main>
<h1>ToDos</h1>
<div class="todo-list">
    <div class="header"><Icon name="tag"/></div>
    <div class="header"><Icon name="task_alt"/></div>
    <div class="header"><Icon name="list"/></div>
    <div class="header"><Icon name="schedule"/></div>
    <div class="header"><Icon name="add_box"/></div>

    <!-- ToDo Item 1 -->
    <TodoItem todo={todos[0]}/>

    <!-- ToDo Item 2 -->
    <TodoItem todo={todos[1]}/>
    
    <!-- ToDo Item 3 -->
    <TodoItem todo={todos[2]}/>

</div>
</main>

<style>
    .todo-list{
        border: 3px solid blue;
        width: 95%;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 4fr 2fr 1fr;

        
    }

</style>