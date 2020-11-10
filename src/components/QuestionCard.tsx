import React from 'react';
import { AnswerObject } from '../App';
import { Wrapper, BtnWrapper } from './QuestionCard.styles';

type Props = {
	question: string;
	answers: string[];
	callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
	userAnswer: AnswerObject | undefined;
	questionNumber: number;
	totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
	question,
	answers,
	callback,
	userAnswer,
	questionNumber,
	totalQuestions,
}) => {
	return (
		<Wrapper>
			<p>
				Question: {questionNumber} / {totalQuestions}
			</p>
			<p dangerouslySetInnerHTML={{ __html: question }}></p>
			<div>
				{answers.map((answer) => (
					<BtnWrapper
						correct={userAnswer?.correctAnswer === answer}
						userClicked={userAnswer?.answer === answer}
						key={answer}
					>
						<button
							disabled={userAnswer ? true : false}
							onClick={callback}
							value={answer}
						>
							<span dangerouslySetInnerHTML={{ __html: answer }} />
						</button>
					</BtnWrapper>
				))}
			</div>
		</Wrapper>
	);
};

export default QuestionCard;
