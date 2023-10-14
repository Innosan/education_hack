<script setup lang="ts">
import { ref } from "vue";
import {
	Listbox,
	ListboxButton,
	ListboxOptions,
	ListboxOption,
} from "@headlessui/vue";

import {highSchools} from "~/utils/sampleData";

const selectedPerson = ref(highSchools[0]);
</script>

<template>
	<Listbox v-model="selectedPerson">
		<ListboxButton class="underline opacity-70">{{ selectedPerson.tag }}</ListboxButton>
		<transition
			enter-active-class="transition duration-100 ease-out"
			enter-from-class="transform scale-95 opacity-0"
			enter-to-class="transform scale-100 opacity-100"
			leave-active-class="transition duration-75 ease-out"
			leave-from-class="transform scale-100 opacity-100"
			leave-to-class="transform scale-95 opacity-0"
		>
			<ListboxOptions class="p-2 bg-hard-brown rounded-3xl fixed top-16 w-72">
				<ListboxOption
					v-for="person in highSchools"
					:key="person.id"
					:value="person"
					v-slot="{ active, selected }"
					class="p-2"
				>
					<li
						class="rounded-2xl p-2"
						:class="{
						'bg-smooth-pink text-hard-brown font-bold': active,
						'bg-hard-brown text-white': !active,
						}"
					>
						{{ person.title }}
					</li>
				</ListboxOption>
			</ListboxOptions>
		</transition>
	</Listbox>
</template>

<style scoped></style>
