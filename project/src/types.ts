export type Topic = {
  id: string;
  name: string;
  icon: string;
  description: string;
};

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

export type Question = {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
};

export type UserAnswer = {
  questionId: string;
  answer: string;
};

export type QuizState = {
  currentQuestion: number;
  answers: UserAnswer[];
  score: number;
};