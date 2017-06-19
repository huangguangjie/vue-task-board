<template>
<div class="pd-select-box">
	<slot></slot>
</div>
</template>
<script>
export default {
	name: 'PickerCascadeBox'
}
</script>
<style scoped="">
	.pd-select-box {
		display: flex;
	}
</style>