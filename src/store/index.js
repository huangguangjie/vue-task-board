import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'

import tasklist from './modules/tasklist'

Vue.use(Vuex)

const store = new Vuex.Store({
	actions,
	modules: {
		tasklist
	}
})

export default store