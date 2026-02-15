import { useRef, useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { TextArea } from '../components/Textarea'
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
        <TextArea placeholder="Descrição" />

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
          value={email}
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
