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
            // Pega os pixels que não são transparentes e substitui pela cor
            // definida no tintColor.
            // tintColor: 'red',
          }}
          alt="GTR na estrada"
          /**
            Define como a imagem será redimensionada para caber no container.

            - cover: valor default que redimensiona a imagem de forma
              proporcional até que ela cubra todo o container.

            - contain: redimensiona a imagem de forma proporcional
              até que a imagem inteira caiba no container.

            - repeat: repete a imagem para preencher o container.

            - stretch: redimensiona (estica) a imagem para preencher o
              container sem manter a proporção.

            - center: centraliza a imagem no container.
           */
          resizeMode="contain"
          // Valor reativo
          blurRadius={isBlurred ? 50 : 0}
        />

        <Button onPress={() => setIsBlurred(!isBlurred)}>
          {isBlurred ? 'Mostrar imagem' : 'Borrar imagem'}
        </Button>
      </View>
    </SafeAreaView>
  )
}
