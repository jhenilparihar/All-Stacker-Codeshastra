import React, { useState } from 'react';
import './Quiz.css';

export default function Quiz() {
	const questions = [
		{
			questionText: 'How did the term cappuccino originate?',
			answerOptions: [
				{ answerText: 'It is the French term for “foam on coffee', isCorrect: false },
				{ answerText: 'From the habit of the Capuchin friar', isCorrect: true },
				{ answerText: 'It is Italian for “frothy coffee drink', isCorrect: false },
				{ answerText: 'It was a term invented by a coffee company.', isCorrect: false },
			],
		},
		{
			questionText: 'About how many espresso beans are required to make one espresso?',
			answerOptions: [
				{ answerText: '66', isCorrect: false },
				{ answerText: '42', isCorrect: true },
				{ answerText: '49', isCorrect: false },
				{ answerText: '80', isCorrect: false },
			],
		},
		{
			questionText: 'How many cups of coffee are consumed each year in the world?',
			answerOptions: [
				{ answerText: '400 billion', isCorrect: true },
				{ answerText: '300 billion', isCorrect: false },
				{ answerText: '90 billion', isCorrect: false },
				{ answerText: '2 billion', isCorrect: false },
			],
		},
		{
			questionText: 'What percentage of coffee drinkers prefer their coffee black?',
			answerOptions: [
				{ answerText: '10%', isCorrect: false },
				{ answerText: '36%', isCorrect: false },
				{ answerText: '30%', isCorrect: false },
				{ answerText: '40%', isCorrect: true },
			],
		},
		{
			questionText: ' About how many coffee plants are there in Brazil?',
			answerOptions: [
				{ answerText: '700 million', isCorrect: false },
				{ answerText: '2 billion', isCorrect: false },
				{ answerText: '4 billion', isCorrect: true },
				{ answerText: '7 billion', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='quiz_app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button id="button1" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}