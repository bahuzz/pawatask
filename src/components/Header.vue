<template>
    <header class="header">
        <h1>PawaTask</h1>
        <button class="btn" @click="addTask">Add a new task</button>
    </header>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    addTask() {
        this.$emit('add-task')
    }
  }
}
</script>

<style scoped>
    h1 {
        font-size: 1.5rem;
        font-weight: bold;
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgb(212, 212, 212);
        padding-bottom: 15px;
    }
</style>
