import { Tabs } from 'expo-router';
import { HomeIcon } from '../../src/shared/components/icons/HomeIcon';
import { LibraryIcon } from '../../src/shared/components/icons/LibraryIcon';
import { FavoritesIcon } from '../../src/shared/components/icons/FavoritesIcon';
import { ChatIcon } from '../../src/shared/components/icons/ChatIcon';


export default function TabsLayout() {
  return (
    <Tabs 
      screenOptions={{ 
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#B3A0FF',
          height: 59,
          borderTopColor: '#FFFFFF',
          paddingBottom: 0,
        },
        tabBarActiveTintColor: '#E2F163',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarShowLabel: false,
        tabBarIconStyle: {
          marginTop: 0,
        },
      }}
    >
      <Tabs.Screen 
        name="index"
        options={{ 
          href: null,
        }} 
      />
      <Tabs.Screen 
        name="home" 
        options={{ 
          title: 'Home',
          tabBarIcon: () => <HomeIcon width={25} height={27} color="#FFFFFF" />,
        }} 
      />
      <Tabs.Screen 
        name="library" 
        options={{ 
          title: 'Library',
          tabBarIcon: () => <LibraryIcon width={25} height={29} color="#FFFFFF" />,
        }} 
      />
      <Tabs.Screen 
        name="favorites" 
        options={{ 
          title: 'Favorites',
          tabBarIcon: () => <FavoritesIcon width={28} height={28} color="#FFFFFF" />,
        }} 
      />
      <Tabs.Screen 
        name="chat" 
        options={{ 
          title: 'Chat',
          tabBarIcon: () => <ChatIcon width={32} height={31} color="#FFFFFF" />, 
        }} 
      />
      <Tabs.Screen 
        name="search"
        options={{ 
          href: null,
        }} 
      />
      <Tabs.Screen 
        name="music"
        options={{ 
          href: null,
        }} 
      />
      <Tabs.Screen 
        name="profile"
        options={{ 
          href: null,
        }} 
      />
      <Tabs.Screen 
        name="profile-settings"
        options={{ 
          href: null,
        }} 
      />
      <Tabs.Screen 
        name="settings"
        options={{ 
          href: null,
        }} 
      />
      <Tabs.Screen 
        name="notifications-settings"
        options={{ 
          href: null,
        }} 
      />
      <Tabs.Screen 
        name="password-settings"
        options={{ 
          href: null,
        }} 
      />
      <Tabs.Screen 
        name="help-faqs"
        options={{ 
          href: null,
        }} 
      />
      <Tabs.Screen 
        name="contact-us"
        options={{ 
          href: null,
        }} 
      />
    </Tabs>
  );
}
