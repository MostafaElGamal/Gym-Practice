<template>
	<div class="navbar">
		<nav class="nav-extended indigo darken-2">
			<div class="nav-content">
				<router-link to="">
					<span class="nav-title">Ninja Practice</span>
				</router-link>
				<a href="" class="btn-floating btn-large halfway-fab pink">
					<router-link to="">
						<li class="material-icons" style="margin-top:16px;">add</li>
					</router-link>
				</a>
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