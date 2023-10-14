<script setup lang="ts">

import {useFirstExam, useSecondExam, useThirdExam} from "~/composables/states";
import { directions } from "~/utils/sampleData";
import DirectionCard from "~/components/DirectionCard.vue";

const firstExam = useFirstExam()
const secondExam = useSecondExam()
const thirdExam = useThirdExam()
</script>

<template>
	<div class="flex gap-6 flex-col">
		<div class="flex items-baseline gap-3 page font-bold">
			<h3 class="text-5xl">{{firstExam.points + secondExam.points + thirdExam.points}}</h3>
			<p class="text-2xl">баллов</p>
		</div>
		<div class="flex gap-3">
			<ExamPointsDialog
				:exam-points="firstExam.points"
				:title="firstExam.exam.title"
				exam-number="1"
				:exam-icon="firstExam.exam.icon">
				<input type="number" max="100" min="36" name="first" id="first" v-model="firstExam.points">
			</ExamPointsDialog>
			<ExamPointsDialog
				:exam-points="secondExam.points"
				:title="secondExam.exam.title"
				exam-number=2
				:exam-icon="secondExam.exam.icon"
			>
				<input type="number" max="100" min="36" name="sec" id="sec" v-model="secondExam.points">
			</ExamPointsDialog>
			<ExamPointsDialog
				:exam-points="thirdExam.points"
				:title="thirdExam.exam.title"
				exam-number=3
				:exam-icon="thirdExam.exam.icon">
				<input type="number" max="100" min="36" name="thir" id="thir" v-model="thirdExam.points">
			</ExamPointsDialog>
		</div>
		<h4>Направления</h4>
		<div v-for="direction in directions">
			<DirectionCard
				:direction="direction"
				:chance="calculateChance(firstExam.points + secondExam.points + thirdExam.points, direction.passingScore).toFixed(2)"
			/>
		</div>
	</div>
</template>

<style>
	input {
		color: white;
		font-size: 2rem;
		font-weight: 800;
		width: fit-content;
		background-color: transparent;
	}
</style>
