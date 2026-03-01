import { Image, SafeAreaView, View } from 'react-native'
import { styles } from './styles'

export function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {/*
          Para utilizar uma imagem remota, passamos um objeto para a prop source
          com a propriedade uri.

          O uri não necessariamente é uma URL, então é possível inserir uma
          base64 e a imagem será renderizada.

          Caso não haja uma dimensão definida para a imagem, na web:
          1. Ela será renderizada com 0x0px, que não ocupa espaço na tela.
          2. O download da imagem é realizado.
          3. O elemento é atualizado para ter as dimensões da imagem baixada.

          No React Native, ela para na primeira etapa:
          1. Ela será renderizada com 0x0px, que não ocupa espaço na tela.

          No entanto, isso é intencional para evitar os pulos de layout que
          acontecem quando a imagem é baixada.

          Importante: isso só acontece com imagens remotas.
        */}
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            // É possível definir as dimensões da imagem diretamente no objeto
            // passado para a prop source.
            width: 300,
            height: 150,
            // O body, o headers e o method podem ser enviados, pois ao utilizar
            // a URL, estamos fazendo uma requisição HTTP para algum servidor que
            // armazena a imagem.
            method: 'POST',
            body: JSON.stringify({ name: 'Anderson' }),
            headers: {
              'Content-Type': 'application/json',
            },
          }}
          alt="GTR na estrada"
        />
      </View>
    </SafeAreaView>
  )
}
