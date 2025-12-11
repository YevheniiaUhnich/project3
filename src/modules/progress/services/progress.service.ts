import type { ProgressEntry } from '../types';

export class ProgressService {
  async getProgress(): Promise<ProgressEntry[]> {
    return [];
  }

  async addProgress(entry: ProgressEntry): Promise<void> {}

  async deleteProgress(id: string): Promise<void> {}
}

export const progressService = new ProgressService();
