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
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="email"
          // O onSubmitEditing é chamado quando o usuário pressiona a tecla
          // "Enter" no teclado
          onSubmitEditing={() => console.log('clicked')}
          // Mantém o teclado aberto após o submit
          submitBehavior="submit"
          returnKeyType="next"
          // Por padrão é false e impede a execução do onSubmitEditing caso o
          // campo esteja vazio
          enablesReturnKeyAutomatically // * iOS only
        />

        <Input
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
