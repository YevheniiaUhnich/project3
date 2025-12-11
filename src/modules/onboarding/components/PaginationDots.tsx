import React from 'react';
import { View, StyleSheet } from 'react-native';

interface PaginationDotsProps {
  total: number;
  currentIndex: number;
}

export const PaginationDots: React.FC<PaginationDotsProps> = ({ total, currentIndex }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === currentIndex ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  activeDot: {
    backgroundColor: '#E2F163',
    width: 24,
  },
  inactiveDot: {
    backgroundColor: '#666666',
  },
});
