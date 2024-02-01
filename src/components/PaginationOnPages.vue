<template>
	<div>
		<div class="wrapper__pages pages">
      		<div 
				class="pages__for" 
				:key="pageNumber"
				v-for="pageNumber in props.getTotalPages"
				:class="{
				'current-page': pageFrom === pageNumber
				}"
				@click="() => changePageFrom(pageNumber)"
			>
				{{pageNumber}}
				
      		</div>
    	</div>
	</div>
</template>

<script setup>
import {ref, defineProps, defineEmits} from 'vue';

const props = defineProps({
	getTotalPages: {
		type: Number,
		required: true,
	},
	pageFrom: {
		type: Number,
		required: true,
	}
});
const emit = defineEmits({})
const changePageFrom = pageNumber =>{
	emit("changePageFrom", pageNumber);
}




</script>

<style lang="scss" scoped>
.pages {
  display: flex;
  &__for{
    border: #000 solid 1px;
    padding: 10px;
  }
}
.current-page{
  border: teal solid 2px;
  cursor: pointer;
}
</style>	
				<!--  
				
				:class="{
				'current-page': page === pageNumber
				}"
				@click="changePage(pageNumber)"
			@click="$emit(changePageFrom, pageFrom)" -->