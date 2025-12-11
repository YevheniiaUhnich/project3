import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface FemaleIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const FemaleIcon: React.FC<FemaleIconProps> = ({ 
  width = 64, 
  height = 64, 
  color = '#232323' 
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 64 64" fill="none">
      <Path
        d="M32 42C38.6274 42 44 36.6274 44 30C44 23.3726 38.6274 18 32 18C25.3726 18 20 23.3726 20 30C20 36.6274 25.3726 42 32 42ZM32 42V56M26 50H38"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default FemaleIcon;
