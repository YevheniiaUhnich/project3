import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

interface ShowPasswordIconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const ShowPasswordIcon: React.FC<ShowPasswordIconProps> = ({
  width = 17,
  height = 14,
  color = '#896CFE',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 17 14" fill="none">
      <Path
        d="M8.5 1C3.5 1 1 7 1 7s2.5 6 7.5 6 7.5-6 7.5-6-2.5-6-7.5-6z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Circle
        cx="8.5"
        cy="7"
        r="2.5"
        stroke={color}
        strokeWidth={1.5}
        fill="none"
      />
    </Svg>
  );
};
