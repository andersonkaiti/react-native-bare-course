import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native'
import { Button } from '../Button'
import { styles } from './styles'

export function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <StatusBar hidden={false} barStyle="dark-content" />

        <View style={styles.buttonsContainer}>
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
