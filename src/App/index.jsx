import { useState } from 'react'
import { Image, SafeAreaView, View } from 'react-native'
import { Button } from '../components/Button'
import { styles } from './styles'

export function App() {
  const [isBlurred, setIsBlurred] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={{ position: 'relative' }}>
          {isLoading && (
            <Image
              source={{
                uri: 'https://placehold.co/300x150.png?text=JStack',
              }}
              style={{
                width: 300,
                height: 150,
                position: 'absolute',
                zIndex: 1,
              }}
            />
          )}

          {hasError && (
            <Image
              source={{
                uri: 'https://placehold.co/300x150.png?text=Erro!',
              }}
              style={{
                width: 300,
                height: 150,
                position: 'absolute',
                zIndex: 1,
              }}
            />
          )}
        </View>

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
          defaultSource={require('../images/image-placeholder.png')}
          // É executado quando o carregamento da imagem inicia
          onLoadStart={() => {
            setIsLoading(true)
          }}
          // Deveria executar tanto quando o carregamento da imagem termina com
          // sucesso quanto quando ocorre um erro, mas é executado no iOS quando
          // existe algum erro
          onLoadEnd={() => {
            console.log('onLoadEnd')
          }}
          // É executado quando a imagem é carregada com sucesso
          onLoad={() => {
            setIsLoading(false)
          }}
          // É executado quando ocorre um erro no carregamento da imagem
          onError={() => {
            // console.log(event.nativeEvent.error)
            setIsLoading(false)
            setHasError(true)
          }}
          onProgress={(event) => {
            // loaded: quantidade de bytes baixados
            // total: quantidade total de bytes

            const { loaded, total } = event.nativeEvent

            const percentage = (loaded / total) * 100

            console.log(`Já carregou ${percentage.toFixed(2)}%`)
          }}
        />

        <Button onPress={() => setIsBlurred(!isBlurred)}>
          {isBlurred ? 'Mostrar imagem' : 'Borrar imagem'}
        </Button>
      </View>
    </SafeAreaView>
  )
}
