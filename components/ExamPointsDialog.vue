<script setup lang="ts">
import {
	TransitionRoot,
	TransitionChild,
	Dialog,
	DialogPanel,
	DialogTitle,
} from '@headlessui/vue'

const isOpen = ref(false)

function closeModal() {
	isOpen.value = false
}
function openModal() {
	isOpen.value = true
}

const props = defineProps({
	examPoints: Number,
	title: String,
	examNumber: String,
	examIcon: String
})
</script>

<template>
	<div class="inset-0 flex items-center justify-center">
		<button
			type="button"
			@click="openModal"
			class="flex gap-3 font-bold items-center rounded-md bg-smooth-pink px-4 py-2 text-sm text-hard-brown hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
		>
			<img :src="`/_nuxt/assets/icons/exams/${examIcon}`" alt="Exam icon">
			{{examPoints}}
		</button>
	</div>
	<TransitionRoot appear :show="isOpen" as="template">
		<Dialog as="div" @close="closeModal" class="relative z-10">
			<TransitionChild
				as="template"
				enter="duration-300 ease-out"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="duration-200 ease-in"
				leave-from="opacity-100"
				leave-to="opacity-0"
			>
				<div class="fixed inset-0 bg-black bg-opacity-25" />
			</TransitionChild>

			<div class="fixed inset-0 overflow-y-auto">
				<div
					class="flex min-h-full items-center justify-center p-4 text-center"
				>
					<TransitionChild
						as="template"
						enter="duration-300 ease-out"
						enter-from="opacity-0 scale-95"
						enter-to="opacity-100 scale-100"
						leave="duration-200 ease-in"
						leave-from="opacity-100 scale-100"
						leave-to="opacity-0 scale-95"
					>
						<DialogPanel
							class="w-full max-w-md transform overflow-hidden rounded-2xl bg-neutral-800 p-6 text-left align-middle shadow-xl transition-all dialog"
						>
							<DialogTitle
								as="h3"
								class="text-lg font-medium leading-6 text-white opacity-80"
							>
								Выбор экзамена
							</DialogTitle>

							<div class="flex flex-col">
								<slot/>

								<ExamSelect
									:exam-number="examNumber"
								/>
							</div>

							<div class="mt-4">
								<button
									type="button"
									class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
									@click="closeModal"
								>
									Закрыть
								</button>
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<style scoped>
	.dialog {
		height: 400px;
	}
</style>
