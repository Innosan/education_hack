export function calculateChance(totalExamScores: number, passingScore: number): number {
	const chance = (totalExamScores / (passingScore * 1.78)) * 100

	if (chance >= 100) return 100
	else return chance
}
