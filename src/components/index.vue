<template>
  <div class="index container">
    <div class="card" v-for="smothie in smothies" :key="smothie.id">
      <div class="card-content">
            <li class="material-icons delete" @click="deleteSmothie(smothie.id)">delete</li>
        <h2 class="indigo-text"> {{ smothie.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in smothie.ingredients" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      smothies:[
        {title:'ninja Brew', slug:'ninja-brew', ingredients:['bananas', 'coffee','milk'], id:'1'},
        {title:'Morning Mood', slug:'morning-mood', ingredients:['mango', 'line','juice'], id:'2'},
      ]
    }
  },
  methods:{
    deleteSmothie(id){
      this.smothies = this.smothies.filter( smothie => {
        return smothie.id != id
      })
    },
  }
}
</script>
<style>
  .index{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap:30px;
    margin-top:60px;
  }
  .index h2{
    font-size:1.8em;
    text-align:center;
    margin-top:0;
  }
  .index .ingredients{
    margin: 30px auto;
  }
  .index .ingredients li{
    display:inline-block;
  }
  .index .delete{
    position:absolute;
    top:4px;
    right:4px;
    cursor:pointer;
    color:#aaa;
    font-size:1.4em;
  }
</style>
