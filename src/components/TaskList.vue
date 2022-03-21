<template>
    <div  class="task-list">
        <Task 
            v-for="task in tasks" 
            :key="task.id" 
            :task="task" 
            @edit="editTask(task.id)"
            @comment="showTask(task.id)"
        />
        <Modal 
            ref="editTaskModal"
            >
            <h3 class="modal-title">{{ currentTask.title }}</h3>
            <EditTaskForm 
                :currentTask="currentTask" 
                @closeModal="$refs.editTaskModal.closeModal()"
            />
        </Modal>

        <Modal 
            ref="addCommentModal"
            >
            <h3 class="modal-title">{{ currentTask.title }}</h3>
            <div class="task-descr">{{ currentTask.description }}</div>
            <div class="flex flex-justify-between pt-20">
                <div class="date">
                    <b>Date:</b> {{ currentTask.day }}/{{ currentTask.month }}/{{ currentTask.year }}
                </div>
                <div class="priority">
                    <b>Priority:</b> {{ currentTask.priority }}
                </div>
            </div>
            <Comments :comments="currentTask.comments" />
            <AddComment @addComment="addComment" />
        </Modal>
    </div>
</template>

<script>
import Task from '@/components/TaskListItem.vue'
import Modal from '@/components/Modal.vue'
import EditTaskForm from '@/components/forms/EditTaskForm .vue'
import Comments from '@/components/Comments.vue'
import AddComment from '@/components/forms/AddComment.vue'

export default {
    props: ['tasks'],
    data: function() {
        return {
            taskId: null
        }
    },
    computed: {
        currentTask: function() {
           return this.$store.getters.getTask(this.taskId) || ''
        }
    },
    components: {
        Task,
        Modal,
        EditTaskForm,
        Comments,
        AddComment
    },
    methods: {
        addTask() {
            this.$emit('add-task')
        },
        editTask(id) {
            this.taskId = id
            this.$refs.editTaskModal.openModal()
        },
        showTask(id) {
            this.taskId = id
            this.$refs.addCommentModal.openModal()
        },
        addComment(comment) {
            this.$store.commit('addComment',{id: this.currentTask.id, comment})
            this.$refs.addCommentModal.closeModal()
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
