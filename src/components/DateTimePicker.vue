<template>
<div class="pd-select-box">
	<picker :listData="dateList" v-model="dateTime" style="flex-shrink: 0.7"></picker>
	<picker :listData="hourList" v-model="hours" type="cycle"></picker>
	<picker :listData="minuteList" v-model="minutes" type="cycle"></picker>
</div>
</template>
<script>
import Picker from './Picker'

const DAY = ['周日','周一','周二','周三','周四','周五','周六'];
const toDou = (num) => {
    return num.toString().length > 1 ? '' + num : '0' + num;
}

export default {
	name: 'DateTimePicker',
	props: ['curTime'],
	data() {
		return {
			dateList: Array.from({ length: 365 }, (value,index) => {
				let thisDate= new Date(this.curTime.getTime() + (index - 182) * 24*60*60*1000);
				return toDou(thisDate.getMonth()) + '月' + toDou(thisDate.getDate()) + '日' + ' ' + DAY[thisDate.getDay()];
			}),
			hourList: Array.from({ length: 24}, (value,index) => toDou(index) ),
			minuteList: Array.from({ length: 60}, (value,index) => toDou(index) ),
			dateTime: toDou(this.curTime.getMonth()) + '月' + toDou(this.curTime.getDate()) + '日' + ' ' + DAY[this.curTime.getDay()],
			hours: toDou(this.curTime.getHours()),
			minutes: toDou(this.curTime.getMinutes())
		}
	},
	methods: {
		getDateTimeString() {
			let dtstr = this.dateTime + ' ' + this.hours + ':' + this.minutes
			// console.log(dtstr)
			this.$emit('getDateTimeString', dtstr)
		}
	},
	components: {
		Picker
	}
}
</script>
<style scoped="">
	.pd-select-box {
		display: flex;
	}
</style>