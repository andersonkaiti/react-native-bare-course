import { Text, View } from 'react-native'

// O texto sempre ocupa toda a largura disponível do container pai, a não ser
// que a largura dele seja definida.

// numberOfLines define quantas linhas o texto pode ocupar e, caso o selectable
// seja true, isso acaba criando um scroll dependendo do numberOfLines.
// ellipsizeMode define onde o texto deve ser cortado.

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
      >
        Hello, JStack! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quos sequi, distinctio deserunt numquam iure dolores aliquam possimus
        provident quia nulla alias vitae minima enim hic. Dolorum ratione at
        amet odio.
      </Text>
    </View>
  )
}
