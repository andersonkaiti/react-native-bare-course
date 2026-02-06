import { Text, View } from 'react-native'

// O allowFontScaling permite que o texto seja redimensionado de acordo com as
// configurações de acessibilidade do sistema. Se for false, o texto não será
// redimensionado.

// maxFontSizeMultiplier define o multiplicador máximo de fonte.
// Se for 1.5, o texto será redimensionado em até 1.5 vezes o tamanho original.

export function App() {
  return (
    <View>
      <Text
        style={{
          marginTop: 38,
          fontSize: 32,
        }}
        selectable
        selectionColor="rgba(255, 0, 0, 0.5)"
        numberOfLines={1}
        ellipsizeMode="tail"
        allowFontScaling={true}
        maxFontSizeMultiplier={1.5}
      >
        Hello, JStack! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quos sequi, distinctio deserunt numquam iure dolores aliquam possimus
        provident quia nulla alias vitae minima enim hic. Dolorum ratione at
        amet odio.
      </Text>
    </View>
  )
}
