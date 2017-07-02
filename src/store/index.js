import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const STORAGE_KEY = 'TASK_LIST'

if(navigator.userAgent.indexOf('PhantomJS') > -1) {
	window.localStorage.clear()
}

window.localStorage.clear()

const state = {
	list: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}

const getters = {
	list: state => state.list
}

const mutations = {
	addNewTask(state,obj) {
		state.list.splice(0,0,obj)
		window.localStorage.setItem(STORAGE_KEY,JSON.stringify(state.list))
	}
}

const actions = {
	addNewTask({ commit }, obj) {
		commit('addNewTask',obj)
	}
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})