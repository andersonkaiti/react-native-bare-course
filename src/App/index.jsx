import { useRef } from 'react'
import { SafeAreaView, View } from 'react-native'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { styles } from './styles'

export function App() {
  const passwordInputRef = useRef(null)

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="email"
          onSubmitEditing={() => passwordInputRef.current.focus()}
          returnKeyType="next"
        />

        <Input
          ref={passwordInputRef}
          placeholder="Senha"
          secureTextEntry
          keyboardType="number-pad"
          returnKeyType="done"
          onSubmitEditing={() => console.log('send')}
        />

        <Button>Enviar</Button>
      </View>
    </SafeAreaView>
  )
}
