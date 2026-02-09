import { Text, View } from 'react-native'

export function Button() {
  return (
    <View
      style={{
        width: 200,
        height: 48,
        backgroundColor: 'blue',
      }}
    >
      <Text>Button Fallback</Text>
    </View>
  )
}
