<template>
    <div class="comments">
        <Comment v-for="comment in comments" :content="comment" :key="comment" />
    </div>
</template>

<script>
import Comment from '@/components/Comment.vue'

export default {
    name: 'TaskComments',
    props: ['comments'],
    components: {
        Comment
    }
}
</script>

<style>
    .comments {
        padding-top: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
        border-top: 1px solid rgb(212, 212, 212);
    }
</style>
