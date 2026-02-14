import { forwardRef, useState } from 'react'
import { TextInput } from 'react-native'
import { styles } from './styles'

/**
 * import("react").FunctionComponent | import("react").FC -> React.FC
 * Define a variável Input como sendo do tipo Functional Component
 * contendo as props do TextInput. É melhor utilizar o React, porque ele é
 * global, então não é necessário importar nada.
 *
 * @type {React.FC<import("react-native").TextInputProps>}
 */
export const Input = forwardRef((props, ref) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <TextInput
      ref={ref}
      style={[styles.input, isFocused && styles.inputFocused]}
      placeholder="E-mail"
      placeholderTextColor="#aaa"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    />
  )
})
