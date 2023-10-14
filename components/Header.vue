<script setup lang="ts"></script>

<template>
	<nav>
		<ul class="flex gap-3">
			<li><NuxtLink to="/">Главная</NuxtLink></li>
			<li><NuxtLink to="/schools">Вузы</NuxtLink></li>
		</ul>
	</nav>
</template>

<style scoped>
a {
	font-size: 1.5rem;
	font-weight: 800;

	opacity: 0.7;
}
.router-link-active {
	transition: 0.3s;
	opacity: 1;

	color: #ffdadb;
}
</style>
