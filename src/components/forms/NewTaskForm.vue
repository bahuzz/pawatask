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

        <div class="form-row">
            <label class="form-label">Comments</label>
            <textarea class="form-textarea" v-model="task.comment"></textarea>
        </div>

        <div class="form-row flex flex-right">
            <app-button :onClick="addTask">Add new task</app-button>
        </div>
    </form>
</template>

<script>
import AppButton from '@/components/Button.vue'
    export default {
        components: {    
          AppButton
        },
        data: function() {
            return {
                task: {}
            }
        },
        methods: {
            addTask(e) {
                e.preventDefault()
                console.log(e)
            }
        }
    }
</script>
