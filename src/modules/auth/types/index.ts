export interface User {
  id: string;
  email: string;
  name: string;
  surname: string;
  photo?: string;
  birthday: string;
  age: number;
  height: number;
  weight: number;
  fitnessLevel: 'beginner' | 'intermediate' | 'advanced';
  goal: string;
}
