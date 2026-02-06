import { Text, View } from 'react-native'

// A base de qualquer interface são blocos e textos. No entanto, ao contrário
// da web, no React Native não temos tags semânticas como <header>, <footer>,
// <nav>, etc., mas sim apenas <View> e <Text>.

// Strings de texto devem ser escritas dentro de componentes <Text>.
// Dentro de textos é possível adicionar outros textos.

export function App() {
  return (
    <View>
      <Text
        style={{
          marginTop: 38,
          fontSize: 32,
        }}
      >
        Hello, JStack!
        <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>How are you?</Text>
      </Text>
    </View>
  )
}
