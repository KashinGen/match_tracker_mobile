import React from 'react';
import { ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export const Icon = ({
  width = 20,
  height = 20,
  color = '#B4B5B6',
  style: customStyle = null, 
}: {
  width?: number;
  height?: number;
  color?: string;
  style?: ViewStyle | ViewStyle[] | null; 
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      style={customStyle}
    >
      <Path
        d="M14.932 6.81563H5.06536C4.26536 6.81563 3.86536 7.78229 4.43203 8.34896L8.74869 12.6656C9.44036 13.3573 10.5654 13.3573 11.257 12.6656L12.8987 11.024L15.5737 8.34896C16.132 7.78229 15.732 6.81563 14.932 6.81563Z"
        fill={color}
      />
    </Svg>
  );
};