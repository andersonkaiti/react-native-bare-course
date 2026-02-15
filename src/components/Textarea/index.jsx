import { forwardRef, useState } from 'react'
import { TextInput } from 'react-native'
import { styles } from './styles'

// O textarea é um input que quebra a linha à medida que o texto aumenta.
// Não existe um componente nativo para isso no React Native.

// Com a prop multiline, o textarea quebra a linha à medida que o texto
// aumenta. No entanto, no Android o placeholder e o texto digitado
// ficam no meio do input até que surja a primeira quebra de linha.

/**
 * @type {React.FC<import("react-native").TextInputProps>}
 */
export const TextArea = forwardRef((props, ref) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <TextInput
      ref={ref}
      style={[styles.textarea, isFocused && styles.textareaFocused]}
      placeholderTextColor="#aaa"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      textAlignVertical="top" // * Android only
      {...props}
      multiline // Fica abaixo do spread para não ser sobrescrito
    />
  )
})
