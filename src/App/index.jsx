import { SafeAreaView, Text, View } from 'react-native'
import { styles } from './styles'

/**
  Por padrão, as famílias tipográficas utilizadas serão as padrões de cada
  sistema operacional.

  Android: Roboto
  iOS: SF Pro (San Francisco)

  Para aplicar a fonte no iOS, é necessário informar o PostScript name da fonte,
  enquanto que, no Android, basta informar o nome do arquivo da fonte. Para
  evitar erros, é recomendado utilizar o nome PostScript em ambos os sistemas.

  A biblioteca react-native-asset adiciona as fontes automaticamente ao projeto:
  npx react-native-asset

  É necessário adicionar as fontes no array assets no arquivo
  react-native.config.js para que a biblioteca funcione.
*/
export function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 32,
            fontFamily: 'PlaywriteNO',
          }}
        >
          Hello, JStack
        </Text>
      </View>
    </SafeAreaView>
  )
}
