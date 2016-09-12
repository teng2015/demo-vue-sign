<template>
	<div class="home">
		<h1 class="home__logo">知乎</h1>
		<h2 class="home__subtitle">与世界分享你的知识、经验和见解</h2>
		<div>
			<router-link to="/">注册</router-link>
			<router-link to="/signin">登录</router-link>
		</div>
		<keep-alive>
	    <router-view></router-view>		
		</keep-alive>
	</div>
</template>

<style lang="css" scoped>
.home__logo {
	width: 100px;
  height: 30px;
  background: url('~assets/logo.png') no-repeat;
  background-size: contain;
	font: 0/0 a;
	color: transparent;
	text-shadow: none;
	background-color: transparent;
	border: 0;
}
</style>