<template>
	<input
	 class="input" 
	 type="text"
	 :value="modelValue"
	 @input="updateInput"
	 >
</template>

<script setup>
import {defineProps, defineEmits} from 'vue';

defineOptions({
	name: 'my-input',
});

const props = defineProps({
	modelValue: [String, Number],
});
const emit = defineEmits({});
const updateInput = event => {
	emit('update:modelValue', event.target.value);
};

</script>

<style lang="scss" scoped>
.input{
	width: 100%;
    border: solid 2px teal;
    margin-bottom: 15px;
    padding: 10px 15px;
}
</style>