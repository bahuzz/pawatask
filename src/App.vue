<template>
  <div id="app">
   <AppHeader @add-task="openTaskModal" />
   <TaskList :tasks="$store.state.tasks" />
   <Modal 
    ref="addTaskModal"
    >
     <h3 class="modal-title">New task</h3>
      <NewTaskForm
        @closeModal="$refs.addTaskModal.closeModal()"
      />
   </Modal>
  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue'
import Modal from '@/components/Modal.vue'
import NewTaskForm from '@/components/forms/NewTaskForm.vue'
import TaskList from '@/components/TaskList.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    Modal,
    NewTaskForm,
    TaskList
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
