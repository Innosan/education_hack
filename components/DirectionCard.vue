<script setup lang="ts">
import {highSchools} from "~/utils/sampleData";

const props = defineProps({
	direction: Object,
	chance: String
})
</script>

<template>
	<div class="rounded-xl bg-smooth-pink p-4 text-hard-brown font-extrabold flex gap-4 flex-col">
		<div class="flex gap-4">
			<p class="text-2xl">{{ props.direction.id }}</p>
			<div class="flex gap-2 items-center opacity-70">
				<img src="~assets/icons/ui/chance.svg" alt="">
				<p>{{ props.chance }} %</p>
			</div>

		</div>

		<p>{{ props.direction.title }}</p>
		<div class="flex gap-4 flex-wrap">
			<p v-for="tag in props.direction.availableHighSchools" class="text-smooth-pink bg-hard-brown p-2 rounded-3xl">
				#{{highSchools[tag].tag.toLowerCase()}}
			</p>
		</div>
	</div>
</template>
