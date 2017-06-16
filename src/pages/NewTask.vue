<template>
<div>
	<div class="new-task">
		<input type="text" v-model="title" placeholder="标题">
		<input type="text" v-model="local" placeholder="位置">
		<input type="text" v-model="remark" placeholder="备注">
		<button @click="addNewTask(task)">添加</button>
	</div>
	<ul>
		<li v-for="item in list">
			{{ item.title }},
			{{ item.local }},
			{{ item.remark }}
		</li>
	</ul>
</div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
	data() {
		return {
			title: '',
			local: '',
			remark: ''
		}
	},
	computed: {
		...mapState({list: state => state.list }),
		task() {
			return this.$data
		}
	},
	methods: mapActions(['addNewTask'])
}
</script>