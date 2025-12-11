import APIClient from './client';

export class ExerciseAPI extends APIClient {
  constructor() {
    super('https://api.example.com');
  }

  async searchExercises(query: string) {
    return this.get(`/exercises?search=${query}`);
  }

  async getExerciseById(id: string) {
    return this.get(`/exercises/${id}`);
  }
}

export const exerciseAPI = new ExerciseAPI();
