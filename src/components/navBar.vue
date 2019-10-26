<template>
	<div class="navbar">
		<nav class="nav-extended indigo darken-2">
			<div class="nav-content">
				<router-link :to="{name: 'index'}">
					<span class="nav-title">Gym Practice</span>
				</router-link>
				<router-link :to="{name:'add'}" class="btn-floating btn-large halfway-fab pink">
						<li class="material-icons" style="margin-top:16px;">add</li>
				</router-link>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
  name: 'navBar',
  data(){
  	return{

  	}
  }
}
</script>
<style>
	.navbar nav {
		padding: 0 20px;
	}
</style>