import {ImageProps} from 'react-native';
export type QuestionType = {
  description: string;
  id: number;
  image: ImageProps['src'];
  options: {answer: string; id: 'A' | 'B' | 'C'}[];
  playlist: string;
  question: string;
  type: string;
  user: {avatar: ImageProps['src']; name: string};
};
