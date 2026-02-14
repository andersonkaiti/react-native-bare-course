import { SafeAreaView, View } from 'react-native'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { styles } from './styles'

export function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Input
          placeholder="E-mail"
          // Configura que tipo de teclado deve ser exibido
          keyboardType="email-address"
          // Configura que não deve capitalizar a primeira letra
          autoCapitalize="none"
          // Configura que não deve corrigir a primeira letra
          autoCorrect={false}
          autoComplete="email"
        />

        <Input placeholder="Senha" secureTextEntry keyboardType="number-pad" />

        <Button>Hello, Button!</Button>
      </View>
    </SafeAreaView>
  )
}
