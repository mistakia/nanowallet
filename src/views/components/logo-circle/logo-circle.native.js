import React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'

export default function LogoCircle({ color }) {
  return (
    <Svg x={0} y={0} viewBox='0 0 1770.2 780.1'>
      <Path
        d='M885.1 106.2c-156.7 0-283.8 127.1-283.8 283.8 0 156.7 127.1 283.8 283.8 283.8 156.7 0 283.8-127.1 283.8-283.8 0-156.7-127.1-283.8-283.8-283.8z'
        fill={color}
      />
      <Path
        fill='#FFF'
        d='M907.5 390c0 12.4-10 22.4-22.4 22.4s-22.4-10-22.4-22.4c0-16.8-5.6-22.4-22.4-22.4S818 373.3 818 390c0 12.4-10 22.4-22.4 22.4s-22.4-10-22.4-22.4 10-22.4 22.4-22.4c16.8 0 22.4-5.6 22.4-22.4 0-12.4 10-22.4 22.4-22.4s22.4 10 22.4 22.4c0 16.8 5.6 22.4 22.4 22.4 12.2.1 22.3 10.1 22.3 22.4z'
      />
      <Circle fill='#FFF' cx={750.9} cy={434.8} r={22.4} />
      <Path
        fill='#FFF'
        d='M1041.6 345.3c0 12.4-10 22.4-22.4 22.4-16.8 0-22.4 5.6-22.4 22.4 0 12.4-10 22.4-22.4 22.4-16.8 0-22.4 5.6-22.4 22.4 0 12.4-10 22.4-22.4 22.4s-22.4-10-22.4-22.4 10-22.4 22.4-22.4c16.8 0 22.4-5.6 22.4-22.4 0-12.4 10-22.4 22.4-22.4 16.8 0 22.4-5.6 22.4-22.4 0-12.4 10-22.4 22.4-22.4s22.4 10.1 22.4 22.4z'
      />
    </Svg>
  )
}
