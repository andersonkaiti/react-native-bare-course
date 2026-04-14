import {
  Image,
  PixelRatio,
  SafeAreaView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native'
import userIcon from '../images/user-icon/user-icon.png'
import { styles } from './styles'

/**
  Dependendo do tamanho de uma imagem, em um pixel ratio maior ela poderá
  perder a qualidade caso. Para solucionar isso, é preciso utilizar vetores ou,
  é preciso usar imagens com diferentes resoluções, dependendo do pixel ratio
  do dispositivo, como:
  - user-icon.png
  - user-icon@2x.png
  - user-icon@3x.png

  Convenção de nomenclatura de imagens:
  user-icon{{suffix}}.png -> indica que a imagem tem o dobro ou o triplo
  do tamanho original.
  @ -> at, que significa "no/em", ou seja, a imagem está "no" formato 3x.

  Caso haja variáveis variações da imagem com @2x, @3x, etc., o React Native
  escolherá a imagem com a resolução mais próxima do pixel ratio do dispositivo.
*/

export function App() {
  const { fontScale, scale, width, height } = useWindowDimensions()

  const orientation = width > height ? 'landscape' : 'portrait'

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Font scale: {fontScale}</Text>

        <Text>Pixel ratio: {scale}</Text>

        <Text>
          Dimensions: {width.toFixed(0)}x{height.toFixed(0)}
        </Text>

        <Text>Orientation: {orientation}</Text>

        <Text>{PixelRatio.get()}</Text>

        <Text>{PixelRatio.getFontScale()}</Text>

        <Text>{PixelRatio.getPixelSizeForLayoutSize(100)}</Text>

        <Text>{PixelRatio.roundToNearestPixel(8.44)}</Text>

        <Image
          source={userIcon}
          style={{
            width: 100,
            height: 100,
          }}
        />
      </View>
    </SafeAreaView>
  )
}
