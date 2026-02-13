import { useState } from 'react'
import { TextInput } from 'react-native'
import { styles } from './styles'

// O JSDoc é uma série de comentários que definem a tipagem do código. Não é
// necessário configurar nada para utilizar, ele já vem por padrão no VS Code.

// O @typedef permite criar tipos customizados.

// /**
//  * @typedef {object} InputProps
//  * @property {string} placeholder
//  * @property {boolean} secureTextEntry
//  */

/**
 * @param {import("react-native").TextInputProps} props
 */
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
