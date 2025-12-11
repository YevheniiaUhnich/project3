export interface ProgressEntry {
  id: string;
  date: string;
  weight?: number;
  measurements?: {
    chest?: number;
    waist?: number;
    hips?: number;
  };
  notes?: string;
}
