<template>
	<div>
		<ul>
			<li v-for="item in list">
				{{ item.title }},
				{{ item.local }},
				{{ item.remark }}
			</li>
		</ul>
		<button @click="goToAddTask">添加任务</button>
		<!-- <date-picker></date-picker> -->
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	computed: mapGetters(['list']),
	methods: {
		goToAddTask() {
			this.$router.push({ path: '/newtask' });
		}
	}
}
</script>