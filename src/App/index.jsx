import { SafeAreaView, View } from 'react-native'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { styles } from './styles'

export function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Input placeholder="E-mail" />

        <Input placeholder="Senha" secureTextEntry />

        <Button>Hello, Button!</Button>
      </View>
    </SafeAreaView>
  )
}
