export const addNewTask = ({ commit, state }, obj) => {
	state.tasklist.list.push(obj)
}