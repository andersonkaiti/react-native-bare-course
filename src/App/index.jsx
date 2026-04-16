import { useRef } from 'react'
import { DrawerLayoutAndroid, SafeAreaView, Text, View } from 'react-native'
import { Button } from '../components/Button'
import { styles } from './styles'

/**
  DrawerLayoutAndroid
  - Menu lateral.
  - O componente nativo só existe para Android.

  Para abrir o menu, é necessário fazer isso imperativamente, ou seja:
  manipulando drawer a partir de uma ref e chamando o método openDrawer().

  Além disso, ele precisa ser um wrapper de tudo na tela.
*/
export function App() {
  const drawerRef = useRef()

  function handleOpenDrawer() {
    drawerRef.current?.openDrawer()
  }

  function handleCloseDrawer() {
    drawerRef.current?.closeDrawer()
  }

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      // Define a posição do drawer
      drawerPosition="left"
      // Define o conteúdo do drawer
      drawerWidth={250}
      // Define como o drawer pode ser aberto
      // locked-closed: trava e impede a abertura por gestos, mas ainda é
      // possível clicar no overlay para fechar
      // locked-open: trava todos os gestos e a abertura e fechamento deve ser
      // tratada imperativamente
      // unlocked: permite a abertura por gestos
      drawerLockMode="locked-open"
      // drawerBackgroundColor="#000000"
      renderNavigationView={() => (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
          }}
        >
          <Text style={{ color: '#fff' }}>Hello, Drawer!</Text>

          <Button onPress={handleCloseDrawer}>Fechar menu</Button>
        </View>
      )}
    >
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Button onPress={handleOpenDrawer}>Abrir menu</Button>
        </View>
      </SafeAreaView>
    </DrawerLayoutAndroid>
  )
}
