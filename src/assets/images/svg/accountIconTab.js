import React from 'react';
import { SvgCss } from 'react-native-svg';

export default props => {
  return (
    <SvgCss
      xml={`
      <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 0C4.56586 0 2.59259 1.95716 2.59259 4.37143C2.59259 6.7857 4.56586 8.74286 7 8.74286C9.43414 8.74286 11.4074 6.7857 11.4074 4.37143C11.4074 1.95716 9.43414 0 7 0Z" fill="${props.color}"/>
<path d="M9.60096 10.6877C7.87789 10.4149 6.12211 10.4149 4.39904 10.6877L4.21435 10.7169C1.78647 11.1012 0 13.1783 0 15.6168C0 16.933 1.07576 18 2.40278 18H11.5972C12.9242 18 14 16.933 14 15.6168C14 13.1783 12.2135 11.1012 9.78565 10.7169L9.60096 10.6877Z" fill="${props.color}"/>
</svg>

`}
      // width={props.width}
      // height={props.height}
      style={props.style}
      {...props}
    />
  );
};
