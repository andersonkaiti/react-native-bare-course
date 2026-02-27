import { useState } from 'react'
import { Alert, Modal, SafeAreaView, Text, View } from 'react-native'
import { Button } from '../components/Button'
import { styles } from './styles'

export function App() {
  const [visible, setVisible] = useState(false)

  // Além da função alert() nativa do JS, o React Native tem a API nativa e out
  // of the box chamada Alert para lidar com alertas.

  // Enquanto a função alert() não permite customizar nada e ser bloqueante, a
  // API Alert permite customizar o alerta e não é bloqueante.

  // Limitação no Android: não é possível ter mais de 3 botões.

  function handleShowAlert() {
    Alert.alert(
      'Título do meu alerta',
      'Bloquear o usuário fará com que ele perca o acesso ao sistema',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancelar'),
          style: 'default', // * iOS only
        },
        {
          text: 'Bloquear',
          onPress: () => console.log('Bloquear usuário'),
          // Deixa o botão em negrito no iOS.
          isPreferred: true, // * iOS only
        },
      ],
      {
        // Permite fechar o alerta clicando no lado de fora do alerta.
        cancelable: true, // * Android only
        // Chamado quando o alerta é fechado.
        onDismiss: () => console.log('Alert dismissed'), // * Android only
        userInterfaceStyle: 'light', // * iOS only
      },
    )
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Button onPress={() => setVisible(true)}>Abrir Modal</Button>

        <Button onPress={handleShowAlert}>Mostrar alerta</Button>

        <Modal
          visible={visible}
          animationType="slide"
          statusBarTranslucent
          presentationStyle="pageSheet" // * iOS only
          onRequestClose={() => setVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text>Conteúdo do meu Modal!</Text>

              <Button
                style={{
                  paddingHorizontal: 20,
                }}
                onPress={() => setVisible(false)}
              >
                Fechar
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  )
}
