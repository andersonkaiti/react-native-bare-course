import { SafeAreaView, Text, useWindowDimensions, View } from 'react-native'
import { styles } from './styles'

/**
  As imagens da nossa telas são formadas por pontos de luzes que estão
  acendendo, apagando, trocando de cores, etc. Esses pontos são chamados de
  pixels.

  Densidade de pixels (Pixel Density): pixels por polegada (pixels per inch -
  PPI), que é a quantidade de pixels que existem em uma polegada.

  100 de PPI indica que existem 100 pixels de largura e altura, ou seja: 100px
  x 100px.

  Physical Pixels: são pixels que existem de verdade, ou seja, estão na tela
  do dispositivo. Nessa abordagem, um dispositivo com um PPI maior renderiza
  o elemento menor do que em um com PPI menor.

  Devido a esse problema, quando definimos a quantidade de pixels, estamos
  na verdade definindo a quantidade de logical pixels.

  Logical Pixels: Density-independent Pixels, ou seja, são independentes de
  densidade.
  - Android: dp
  - iOS: pt
  - React Native: não tem nome específico.

  Pixel Ratio: define quantos pixels físicos os pixels lógicos representam.
*/

export function App() {
  // screen: a tela toda, incluindo a Status Bar e a Bottom Tab.
  // window: área útil da tela, excluindo a Status Bar e a Bottom Tab.
  /**
    const [{ fontScale, scale, width, height }, setDimensions] = useState(
      Dimensions.get('window'),
    )

    const orientation = width > height ? 'landscape' : 'portrait'

    useEffect(() => {
      const listener = Dimensions.addEventListener('change', ({ window }) => {
        setDimensions(window)
      })

      return () => listener.remove()
    }, [])
   */

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
      </View>
    </SafeAreaView>
  )
}
