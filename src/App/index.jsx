import { useState } from 'react'
import { Modal, SafeAreaView, Text, View } from 'react-native'
import { Button } from '../components/Button'
import { styles } from './styles'

export function App() {
  const [visible, setVisible] = useState(false)

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Button onPress={() => setVisible(true)}>Abrir Modal</Button>

        <Modal
          visible={visible}
          animationType="slide"
          statusBarTranslucent
          // transparent
          presentationStyle="pageSheet" // * iOS only
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
