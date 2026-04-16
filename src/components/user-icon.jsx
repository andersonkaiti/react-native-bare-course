import Svg, { Circle, ClipPath, Defs, G, Path } from 'react-native-svg'

export function UserIcon(props) {
  return (
    <Svg width={100} height={100} viewBox="0 0 100 100" fill="none" {...props}>
      <G clipPath="url(#clip0_1_2)" fill="#000">
        <Circle cx={50} cy={100} r={48} />
        <Circle cx={50} cy={27} r={21} />
      </G>
      <Defs>
        <ClipPath id="clip0_1_2">
          <Path fill="#fff" d="M0 0H100V100H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
