<template>
    <div class="p-d-flex p-flex-column vh-100">
        <div class="p-d-flex p-jc-center p-ai-center p-flex-grow-1">
            <RouterView />
        </div>
    </div>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
    name: 'App',
    components: {
        RouterView
    }
}
</script>

<style>
body {
    margin: 0;
}
</style>
