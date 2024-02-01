<template>
	<div class="item">
		<h1 class="item__title">Это страница поста с ID =  {{ $route.params.id }}</h1>
	</div>
</template>

<script>

</script>

<style lang="scss" scoped>
.item{
	&__title{
		font-size: 32px;
		margin: 0 0 0 60px;
		font-weight: 800;
	}
}
</style>