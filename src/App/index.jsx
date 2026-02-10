import { Button, SafeAreaView, ScrollView, View } from 'react-native'
import { styles } from './styles'

// No React Native, existem 6 componentes para lidar com elementos
// pressionáveis.

export function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <View style={styles.buttonsContainer}>
          {/*
            Precisa receber a prop title.

            Além disso, a estilização dele do
            android para iOS é totalmente diferente.

            Android: botão com fundo azul, feito de ripple e texto em caixa-alta.

            iOS: botão com fundo transparente, sem ripple e texto normal.

            Problemas:
            - Ele apenas aceita textos como conteúdo, e não ícones, números, etc.
            - Ele não tem a prop style.
          */}
          <Button
            title="My Button"
            color="#f00"
            onPress={() => alert('Button pressed')}
            disabled={false}
            touchSoundDisabled // * Android only
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
