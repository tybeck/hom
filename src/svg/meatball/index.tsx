import * as React from 'react';
import Svg, { SvgProps, G, Path, Circle, Ellipse } from 'react-native-svg';

import { Theme } from '@hom/theme';

const Meatball = (props: SvgProps) => {
  const meatballFill = props.fill || Theme.colors.davysGrey;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={82.523}
      height={42.129}
      {...props}
    >
      <G data-name="Group 978" stroke={meatballFill}>
        <Path
          data-name="Path 5162"
          d="M1.249 24.982h80.023l-9.925 15.9H11.166Z"
          fill="none"
          strokeLinejoin="round"
          strokeWidth={2.5}
        />
        <Path
          data-name="Path 5163"
          d="M54.216 34.063h13.206"
          fill="none"
          strokeWidth={2.5}
        />
        <Path
          data-name="Path 5164"
          d="m74.593 24.982 2.324-4.156-2.324-3.148v-3.592l-2.976-1.491-1.629-3.371h-3.812L63.25 7.069l-3.272 2.535-3.368-.38-2.251 3.889"
          fill="none"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <Path
          data-name="Path 5165"
          d="m49.289 24.982 3.977-3.407v-3.841l2.039-2.944-3.032-3.145.993-3.121-3.977-2.1-.613-2.708h-4.279l-2.942-2.445-3.262 2.445-4.071-.572-.982 3.647-3.014 1.087v3.766l-2.093 2.719 1.363 2.666.729 1.819-.729 2.724 3.743 2.492"
          fill="none"
          strokeWidth={2}
        />
        <Path
          data-name="Path 5166"
          d="m28.812 13.128-2.717-4.067-3.529.4-2.981-2.167-3.125 2.167-3.9-.4-1.562 3.662-3.272 1.3.474 3.7-1.787 3.087 2.158 3.323"
          fill="none"
          strokeWidth={2}
        />
        <G
          data-name="Ellipse 36"
          transform="translate(15.956 13.404)"
          fill={meatballFill}
        >
          <Circle cx={2.126} cy={2.126} r={2.126} stroke="none" />
          <Circle cx={2.126} cy={2.126} r={1.626} fill="none" />
        </G>
        <G
          data-name="Ellipse 37"
          transform="translate(13.831 19.426)"
          fill={meatballFill}
        >
          <Circle cx={1.417} cy={1.417} r={1.417} stroke="none" />
          <Circle cx={1.417} cy={1.417} r={0.917} fill="none" />
        </G>
        <G
          data-name="Ellipse 38"
          transform="translate(24.246 18.151)"
          fill={meatballFill}
        >
          <Circle cx={1.417} cy={1.417} r={1.417} stroke="none" />
          <Circle cx={1.417} cy={1.417} r={0.917} fill="none" />
        </G>
        <G
          data-name="Ellipse 39"
          transform="translate(33.669 12.341)"
          fill={meatballFill}
        >
          <Circle cx={1.417} cy={1.417} r={1.417} stroke="none" />
          <Circle cx={1.417} cy={1.417} r={0.917} fill="none" />
        </G>
        <G
          data-name="Ellipse 40"
          transform="translate(36.149 17.3)"
          fill={meatballFill}
        >
          <Circle cx={2.126} cy={2.126} r={2.126} stroke="none" />
          <Circle cx={2.126} cy={2.126} r={1.626} fill="none" />
        </G>
        <G
          data-name="Ellipse 41"
          transform="translate(40.4 7.381)"
          fill={meatballFill}
        >
          <Circle cx={2.126} cy={2.126} r={2.126} stroke="none" />
          <Circle cx={2.126} cy={2.126} r={1.626} fill="none" />
        </G>
        <G
          data-name="Ellipse 42"
          transform="translate(44.509 13.758)"
          fill={meatballFill}
        >
          <Circle cx={1.417} cy={1.417} r={1.417} stroke="none" />
          <Circle cx={1.417} cy={1.417} r={0.917} fill="none" />
        </G>
        <G
          data-name="Ellipse 43"
          transform="translate(43.801 18.717)"
          fill={meatballFill}
        >
          <Circle cx={1.417} cy={1.417} r={1.417} stroke="none" />
          <Circle cx={1.417} cy={1.417} r={0.917} fill="none" />
        </G>
        <G
          data-name="Ellipse 44"
          transform="translate(55.42 18.151)"
          fill={meatballFill}
        >
          <Circle cx={1.417} cy={1.417} r={1.417} stroke="none" />
          <Circle cx={1.417} cy={1.417} r={0.917} fill="none" />
        </G>
        <G
          data-name="Ellipse 45"
          transform="translate(62.804 13.404)"
          fill={meatballFill}
        >
          <Ellipse cx={1.995} cy={1.948} rx={1.995} ry={1.948} stroke="none" />
          <Ellipse cx={1.995} cy={1.948} rx={1.495} ry={1.448} fill="none" />
        </G>
        <G
          data-name="Ellipse 46"
          transform="translate(65.906 19.426)"
          fill={meatballFill}
        >
          <Ellipse cx={1.451} cy={1.417} rx={1.451} ry={1.417} stroke="none" />
          <Ellipse cx={1.451} cy={1.417} rx={0.951} ry={0.917} fill="none" />
        </G>
      </G>
    </Svg>
  );
}

export {Meatball};
