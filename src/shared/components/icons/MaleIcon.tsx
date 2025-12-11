import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface MaleIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const MaleIcon: React.FC<MaleIconProps> = ({ 
  width = 64, 
  height = 64, 
  color = '#FFFFFF' 
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 64 64" fill="none">
      <Path
        d="M45 19V8H34M45 8L33 20M42 35C42 41.6274 36.6274 47 30 47C23.3726 47 18 41.6274 18 35C18 28.3726 23.3726 23 30 23C36.6274 23 42 28.3726 42 35Z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default MaleIcon;
