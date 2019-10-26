<template>
	<div class="edit-smoothie container" v-if="smoothie">
		<h2>Edit Practice {{ smoothie.title }}</h2>
	  	<form @submit.prevent="EditPractice">
	  		<div class="field title">
	  			<label for="title">Practice Title</label>
	  			<input type="text" name="title" v-model=" smoothie.title">
	  		</div>
	  		<div v-for="(ing, index) in  smoothie.ingredients" :key="index" class="field">  
	  			<label for="ingredient">Practice</label>
	  			<input type="text" name="ingredient" v-model=" smoothie.ingredients[index]">
	        <li class="material-icons delete" @click="deleteIng(ing)" >delete</li>
	  		</div>
	  		<div class="field add-ingredient">
	  			<label for="add-ingredient">Add Practice</label>
	  			<input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
	  		</div>
	  		<div class="field center-align">
	  			<p v-if="feedback" class="red-text">{{ feedback }}</p>
	  			<button class="btn pink">Update Practice</button>
	  		</div>
	  	</form>
	</div>
</template>
<script>
import db from '@/firebase/init'
import slugify from 'slugify'
export default {
  name: 'edit',
  data(){
  	return{
  		smoothie: null,
  		another:null,
  		feedback:null
  	}
  },
  created(){
  	let ref = db.collection('smoothies').where('slug','==',this.$route.params.slugName )
  	ref.get().then( res => {
  		res.forEach( doc => {
  			this.smoothie = doc.data()
  			this.smoothie.id = doc.id
  		})
  	})
  },
  methods:{
  	addIng(){
  		if(this.another){
  			this.smoothie.ingredients.push(this.another)
  			this.another = null
  			this.feedback = null
  		}else{
  			this.feedback = 'You must add value'
  		}
  	},
    deleteIng(ing){
      this.smoothie.ingredients = this.smoothie.ingredients.filter(ingredient => {
        return ingredient != ing
      })
    },
  	EditPractice(){
  		if(this.smoothie.title){
  			this.feedback = null
  			this.smoothie.slug = slugify(this.smoothie.title, {
  				replacement:'-',
  				remove:/[!@#$%^&*()'"~|\-:@_+]/g,
  				lower:true
  			})
  			db.collection('smoothies').doc(this.smoothie.id).update({
  				title:this.smoothie.title,
  				ingredients:this.smoothie.ingredients,
  				slug:this.smoothie.slug
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
.edit-smoothie{
	margin-top:60px;
	padding:20px;
	max-width:500px;
}
.edit-smoothie h2{
	font-size:2em;
	margin: 20px auto;
}
.edit-smoothie .field{
	margin: 20px auto;
  position: relative;
}
.edit-smoothie .delete{
    position: absolute;
    right: 0;
    bottom: 16px;
    color: #aaa;
    cursor: pointer;
}
</style>