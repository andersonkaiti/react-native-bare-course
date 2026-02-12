import { SafeAreaView, ScrollView } from 'react-native'
import { Button } from '../components/Button'
import { styles } from './styles'

export function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.container}>
        {/* É possível inserir um texto porque ele não está sendo renderizado,
        mas sim sendo passado como prop children */}
        <Button onPress={() => alert('Button pressed')}>Hello, Button!</Button>
      </ScrollView>
    </SafeAreaView>
  )
}
