import { useState } from 'react'
import { Image, SafeAreaView, View } from 'react-native'
import { Button } from '../components/Button'
import { styles } from './styles'

export function App() {
  const [isBlurred, setIsBlurred] = useState(false)

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={{
            width: 300,
            height: 150,
          }}
          alt="GTR na estrada"
          resizeMode="contain"
          blurRadius={isBlurred ? 50 : 0}
          /**
            A prop defaultSource permite definir qual imagem deve ser
            utilizada enquanto o carregamento da imagem principal não
            for concluído.

            Ele também aceita uma URI para imagens externas, mas no iOS ele
            só aceita arquivos locais ou em base64.
           */
          defaultSource={require('../images/image-placeholder.png')}
        />

        <Button onPress={() => setIsBlurred(!isBlurred)}>
          {isBlurred ? 'Mostrar imagem' : 'Borrar imagem'}
        </Button>
      </View>
    </SafeAreaView>
  )
}
