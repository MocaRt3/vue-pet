<template>
	<div class="wrapper">
	  <h1 class="wrapper__title">Страница с постами</h1>
	  <my-input placeholder="Поиск" v-model="searchQuery"/>
	  <div class="wrapper__button-cont">
		<my-button @click="dialogVisible = true" class="wrapper__button">Создать пост</my-button>
		<my-select 
		  class="wrapper__select"
		  v-model="selectedSort"
		  :options="sortOptions"
		>
		
		</my-select>
	  </div>
		<my-dialog v-model:show="dialogVisible">
		<post-form  @create="createPost"/>
	  </my-dialog>
		<post-list 
	  :posts="sorteredAndSearchPosts"
	  @remove="removePost"
	  v-if="!isPostLoading"
	  />
	  <div v-else style="color: red; font-size: 24px;: red">Идет загрузка...</div>
	  
	  <pagination-on-pages @changePageFrom="changePage" :pageFrom="page" :getTotalPages="totalPages"/>
	</div>
  </template>
  
  <script setup>
  import { onMounted, ref, watch, computed, } from "vue";
  import PostList from  '@/components/PostList.vue';
  import PostForm from  '@/components/PostForm.vue';
  import PaginationOnPages from "@/components/PaginationOnPages.vue";
  import axios from 'axios';
  
  let posts = ref([
  
  ]);
  let dialogVisible = ref(false);
  let isPostLoading = ref(true);
  let selectedSort = ref('');
  let sortOptions = [
	{value: 'title', name: 'По названию'},
	{value: 'body', name: 'По описанию'},
	{value: 'id', name: 'По айди'},
  ];
  let searchQuery = ref('')
  let page = ref(1);
  let limit = ref(10);
  let totalPages = ref(0);
  const observerEl = ref(null);
  
  const createPost = (post) => {
	posts.value.push(post);
	dialogVisible.value = false;
  }; 
  const removePost = post => posts.value = posts.value.filter(i=>i.id !== post.id );
  
  async function fetchPosts(){
	try{
	  isPostLoading.value = true;
		const respons = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10', {
		params: {
		  _page: page.value,
		  _limit: limit.value,
		}
		});
		totalPages.value = Math.ceil(respons.headers['x-total-count'] / limit.value);
		posts.value = respons.data;
		console.log(totalPages.value)
	  
	} catch(e){
	  alert(`Ошибка: ${e}`)
	} finally{
	  isPostLoading.value = false;
	}
  }
  
  onMounted(()=>{
	fetchPosts();
  
  });
  
  const sorteredPosts = computed({
	get(){
	  return posts.value.sort((post1, post2)=>{
	  if(typeof post1[selectedSort.value] == 'number'){
		return post2[selectedSort.value] - (post1[selectedSort.value]);
	  } else{
		return post1[selectedSort.value]?.localeCompare(post2[selectedSort.value]);
	  }
	});
	}
  });
  
  const sorteredAndSearchPosts = computed({
	get(){
	  return sorteredPosts.value.filter(post => post.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
	}
  });
  
  const changePage = (pageNumber) => {
	page.value = pageNumber;
	fetchPosts()
  };
  
  </script>
  
  <style lang="scss" >
  .wrapper {
	padding: 20px;
  
	&__title{
	  font-size: 24px;
	  margin: 0 0 20px 0;
	  letter-spacing: 2px;
	  font-weight: 800;
	}
  
	&__button-cont{
	  display: flex;
	  column-gap: 30px;
	  margin: 0 0 40px 0;
	}
	&__select{
	  border: solid 1px #000;
	  
	}
  }
  
  
  </style>