import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface PasswordKeyIconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const PasswordKeyIcon: React.FC<PasswordKeyIconProps> = ({
  width = 27,
  height = 15,
  color = '#FFFFFF',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 27 15" fill="none">
      <Path
        d="M7.72161 7.49999H25.5M18.3972 7.5V11.0304M23.0608 7.5V12.9451M2.84318 1.5H6.37844C7.12026 1.5 7.72162 2.10886 7.72162 2.85993V12.1401C7.72162 12.8911 7.12026 13.5 6.37844 13.5H2.84318C2.10136 13.5 1.5 12.8911 1.5 12.1401V2.85993C1.5 2.10886 2.10136 1.5 2.84318 1.5Z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
