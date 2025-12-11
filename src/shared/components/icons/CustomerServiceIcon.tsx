import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface CustomerServiceIconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const CustomerServiceIcon: React.FC<CustomerServiceIconProps> = ({
  width = 26,
  height = 25,
  color = '#FFFFFF',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 26 25" fill="none">
      <Path
        d="M13 13C16.866 13 20 10.0899 20 6.5C20 2.91015 16.866 0 13 0C9.13401 0 6 2.91015 6 6.5C6 10.0899 9.13401 13 13 13Z"
        fill={color}
      />
      <Path
        d="M3 25C3 25 0 25 0 22.2222C0 19.4444 3 11.1111 13 11.1111C23 11.1111 26 19.4444 26 22.2222C26 25 23 25 23 25H3Z"
        fill={color}
      />
      <Path
        d="M20 17C21.1046 17 22 16.1046 22 15C22 13.8954 21.1046 13 20 13C18.8954 13 18 13.8954 18 15C18 16.1046 18.8954 17 20 17Z"
        fill={color}
      />
      <Path
        d="M20 17V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H16"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
};
