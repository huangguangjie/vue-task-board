<template>
<div>
	<div class="new-task">
		<input type="text" v-model="title" placeholder="标题">
		<input type="text" v-model="local" placeholder="位置">
		<input type="text" v-model="remark" placeholder="备注">
		<button @click="addNewTask(task)">添加</button>
	</div>
	<div>{{ pickerDate.dateTime }} {{ pickerDate.hours }}:{{ pickerDate.minutes }}</div>
	<DateTimePicker :curTime="new Date" @getDateTimeString="getDateTime"></DateTimePicker>
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

export default {
	data() {
		return {
			...defaultData,
			pickerDate: {}
		}
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
			this.$router.push({ path: '/taskboard' });
		},
		getDateTime(dtObj) {
			if(!!dtObj) {
				for(var key in dtObj) {
					this.$set(this.pickerDate, key, dtObj[key]);
				}
			}
		}
	},
	components: {
		DateTimePicker
	}
}
</script>