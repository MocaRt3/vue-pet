<template>
  <div>
    <form @submit.prevent class="add-post">
      <h2 class="add-post__title">Создание поста</h2>
      <my-input
        v-focus
        v-model="post.title"
        class="add-post__input"
        placeholder="Название"
        type="text"
      />
      <my-input
        v-model="post.body"
        class="add-post__input"
        placeholder="Описание"
        type="text"
      />
      <my-button @click="createPost" class="add-post__button">Создать</my-button>
    </form>
  </div>
</template>

<script setup>
import {ref, defineProps, watch} from 'vue';

const post = ref({
  title: '',
  body: '',
  id: 0,
});
const emit = defineEmits({});
const props = defineProps({
 
});

const createPost = () => {
  post.value.id = Date.now();
  emit('create', post.value)
	post.value = {
    title: '',
    body: '',
    id: 0,
  };
};

</script>

<style lang="scss" scoped>
.add-post {
  margin: 0 0 30px 0;
  display: flex;
  flex-direction: column;
  &__title {
    font-size: 24px;
    margin: 0 0 20px 0;
    letter-spacing: 2px;
    font-weight: 800;
  }


  &__button {
    align-self: flex-end;
  }
}
</style>