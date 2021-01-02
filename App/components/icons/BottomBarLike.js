import * as React from "react";
import Svg, { Path } from 'react-native-svg';

function SvgLike() {
  return (
    <Svg width={24} height={22} fill="none" viewBox="0 0 24 22">
      <Path
        d="M12 20.309C-9.668 8.333 5.5-4.667 12 3.554c6.5-8.22 21.667 4.78 0 16.755z"
        fill="#22211F"
        stroke="#22211F"
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default SvgLike;

