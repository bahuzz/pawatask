<template>
    <form>
        <div class="flex">
            <input type="text" class="form-input" v-model="comment">
            <button class="btn" @click="addComment">Add comment</button>
        </div>
    </form>
</template>

<script>
    export default {
        data: function() {
            return {
                comment: ''
            }
        },
        methods: {
            addComment(e) {
                e.preventDefault()
                this.$emit('addComment', this.comment)
                this.comment = ''
            }
        }
    }
</script>
