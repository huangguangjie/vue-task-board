import Vue from 'vue'
import Router from 'vue-router'
import TaskBoard from '../pages/TaskBoard'
import NewTask from '../pages/NewTask'

Vue.use(Router)

export default new Router({
    routes: [
	    {
	        path: '/',
	        name: 'TaskBoard',
	        component: TaskBoard
	    },
	    {
	        path: '/taskboard',
	        name: 'TaskBoard',
	        component: TaskBoard
	    },
	    {
	        path: '/newtask',
	        name: 'NewTask',
	        component: NewTask
	    }
    ]
})
