import Vue from 'vue'
import Vuex from 'vuex'
import mock from '@/helpers/mock'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: mock.tasks
  },
  getters: {
    getTask: state => id => state.tasks.filter(item => item.id === id)[0]
  },
  mutations: {
    addTask: (state, task) => {
      state.tasks.push(task)
    },
    editTask: (state, task) => {
      const index = state.tasks.findIndex(item => item.id === task.id)
      state.tasks[index] = task
    },
    addComment: (state, task) => {
      const index = state.tasks.findIndex(item => item.id === task.id)
      state.tasks[index].comments.push(task.comment)
    }
  }
})
