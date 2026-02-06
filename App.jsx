import { Text, View } from 'react-native'

// Os textos no React Native, por padrão, não são selecionáveis.
// Para torná-los selecionáveis, usamos a propriedade 'selectable'.
// A propriedade 'selectionColor' define a cor da seleção e é exclusiva para
// Android.

export function App() {
  return (
    <View>
      <Text
        style={{
          marginTop: 38,
          fontSize: 32,
        }}
        selectable // Selecionável
        selectionColor="rgba(255, 0, 0, 0.5)" // * Android only
      >
        Hello, JStack!
      </Text>
    </View>
  )
}
