import { useState } from 'react'
import { ImageBackground, SafeAreaView, View } from 'react-native'
import { Button } from '../components/Button'
import { styles } from './styles'

export function App() {
  const [isBlurred, setIsBlurred] = useState(false)

  /**
    Na web, para definir imagens de fundo usamos o background-image: url(), mas
    no React Native não é possível definir nada além do backgroundColor nos
    containers.
    
    Para fazer isso, existem 2 soluções:

    - Criar uma View que encapsula a imagem e controla o tamanho dela e utilizar o
    estilo position: 'absolute' na imagem.
    - Utilizar o componente ImageBackground.
  */

  return (
    <ImageBackground style={{ flex: 1 }} source={require('../images/gtr.jpg')}>
      {/*
        <View style={{ flex: 1 }}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
            }}
        />
      */}

      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Button onPress={() => setIsBlurred(!isBlurred)}>
            {isBlurred ? 'Mostrar imagem' : 'Borrar imagem'}
          </Button>
        </View>
      </SafeAreaView>
      {/* </View> */}
    </ImageBackground>
  )
}
