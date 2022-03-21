<template>
    <div class="task-list-item">
        <div class="task-list-item__left">
            <input type="checkbox" class="form-checkbox">
            {{ task.title }}
        </div>
        
        <div class="task-list-item__right">
            <div class="date">
                <svg-icon name="calendar" class="date__icon"></svg-icon>
                {{ task.day }}/{{ task.month }}/{{ task.year }}  
            </div>

            <button class="btn" @click="$emit('comment')"><svg-icon name="comment" class="svg-white"></svg-icon></button>
            <button class="btn" @click="$emit('edit')"><svg-icon name="edit" class="svg-white"></svg-icon></button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['task']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .task-list-item {
      display: flex;
      align-items: center;
      padding-top: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid rgb(212, 212, 212);
      justify-content: space-between;
      &__right {
        display: flex;
        align-items: center;
      }
    }
    .date {
        display: flex;
        align-items: center;
        &__icon {
            margin-right: 5px;
        }
    }
    .btn {
        margin-left: 10px;
    }
    .svg-white {
       fill: #fff; 
    }
</style>
