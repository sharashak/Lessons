<template>
    <div class="container mb-2 mt-2 card-body">

        <div class="card title">
            {{ todo.title }}
        </div>

        <button
            type="button"
            class="btn btn-danger"
            @click="$emit('removeItem')"
        >delete</button>

        <button
            type="button"
            class="btn btn-primary"
        >edit</button>

        <div class="card subtitle">
            {{ todo.desc }}
        </div>

    </div>
</template>

<script>

export default {
    props: ["todo", "index"],
    methods: {
        
    }
}

</script>

<style>
    .container {
        max-width: 60%;
        border-radius: 6px;
    }

    .card-body {
        background-color: #F9E547;
    }

    .card-body .title {
        background-color: #ffffa2;
    }

    .card-body .subtitle {
        font-size:  16pt;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-top: 5px;
        background-color: #ffffa2;
        max-width: 83%;
    }

    .btn {
        display: flex;
        float: right;
        margin: 5px 2px;
    }
</style>