<template>
	<div class="dialog" v-if="show" @click="hideDialog">
		<div @click.stop class="dialog__content">
			<slot></slot>
		</div>
	</div>
</template>

<script setup>
import {defineProps} from 'vue';

defineOptions({
	name: 'my-dialog',
});
const props = defineProps({
	show: {
		type: Boolean,
		default: false,
	}
});
const emit = defineEmits({});

const hideDialog = () => {
	emit('update:show', false);
};
</script>

<style lang="scss" scoped>
.dialog{
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(0,0,0, 0.5);
	position: fixed;
	display: flex;

	&__content{
		margin: auto;
		background-color: #fff;
		border-radius: 12px;
		min-height: 50px;
		min-width: 300px;
		padding: 15px;
	}
}
</style>