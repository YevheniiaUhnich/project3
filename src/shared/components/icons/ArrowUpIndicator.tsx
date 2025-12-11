import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface ArrowUpIndicatorProps {
  width?: number;
  height?: number;
  fill?: string;
}

const ArrowUpIndicator: React.FC<ArrowUpIndicatorProps> = ({
  width = 46,
  height = 32,
  fill = '#E2F163',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 31 22" fill="none">
      <Path
        d="M12.3302 1.44504C13.9297 -0.482202 16.8867 -0.482198 18.4862 1.44504L29.8869 15.1818C32.0504 17.7885 30.1965 21.7363 26.8089 21.7363H4.00754C0.619946 21.7363 -1.23394 17.7885 0.929525 15.1818L12.3302 1.44504Z"
        fill={fill}
      />
    </Svg>
  );
};

export default ArrowUpIndicator;
