<template>
	<button>
		<slot></slot>
	</button>
</template>

<script setup>
defineOptions({
	name: 'my-button',
});

</script>

<style lang="scss" scoped>
	button{
		padding: 10px 25px;
		border: solid 2px teal;
		background-color: transparent;
		color: teal;
	}
</style>