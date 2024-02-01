<template>
	<div class="nawbar">
		<div class="nawbar__container">
			<div @click="$router.push('/')" class="nawbar__title">Vue 3</div>
			<naw class="nawbar__navigation navigation">
				<my-button @click="$router.push('/posts')" class="navigation__item">Посты</my-button>
				<my-button @click="$router.push('/about')" class="navigation__item">Информация</my-button>
			</naw>
		</div>
	</div>
</template>

<script setup>
defineOptions({
	name: 'nawbar'
})
</script>

<style lang="scss" scoped>
.nawbar{
	&__container{
		height: 70px;
		box-shadow: 0px 12px 8px 0px rgba(34, 60, 80, 0.24);
		display: flex;
		align-items: center;
		column-gap: 100px;
		margin: 0 0 40px 0;
		padding: 0 60px;
	}
	&__title{
		font-size: 24px;
		cursor: pointer;
	}
	&__navigation{
		display: flex;
		column-gap: 30px;
		
	}
}

.navigation{
	&__item{
		cursor: pointer;
		transition: 0.4s ease;
	}
	&__item:hover{
		transform: scale(110%);
		
	}
}
</style>