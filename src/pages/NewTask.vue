<template>
<div>
	<div class="new-task">
		<input type="text" v-model="title" placeholder="标题">
		<input type="text" v-model="local" placeholder="位置">
		<input type="text" v-model="remark" placeholder="备注">
		<button @click="addNewTask(task)">添加</button>
	</div>
	<div>{{ dateTime }} {{ hours }}:{{ minutes }}</div>
	<DateTimePicker :curTime="curTime" @getDateTimeString="getDateTime"></DateTimePicker>
</div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import DateTimePicker from '../components/DateTimePicker'

var defaultData = {
	title: '',
	local: '',
	remark: ''
}

const curTime = new Date();
const DAY = ['周日','周一','周二','周三','周四','周五','周六'];
const toDou = (num) => {
    return num.toString().length > 1 ? '' + num : '0' + num;
}

export default {
	data() {
		return {
			...defaultData,
			curTime: new Date(),
			dateTime: toDou(curTime.getMonth()) + '月' + toDou(curTime.getDate()) + '日' + ' ' + DAY[curTime.getDay()],
			hours: toDou(curTime.getHours()),
			minutes: toDou(curTime.getMinutes())
		}
	},
	mounted() {
		this.getDateTime()
		// console.log(this.dateList);
	},
	computed: {
		...mapState({list: state => state.list }),
		task() {
			return this.$data
		}
	},
	methods: {
		...mapActions([]),
		addNewTask(task) {
			this.$store.commit('addNewTask', { ...task });
			Object.assign(this.$data,defaultData);
			// this.$router.go('/taskboard');
			this.$router.push({ path: '/taskboard' });
		},
		getDateTime(dt) {
			return dt;
		}
	},
	components: {
		DateTimePicker
	}
}
</script>