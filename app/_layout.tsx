import { Stack } from 'expo-router';
import { AuthProvider } from '../src/contexts/AuthContext';
import { useProtectedRoute } from '../src/hooks/useProtectedRoute';

function RootLayoutNav() {
  useProtectedRoute();
  
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
