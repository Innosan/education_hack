<script setup lang="ts">
import {Listbox, ListboxButton, ListboxOption, ListboxOptions} from "@headlessui/vue";
import {useFirstExam, useSecondExam, useThirdExam} from "~/composables/states";
import { exams } from "~/utils/sampleData";

let exam

const props = defineProps({
	examNumber: String
})

if (props.examNumber === "1") exam = useFirstExam()
else if (props.examNumber === "2") exam = useSecondExam()
else exam = useThirdExam()

</script>

<template>
	<Listbox v-model="exam.exam">
		<ListboxButton class="underline opacity-70 text-black">{{ exam.exam.title }}</ListboxButton>
		<transition
			enter-active-class="transition duration-100 ease-out"
			enter-from-class="transform scale-95 opacity-0"
			enter-to-class="transform scale-100 opacity-100"
			leave-active-class="transition duration-75 ease-out"
			leave-from-class="transform scale-100 opacity-100"
			leave-to-class="transform scale-95 opacity-0"
		>
			<ListboxOptions class="p-2 bg-hard-brown rounded-3xl fixed top-16 w-72 h-1/2 overflow-auto">
				<ListboxOption
					v-for="exam in exams"
					:key="exam.id"
					:value="exam"
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
						{{ exam.title }}
					</li>
				</ListboxOption>
			</ListboxOptions>
		</transition>
	</Listbox>
</template>
