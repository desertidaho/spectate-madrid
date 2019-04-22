import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)
let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/';

let auth = Axios.create({
  baseURL: base + "auth/",
  timeout: 4000,
  withCredentials: true
})

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 4000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    stories: []
  },
  mutations: {
    // creates user when register
    setUser(state, user) {
      state.user = user
    },
    addStory(state, data) {
      state.stories.unshift(data)
    },
    getAllStories(state, data) {
      state.stories = data
    }
  },
  actions: {

    //#region -- AUTH STUFF --
    register({ commit, dispatch }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'login' })
        })
    },

    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
        })
        .catch(res => {
          commit('setUser', {})
          router.push({ name: 'login' })
        })
    },

    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'write' })
        })
        .catch(res => {
          alert("Incorrect email or password.")
        })
    },

    logout({ commit, dispatch }, creds) {
      auth.delete('logout', creds)
        .then(res => {
          commit('setUser', {})
          router.push({ name: 'login' })
        })
    },

    //#endregion

    //#region -- STORY STUFF --

    newStory({ commit, dispatch }, newStory) {
      api.post('story', newStory)
        .then(res => {
          commit('addStory', newStory)
        })
        .catch(res => {
          console.log(res)
        })
    },

    getStories({ commit, dispatch }) {
      api.get('story')
        .then(res => {
          commit('getAllStories', res.data)
        })
    }

    //#endregion

  }
})
