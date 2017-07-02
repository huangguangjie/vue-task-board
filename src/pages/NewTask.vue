<template>
<div class="newtask">
	<header class="header">
		<button class="back">返回</button>
		<h3>添加日程</h3>
	</header>
	<form class="form">
		<input type="text" v-model="title" placeholder="任务名">
		<input type="text" v-model="address" placeholder="地点">
		<input type="text" v-model="remark" placeholder="备注">
		<input type="text" v-model="time" placeholder="时间" readonly="true" @click="changeTime">
		<transition name="dropdown">
			<DateTimePicker v-if="openStartTime" class="pick-start-time" :curTime="pickerTime.pickerDate" @getDateTimeString="getDateTime"></DateTimePicker>
		</transition>
		<input type="text" v-model="type" placeholder="类型">
		<button @click="addNewTask(task)">完成</button>
	</form>
</div>
</template>
<script>
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import DateTimePicker from '../components/DateTimePicker'
import { FormateTime } from '../utils'

const ft = new FormateTime(new Date)

let defaultData = {
	title: '',
	address: '',
	remark: '',
	type: ''
}

export default {
	data() {
		return {
			...defaultData,
			pickerTime: {
				...ft,
				dateTime: ft.month + '月' + ft.date + '日 ' + ft.day,
				pickerDate: ft.originTime
			},
			openStartTime: false
		}
	},
	computed: {
		...mapState({list: state => state.list }),
		task() {
			return this.$data
		},
		time() {
			const { dateTime, hours, minutes } = this.pickerTime;
			return dateTime + '  ' + hours + ':' + minutes
		}
	},
	methods: {
		...mapActions([]),
		addNewTask(task) {
			this.$store.commit('addNewTask', { ...task });
			Object.assign(this.$data,defaultData);
			this.$router.push({ path: '/taskboard' });
		},
		getDateTime(dtObj) {
			if(!!dtObj) {
				for(var key in dtObj) {
					this.$set(this.pickerTime, key, dtObj[key]);
				}
			}
		},
		changeTime() {
			this.openStartTime = !this.openStartTime
		}
	},
	mounted() {
	},
	components: {
		DateTimePicker
	}
}
</script>
<style lang="less">
.dropdown {
	&-enter-active,
	&-leave-active {
		transition: all .3s;
	}
	&-enter,
	&-leave-to {
		transform: scale(.8) translateY(-5rem);
		opacity: 0;
	}
}
</style>