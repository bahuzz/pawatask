<template>
    <header class="header">
        <h1>PawaTask</h1>
        <app-button :onClick="addTask">Add a new task</app-button>
    </header>
</template>

<script>
import AppButton from '@/components/Button.vue'
export default {
  name: 'AppHeader',
    components: {
        AppButton
    },
    methods: {
        addTask() {
            this.$emit('add-task')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        font-size: 1.5rem;
        font-weight: bold;
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        padding-bottom: 15px;
    }
</style>
