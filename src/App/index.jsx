import { Image, SafeAreaView, View } from 'react-native'
import gtr from '../images/gtr.jpg'
import { styles } from './styles'

export function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {/*
          Adicionar uma imagem é igual ao React na web: importamos a imagem e a
          passamos como valor da prop source.

          Detalhe: o valor do import é um número que representa a imagem.

          Também é possível fazer um require dentro da prop source, como:
          <Image source={require('../images/gtr.jpg')} />
        */}
        <Image
          source={gtr}
          // Texto alternativo para leitores de tela.
          alt="GTR na estrada"
          style={{
            width: 300,
            height: 150,
          }}
        />
      </View>
    </SafeAreaView>
  )
}
