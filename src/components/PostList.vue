<template>
  <div>
    <div v-if="posts.length > 0" class="posts">
      <h2 class="posts__title">Список постов</h2>
      <transition-group name="post-list">
        <post-item 
          :post="post" v-for="post in posts" 
          :key="post.id"
          @remove="$emit('remove', post)"
        />
      </transition-group>
    </div>
    <h2 v-else style="color: red; font-size: 24px;: red">Список постов пуст</h2>
  </div>
</template>

<script setup>
import PostItem from  '../components/PostItem.vue'
import {defineProps} from 'vue'

const props = defineProps({
	posts: {
		type: Array,
		required: true,
	}
});

</script>

<style lang="scss" scoped>
.posts {
  &__title {
    font-size: 24px;
    margin: 0 0 20px 0;
    letter-spacing: 2px;
    font-weight: 800;
    font-size: 24px;
    margin: 0 0 20px 0;
    letter-spacing: 2px;
    font-weight: 800;
  }

}
.post-list-tem{
  display: flex;
  margin: right;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.3s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translate(130px);
}
.post-list-move{
  transition: transform 0.3s ease;
}
</style>