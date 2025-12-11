import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface FemaleIconLargeProps {
  width?: number;
  height?: number;
  color?: string;
}

const FemaleIconLarge: React.FC<FemaleIconLargeProps> = ({ 
  width = 45, 
  height = 81, 
  color = '#232323' 
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 53 89" fill="none">
      <Path
        d="M26.5 48.6541C38.9264 48.6541 49 38.6579 49 26.327C49 13.9961 38.9264 4 26.5 4C14.0736 4 4 13.9961 4 26.327C4 38.6579 14.0736 48.6541 26.5 48.6541ZM26.5 48.6541V85M40.465 66.0769H12.5513"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default FemaleIconLarge;
