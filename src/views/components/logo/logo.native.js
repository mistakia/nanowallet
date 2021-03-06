import React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'

export default function Logo({ color, size }) {
  return (
    <Svg
      id='prefix__Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 1770.2 780.1'
      xmlSpace='preserve'>
      <Path
        fill={color}
        d='M985.7 390c0 55.6-45.1 100.6-100.6 100.6s-100.7-45-100.7-100.6c0-75.5-25.2-100.6-100.6-100.6S583.2 314.6 583.2 390c0 55.6-45.1 100.6-100.6 100.6s-100.7-45-100.7-100.6c0-55.6 45.1-100.6 100.6-100.6 75.5 0 100.6-25.2 100.6-100.6 0-55.6 45.1-100.6 100.6-100.6s100.6 45.1 100.6 100.6c0 75.5 25.2 100.6 100.6 100.6 55.8 0 100.8 45.1 100.8 100.6z'
      />
      <Circle fill={color} cx={281.2} cy={591.3} r={100.6} />
      <Path
        fill={color}
        d='M1589.6 188.7c0 55.6-45.1 100.6-100.6 100.6-75.5 0-100.6 25.2-100.6 100.6 0 55.6-45.1 100.6-100.6 100.6-75.5 0-100.6 25.2-100.6 100.6 0 55.6-45.1 100.6-100.6 100.6-55.6 0-100.6-45.1-100.6-100.6 0-55.6 45.1-100.6 100.6-100.6 75.5 0 100.6-25.2 100.6-100.6 0-55.6 45.1-100.6 100.6-100.6 75.5 0 100.6-25.2 100.6-100.6 0-55.6 45.1-100.6 100.6-100.6 55.5 0 100.6 45.1 100.6 100.6z'
      />
    </Svg>
  )
}
