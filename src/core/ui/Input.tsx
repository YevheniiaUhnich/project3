import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ placeholder, ...props }) => {
  return <TextInput style={styles.input} placeholder={placeholder} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
  },
});
