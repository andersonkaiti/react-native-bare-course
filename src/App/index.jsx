import {
  PixelRatio,
  SafeAreaView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native'
import { styles } from './styles'

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

        {/*
          O PixelRatio é uma classe que fornece informações sobre a densidade
          de pixels do dispositivo, mas a sua implementação no código-fonte do
          React Native utiliza a Dimensions API.

          A única diferença entre o PixelRatio.get() e o useWindowDimensions()
          é que apenas o useWindowDimensions() permite monitorar mudanças na
          tela, como rotação e zoom.
        */}
        <Text>{PixelRatio.get()}</Text>

        <Text>{PixelRatio.getFontScale()}</Text>

        {/*
          Pixel Size = Physical Pixel
          Layout Size = Logical Pixel

          O método getPixelSizeForLayoutSize() é usado para converter um
          tamanho de layout em pixels físicos.
        */}
        <Text>{PixelRatio.getPixelSizeForLayoutSize(100)}</Text>

        {/*
          O startDetecting() é uma função no-op (no operation), ou seja, que
          não faz nada.
        */}
        {/* <Text>{PixelRatio.startDetecting()}</Text> */}

        {/* 
          O roundToNearestPixel() é usado para arredondar um tamanho de layout
          para o pixel físico mais próximo.

          Ele multiplica o valor pelo pixel ratio, arredonda para cima ou para
          baixo dependendo do valor e divide pelo pixel ratio.
        */}
        <Text>{PixelRatio.roundToNearestPixel(8.44)}</Text>
      </View>
    </SafeAreaView>
  )
}
