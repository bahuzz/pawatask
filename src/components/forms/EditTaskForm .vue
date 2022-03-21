<template>
    <form>
        <div class="form-row">
            <label class="form-label">Title</label>
            <input type="text" class="form-input" v-model="task.title">
        </div>

        <div class="form-row">
            <label class="form-label">Description</label>
            <textarea class="form-textarea" v-model="task.description"></textarea>
        </div>

        <div class="form-row">
            <label class="form-label">Set due date</label>
            <input type="text" class="form-input form-input-s mr-10" v-model="task.day">
            <input type="text" class="form-input form-input-s mr-10" v-model="task.month">
            <input type="text" class="form-input form-input-m" v-model="task.year">
        </div>

        <div class="form-row">
            <label class="form-label">Priority</label>
            <select v-model="task.priority" class="form-select">
                <option>low</option>
                <option>medium</option>
                <option>high</option>
            </select>
        </div>

        <div class="form-row flex flex-right">
            <button class="btn" @click="editTask">Edit task</button>
        </div>
    </form>
</template>

<script>
    export default {
        props: ['currentTask'],
        data: function() {
            return {
                task: this.currentTask
            }
        },
        methods: {
            editTask(e) {
                e.preventDefault()
                this.$store.commit('editTask',this.task)
                this.$emit('closeModal')
            }
        }
    }
</script>
