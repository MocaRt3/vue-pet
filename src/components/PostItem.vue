<template>
	<div class="posts__post">
		<div>
			<div><strong>Название: </strong>{{ post.title }}</div>
        	<div><strong>Описание: </strong>{{ post.body }}</div>
        	<div><strong>Айди: </strong>{{ post.id }}</div>
		</div>
		<div class="posts__btns">
			<my-button
			   class="posts__button"
			   @click="$router.push(`/posts/${post.id}`)"
			 >
			   Открыть
			</my-button>
			<my-button
			   class="posts__button"
			   @click="$emit('remove', post)"
			 >
			   Удалить
			</my-button>
		</div>
	</div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
	post: {
		type: Object,
		required: true,
	}
});

</script>

<style lang="scss" scoped>
.posts{
  &__post {
    padding: 15px;
    border: solid 2px teal;
    margin-bottom: 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
  }
  &__btns{
	display: flex;
	column-gap: 20px;
  }
  &__button{
	transition: 0.4s ease;
  }
  &__button:hover{
	transform: scale(110%);
  }

}
</style>