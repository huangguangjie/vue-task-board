<template>
	<div id="taskboard" class="taskboard">
		<header class="header">
			<h3>日程表</h3>
			<button @click="goToAddTask">添加日程</button>
		</header>
		<ul>
			<li v-for="item in list">
				{{ item.title }},
				{{ item.local }},
				{{ item.remark }}
			</li>
		</ul>
		<ul class="list">
			<li v-for="i in 5">
				<div class="tit">
					<h3>开例会</h3>
					<p>摘要：关于这次上线任务的安排。</p>
					<span class="tag">会议</span>
				</div>
				<time>08/12/13</time>
				<time>12:15</time>
			</li>
		</ul>
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