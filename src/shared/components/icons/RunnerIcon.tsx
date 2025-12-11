import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface RunnerIconProps extends SvgProps {
  width?: number;
  height?: number;
}

export const RunnerIcon: React.FC<RunnerIconProps> = ({
  width = 60,
  height = 60,
  ...props
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 60 60" fill="none" {...props}>
      <Path
        d="M41.25 11.25C43.3211 11.25 45 9.57107 45 7.5C45 5.42893 43.3211 3.75 41.25 3.75C39.1789 3.75 37.5 5.42893 37.5 7.5C37.5 9.57107 39.1789 11.25 41.25 11.25Z"
        fill="#E2F163"
      />
      <Path
        d="M48.75 18.75L41.25 13.125L33.75 18.75L30 22.5L33.75 26.25L37.5 30L45 33.75L52.5 30L48.75 18.75Z"
        fill="#E2F163"
      />
      <Path
        d="M30 26.25L26.25 30L22.5 41.25L15 48.75L18.75 52.5L30 45L33.75 37.5L37.5 30L30 26.25Z"
        fill="#E2F163"
      />
      <Path
        d="M45 33.75L41.25 37.5L37.5 45L33.75 52.5L37.5 56.25L45 48.75L52.5 37.5L48.75 33.75L45 33.75Z"
        fill="#E2F163"
      />
    </Svg>
  );
};
