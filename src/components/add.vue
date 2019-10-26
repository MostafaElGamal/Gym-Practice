<template>
  <div class="add-smoothie container">
  	<h2 class="center-align indigo-text">
  		Add New Practice
  	</h2>
  	<form @submit.prevent="AddPractice">
  		<div class="field title">
  			<label for="title">Practice Title</label>
  			<input type="text" name="title" v-model="title">
  		</div>
  		<div v-for="(ing, index) in ingredients" :key="index" class="field">  
  			<label for="ingredient">Practice</label>
  			<input type="text" name="ingredient" v-model="ingredients[index]">
        <li class="material-icons delete" @click="deleteIng(ing)" >delete</li>
  		</div>
  		<div class="field add-ingredient">
  			<label for="add-ingredient">Add Practice</label>
  			<input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
  		</div>
  		<div class="field center-align">
  			<p v-if="feedback" class="red-text">{{ feedback }}</p>
  			<button class="btn pink">Add Practice</button>
  		</div>
  	</form>
  </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'
export default {
  name: 'add',
  data(){
  	return{
  		title:null,
  		another:null,
  		feedback:null,
  		slug:null,
  		ingredients:[]
  	}
  },
  methods:{
  	addIng(){
  		if(this.another){
  			this.ingredients.push(this.another)
  			this.another = null
  			this.feedback = null
  		}else{
  			this.feedback = 'You must add value'
  		}
  	},
    deleteIng(ing){
      this.ingredients = this.ingredients.filter(ingredient => {
        return ingredient != ing
      })
    },
  	AddPractice(){
  		if(this.title){
  			this.feedback = null
  			this.slug = slugify(this.title, {
  				replacement:'-',
  				remove:/[!@#$%^&*()'"~|\-:@_+]/g,
  				lower:true
  			})
  			db.collection('smoothies').add({
  				title:this.title,
  				ingredients:this.ingredients,
  				slug:this.slug
  			})
  			.then( () => {
  				this.$router.push( {name:'index'} )
  			})
  			.catch( err => {
  				console.log(err)
  			})
  		}else{
  			this.feedback = 'You Must enter practice title'
  		}
  	}
  }
}
</script>
<style>
.add-smoothie{
	margin-top:60px;
	padding:20px;
	max-width:500px;
}
.add-smoothie h2{
	font-size:2em;
	margin: 20px auto;
}
.add-smoothie .field{
	margin: 20px auto;
  position: relative;
}
.add-smoothie .delete{
    position: absolute;
    right: 0;
    bottom: 16px;
    color: #aaa;
    cursor: pointer;
}
</style>