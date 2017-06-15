import Vue from 'vue'
import Router from 'vue-router'
import TaskBoard from '../pages/TaskBoard'

Vue.use(Router)

export default new Router({
    routes: [
	    {
	        path: '/',
	        name: 'TaskBoard',
	        component: TaskBoard
	    }
    ]
})
