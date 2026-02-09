import { Platform, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import { Button } from './src/Button'

// O Android e o iOS têm notchs e tamanhos de StatusBar variados. Para resolver
// isso, usamos o SafeAreaView. No entanto, ele é exclusivo do iOS, então, no
// Android, usamos o StatusBar.currentHeight para definir uma margin-top para
// o ScrollView.

console.log({
  OS: Platform.OS,
  StatusBarHeight: StatusBar.currentHeight, // * Android only
})

export function App() {
  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <ScrollView style={{ backgroundColor: '#222', height: '100%' }}>
        <StatusBar hidden={false} barStyle="dark-content" />

        <Button />
      </ScrollView>
    </SafeAreaView>
  )
}
