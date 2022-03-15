<template>
   <div class="modal-wrapper" v-if="isOpen">
       <div class="modal">
           <span class="modal-close" @click="closeModal"><svg-icon name="close"></svg-icon></span>
       </div>
   </div>
</template>

<script>
export default {
  name: 'AppModal',
  data: function() {
      return {
          isOpen: false
      }
  },

  methods: {
        closeModal() {
            this.isOpen = false
        },
        openModal() {
            this.isOpen = true
        }
    }
}
</script>

<style scoped>
   .modal-wrapper {
       position: absolute;
       left: 0;
       top: 0;
       width: 100%;
       height: 100vh;
       background: rgba(0,0,0,.6);
       z-index: 9999;
       display: flex;
       align-items: center;
       justify-content: center;
   }
   .modal {
       background: #fff;
       min-width: 600px;
       border-radius: 10px;
       padding: 25px;
       position: relative;
   }
   .modal-close {
       position: absolute;
       right: 10px;
       top: 10px;
       cursor: pointer;
   }
</style>
