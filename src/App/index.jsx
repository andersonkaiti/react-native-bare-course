import { useState } from 'react'
import {
  ActionSheetIOS,
  Alert,
  Modal,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native'
import { Button } from '../components/Button'
import { styles } from './styles'

export function App() {
  const [visible, setVisible] = useState(false)

  // const [theme, setTheme] = useState(Appearance.getColorScheme())

  /**
    O React Native fornece uma API nativa que permite capturar o esquema de
    cores do sistema (light ou dark):

    const theme = Appearance.getColorScheme()

    No iOS o fundo do aplicativo assume a cor do sistema.

    No entanto, a cor só é atualizada quando o aplicativo é aberto.

    Para atualizar a cor quando o usuário muda o esquema de cores do sistema,
    precisamos usar o método addChangeListener e criar um state para
    re-renderizar o componente.

    O método addChangeListener retorna um objeto com o método remove(), que
    deve ser chamado quando o componente for desmontado para evitar memory leak.
  */

  // useEffect(() => {
  //   const subscription = Appearance.addChangeListener(({ colorScheme }) => {
  //     setTheme(colorScheme)
  //   })

  //   return () => {
  //     subscription.remove()
  //   }
  // }, [])

  /**
    No entanto, o React Native também fornece um hook nativo que permite
    capturar o esquema de cores do sistema (light ou dark):

    const theme = useColorScheme()

    O hook useColorScheme retorna a cor do sistema e permite atualizar de forma
    reativa quando o usuário muda o esquema de cores do sistema.
  */
  const theme = useColorScheme()

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
          isPreferred: true, // * iOS only
        },
      ],
      {
        cancelable: true, // * Android only
        onDismiss: () => console.log('Alert dismissed'), // * Android only
        userInterfaceStyle: 'light', // * iOS only
      },
    )
  }

  function handleShowPrompt() {
    // * iOS only
    // Ele é um alert que permite inserir alguma informação.
    Alert.prompt(
      'Responda:',
      'Qual o melhor curso da internet?',
      // (text) => console.log(`Digitou: ${text}`),9
      [
        {
          text: 'Cancelar',
          style: 'cancel',
          onPress: (value) => console.log(`Cancelou: ${value}`),
        },
        {
          text: 'Enviar',
          isPreferred: true,
          onPress: (value) => console.log(`Enviou: ${value}`),
        },
      ],
      'plain-text',
      '', // Valor default
      '', // Tipo de teclado
      {
        userInterfaceStyle: 'dark',
      },
    )
  }

  function handleShowActionSheet() {
    // * iOS only
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Normal', 'Destructive', 'Disabled', 'Cancel'],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 3,
        title: 'Este aqui é o título da ActionSheet',
        message: 'Esta aqui é a mensagem da ActionSheet',
        disabledButtonIndices: [2],
        userInterfaceStyle: 'light',
        tintColor: 'purple',
        cancelButtonTintColor: '#0f0',
      },
      (buttonIndex) => console.log(`Selecionou uma option: ${buttonIndex}`),
    )
  }

  function handleShowShareActionSheet() {
    // * iOS only
    // Menu de compartilhamento
    ActionSheetIOS.showShareActionSheetWithOptions(
      {
        message: 'Acesse o JStack',
        url: 'https://jstack.com.br',
        excludedActivityTypes: [],
      },
      (error) => console.log(error),
      (success, method) => console.log({ success, method }),
    )
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle="dark-content" />

      <View
        style={[
          styles.container,
          {
            backgroundColor: theme === 'dark' ? '#000' : '#fff',
          },
        ]}
      >
        <Button onPress={() => setVisible(true)}>Abrir Modal</Button>

        <Button onPress={handleShowAlert}>Mostrar alerta</Button>

        <Button onPress={handleShowPrompt}>Mostrar prompt</Button>

        <Button onPress={handleShowActionSheet}>Mostrar action sheet</Button>

        <Button onPress={handleShowShareActionSheet}>
          Mostrar share action sheet
        </Button>

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
