import React from "react";

type Props = {
  question: string;
  answer: string[];
  callback: any;
  userAnswer: string;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionBox: React.FC<Props> = ({
  question,
  answer,
  callback,
  questionNumber,
  totalQuestions,
  userAnswer,
}) => {
  return (
    <div>
      <p className="number">
        Question: {questionNumber} / {totalQuestions}
      </p>
    </div>
  );
};

export default QuestionBox;
