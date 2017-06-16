import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	list: []
}

const getters = {
	list: state => state.list
}

const mutations = {
	addNewTask(state,obj) {
		state.list.push(obj)
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