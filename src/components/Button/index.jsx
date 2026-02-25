import { Pressable, Text } from 'react-native'
import { styles } from './styles'

/**
 * @param {import("react-native").PressableProps} props
 */
export function Button({ children, disabled, style, ...props }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonActive,
        disabled && styles.buttonDisabled,
        style,
      ]}
      disabled={disabled}
      {...props}
    >
      <Text
        style={[styles.buttonLabel, disabled && styles.buttonLabelDisabled]}
      >
        {children}
      </Text>
    </Pressable>
  )
}
