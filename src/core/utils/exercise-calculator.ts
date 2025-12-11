export const calculateExerciseLoad = (
  baseLoad: number,
  fitnessLevel: 'beginner' | 'intermediate' | 'advanced'
): number => {
  const multipliers = {
    beginner: 0.6,
    intermediate: 1.0,
    advanced: 1.4,
  };
  
  return baseLoad * multipliers[fitnessLevel];
};
