import { useState } from 'react'
import { Image, SafeAreaView, View } from 'react-native'
import { Button } from '../components/Button'
import { styles } from './styles'

export function App() {
  const [isBlurred, setIsBlurred] = useState(false)

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {/*
          No Android, existe um bug ao utilizar resizeMode="contain" e
          borderRadius juntos. Para contornar, é necessário adicionar a
          prop overlayColor, ou simplesmente criar um container wrapper.
        */}
        <View
          style={{
            width: 300,
            height: 150,
            borderRadius: 20,
            overflow: 'hidden',
          }}
        >
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            style={{
              width: 300,
              height: 150,
              backgroundColor: 'purple',
            }}
            alt="GTR na estrada"
            resizeMode="contain"
            blurRadius={isBlurred ? 50 : 0}
          />
        </View>

        <Button onPress={() => setIsBlurred(!isBlurred)}>
          {isBlurred ? 'Mostrar imagem' : 'Borrar imagem'}
        </Button>
      </View>
    </SafeAreaView>
  )
}
