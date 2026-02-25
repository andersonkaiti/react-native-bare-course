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
          O React Native já traz o componente Modal out-of-the-box. Não importa
          onde ele é posicionado no código, ele sempre aparecerá acima de todos
          os outros componentes e não respeitará a SafeAreaView.
          
          Apesar de ele aceitar a prop style, ela não funciona. Para controlar
          os estilos, é necessário adicionar uma View dentro, pois o Modal
          serve apenas como uma casca da lógica de abertura e fechamento.
          
          A prop visible permite controlar a visibilidade do Modal, e por
          padrão ela é true.

          A prop type permite controlar o tipo de animação que será usada
          para abrir e fechar o Modal.

          A prop statusBarTranslucent (* Android only) permite que o Modal seja
          aberto acima da statusBar.
        */}
        <Modal visible={visible} animationType="fade" statusBarTranslucent>
          <View style={styles.modalContainer}>
            <Text style={{ color: 'white' }}>Conteúdo do meu Modal!</Text>

            <Button
              style={{
                paddingHorizontal: 20,
              }}
              onPress={() => setVisible(false)}
            >
              Fechar
            </Button>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  )
}
