import { ScrollView } from 'react-native'
import { Button } from './src/Button'
import { print } from './src/print'

export function App() {
  print()

  return (
    <ScrollView style={{ marginTop: 200 }}>
      <Button />
    </ScrollView>
  )
}
