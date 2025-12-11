import AsyncStorage from '@react-native-async-storage/async-storage';

export class StorageService {
  async get<T>(key: string): Promise<T | null> {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      return null;
    }
  }

  async set<T>(key: string, value: T): Promise<void> {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {}
  }

  async remove(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {}
  }

  async clear(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch (error) {}
  }
}

export const storageService = new StorageService();
