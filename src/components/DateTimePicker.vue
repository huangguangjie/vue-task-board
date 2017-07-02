<template>
<div class="pd-select-box">
	<picker :listData="dateList" v-model="dateTime" style="flex-shrink: 0.7"  @input="inputDateTimeString"></picker>
	<picker :listData="hourList" v-model="hours" type="cycle" @input="inputHours"></picker>
	<picker :listData="minuteList" v-model="minutes" type="cycle" @input="inputMinutes"></picker>
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
				return toDou(thisDate.getMonth() + 1) + '月' + toDou(thisDate.getDate()) + '日' + ' ' + DAY[thisDate.getDay()];
			}),
			hourList: Array.from({ length: 24}, (value,index) => toDou(index) ),
			minuteList: Array.from({ length: 60}, (value,index) => toDou(index) ),
			dateTime: toDou(this.curTime.getMonth() + 1) + '月' + toDou(this.curTime.getDate()) + '日' + ' ' + DAY[this.curTime.getDay()],
			hours: toDou(this.curTime.getHours()),
			minutes: toDou(this.curTime.getMinutes())
		}
	},
	computed: {
		pickerList() {
			return this.dateList.map((value, index) => {
				return new Date(this.curTime.getTime() + (index - 182) * 24*60*60*1000)
			})
		},
		pickerDate() {
			let index = this.dateList.indexOf(this.dateTime)
			return this.pickerList[index]
		}
	},
	mounted() {
		this.input()
	},
	methods: {
		input() {
			let dtObj = {
				dateTime: this.dateTime,
				hours: this.hours,
				minutes: this.minutes,
				pickerDate: this.pickerDate
			}
			this.$emit('getDateTimeString', dtObj)
		},
		inputDateTimeString(v) {
			this.dateTime = v;
			this.input();
		},
		inputHours(v) {
			this.hours = v;
			this.input();
		},
		inputMinutes(v) {
			this.minutes = v;
			this.input();
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