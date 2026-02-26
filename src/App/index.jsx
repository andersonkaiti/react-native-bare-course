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

        {/*
          Quando o usuário está utilizando os recursos do SO, ele pode fechar o
          modal, no caso do page/modal sheet, clicando no botão de voltar do
          celular ou arrastando para baixo. Para detectar esse evento e alterar
          o estado do modal, utilizamos a prop onRequestClose.
        */}
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
