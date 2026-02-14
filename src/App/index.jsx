import { useRef, useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { styles } from './styles'

export function App() {
  const passwordInputRef = useRef(null)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit() {
    console.log({
      email,
      password,
    })
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="email"
          onSubmitEditing={() => {
            passwordInputRef.current.focus()
          }}
          returnKeyType="next"
          // Mesmo que o componente passe a ser controlled ao adicionar a prop
          // value e o onChange não esteja definido, o valor aparece e some
          // pois isso é controlado do lado nativo. Então o lado nativo informa
          // essa alteração para o JavaScript, mas como o valor no JavaScript
          // não foi alterado, ele retorna ao estado inicial.
          value={email}
          // Neste caso, o event contém todas as informações.
          // onChange={(event) => {
          //   setEmail(event.nativeEvent.text)
          // }}
          // E neste, o que está disponível é o texto do input.
          onChangeText={setEmail}
        />

        <Input
          ref={passwordInputRef}
          placeholder="Senha"
          secureTextEntry
          keyboardType="number-pad"
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
        />

        <Button onPress={handleSubmit}>Enviar</Button>
      </View>
    </SafeAreaView>
  )
}
