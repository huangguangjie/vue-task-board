<template>
	<div class="new-task">
		<input type="text" v-model="title" placeholder="标题">
		<input type="text" v-model="local" placeholder="位置">
		<input type="text" v-model="remark" placeholder="备注">
		<button @click="addNewTask(task)">添加</button>
	</div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
	data() {
		return {
			title: '',
			local: '',
			remark: ''
		}
	},
	computed: {
		task() {
			return this.$data
		}
	},
	methods: mapActions(['addNewTask'])
}
</script>