import { SafeAreaView, TextInput, View } from 'react-native'
import { Button } from '../components/Button'
import { styles } from './styles'

// Enquanto na web, para criarmos os formulários, utilizamos o input, que
// contém várias aparências e funcionalidades, no React Native temos apenas o
// TextInput como componente nativo, que apenas aceita texto. Qualquer outro
// tipo de input como Checkbox, RadioButton, etc., deve ser criado do zero.

export function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {/* 
          Tanto no Android como no iOS, o TextInput não vem com nenhum estilo
          pré-definido.

          No iOS, a altura do input é a mesma do caret (barrinha que fica
          piscando ao digitar), então é recomendável definir uma altura mínima.

          A tipagem da prop style do TextInput é a mesma da prop style do
          componente Text: style?: StyleProp<TextStyle> | undefined, então é
          possível definir a cor do texto do input, por exemplo.

          O placeholder é um texto que aparece quando o input está vazio. A sua
          cor é definida pela prop placeholderTextColor.

          Para esconder a entrada de texto, usamos a prop secureTextEntry.
        */}
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaa"
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
