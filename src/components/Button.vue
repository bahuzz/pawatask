<template>
    <button 
      class="btn"
      @click="onClick"
    >
    <slot>button</slot>
    </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .btn {
    color: #fff;
    background: rgb(230, 92, 13);
    padding: 10px 15px;
    font-size: .9rem;
  }
</style>
