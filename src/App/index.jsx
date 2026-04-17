import { SafeAreaView, View } from 'react-native'
import { AppText } from '../components/AppText'
import { styles } from './styles'

/**
  No React Native, não existe herança de estilos, por isso, para definir uma
  mesma fonte a todos os textos, é necessário definir a propriedade
  fontFamily em cada componente de texto.

  No entanto, segundo a própria documentação do React Native, é recomendado
  criar um componente Text personalizado e aplicar a fonte desejada nele.
*/
export function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <AppText
          style={{
            fontSize: 32,
          }}
        >
          Hello, JStack
        </AppText>

        <AppText
          style={{
            fontSize: 48,
          }}
        >
          Hello, JStack
        </AppText>
      </View>
    </SafeAreaView>
  )
}
