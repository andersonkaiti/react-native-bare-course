import { SafeAreaView, TextInput, View } from 'react-native'
import { Button } from '../components/Button'
import { styles } from './styles'

export function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaa"
          editable
          // readOnly
          // textAlign="left"
          // maxLength={9}
          // caretHidden={false}
          // cursorColor="#f00" // * Android only
          // selectionColor="#f00" // Também altera o cursor do iOS
          autoFocus // Foca o input ao abrir a tela
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          secureTextEntry
        />

        <Button>Hello, Button!</Button>
      </View>
    </SafeAreaView>
  )
}
