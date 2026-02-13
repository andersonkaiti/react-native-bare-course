import { Pressable, Text } from 'react-native'
import { style } from './styles'

/**
 * @param {import("react-native").PressableProps} props
 */
export function Button({ children, disabled, ...props }) {
  return (
    <Pressable
      style={({ pressed }) => [
        style.button,
        pressed && style.buttonActive,
        disabled && style.buttonDisabled,
      ]}
      disabled={disabled}
      {...props}
    >
      <Text style={[style.buttonLabel, disabled && style.buttonLabelDisabled]}>
        {children}
      </Text>
    </Pressable>
  )
}
