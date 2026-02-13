import { useState } from 'react'
import { TextInput } from 'react-native'
import { styles } from './styles'

export function Input(props) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <TextInput
      style={[styles.input, isFocused && styles.inputFocused]}
      placeholder="E-mail"
      placeholderTextColor="#aaa"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    />
  )
}
