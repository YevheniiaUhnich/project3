import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { theme } from '@/core/theme/theme';
import { Logo } from '@/shared';

export const LaunchScreen: React.FC = () => {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handleScreenPress = (): void => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 0.9,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start(() => {
      router.push('/onboarding');
    });
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Animated.View
          style={[
            styles.content,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          <Logo width={135} height={63} />
          <Text style={styles.title}>
            <Text style={styles.titleBold}>FIT</Text>
            <Text style={styles.titleRegular}>BODY</Text>
          </Text>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.launchBackground,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 20,
    letterSpacing: 0,
  },
  titleBold: {
    color: theme.colors.launchLogoYellow,
    fontWeight: '800',
    fontStyle: 'italic',
  },
  titleRegular: {
    color: theme.colors.launchLogoYellow,
    fontWeight: '400',
    fontStyle: 'italic',
  },
});
