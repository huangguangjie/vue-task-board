const DAY = ['周日','周一','周二','周三','周四','周五','周六'];
const toDou = (num) => {
    return num.toString().length > 1 ? '' + num : '0' + num;
}

export default function FormateTime(t) {
	return {
		originTime: t,
		fullyear: t.getFullYear(),
		month: toDou(t.getMonth() + 1),
		date: toDou(t.getDate()),
		day: DAY[t.getDay()],
		hours: toDou(t.getHours()),
		minutes: toDou(t.getMinutes()),
		seconds: toDou(t.getSeconds()),
		milliseconds: t.getMilliseconds(),
	}
}