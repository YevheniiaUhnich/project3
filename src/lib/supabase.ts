import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const supabaseUrl = 'https://jyydjstfulfxfuuotefm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5eWRqc3RmdWxmeGZ1dW90ZWZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzMzkyNzMsImV4cCI6MjA4MDkxNTI3M30.MfBoyMn0BvNHDGVEaWWExk7-E0OsHZp3R7KpryuqxVI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
