<template>
  <div id="app">
   <AppHeader @add-task="openTaskModal" />
   <Modal ref="addTaskModal" />
    <div class="todo-list">
      <div class="todo-item">
        <input type="checkbox">
        <h2 class="todo-item__title">Create todo app</h2>
        <div class="todo-item__status todo-item__status--medium">Medium</div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue'
import Modal from '@/components/Modal.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    Modal
  },
  methods: {
    openTaskModal() {
      this.$refs.addTaskModal.openModal()
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 15px;
  max-width: 600px;
  margin: auto;
}
.todo {
  &-item {
    display: flex;
  }
}
</style>
