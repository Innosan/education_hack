export const useFirstExam = () => useState('first-exam', () => new Object(
	{
		exam: exams[0],
		points: 36
	}
))

export const useSecondExam = () => useState('second-exam', () => new Object(
	{
		exam: exams[0],
		points: 36
	}
))

export const useThirdExam = () => useState('third-exam', () => new Object(
	{
		exam: exams[0],
		points: 36
	}
))
