<template>
	<div>
		<select :value="modelValue" @change="changeOption">
	<option disabled value="">Выберите из списка</option>
	<option 
		v-for="option in options" 
		:key="option.value" 
		:value="option.value"
	>
		{{option.name}}
	</option>
 </select>
	</div>
</template>

<script setup>
import { defineProps } from 'vue';

defineOptions({
	name: 'my-select',
});
const emit = defineEmits({});
const props = defineProps({
	modelValue:{
		type: String,
	},
	options: {
		type: Array,
		default: () => [],
	}
});

const changeOption = event => {
	emit('update:modelValue', event.target.value)
};
</script>

<style lang="scss" scoped>

</style>