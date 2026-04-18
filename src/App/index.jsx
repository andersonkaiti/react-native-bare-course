import { useEffect, useState, useTransition } from 'react'
import { ActivityIndicator, Platform, SafeAreaView, View } from 'react-native'
import { AppText } from '../components/AppText'
import { styles } from './styles'

/**
  Caso seja necessário fazer uma requisição para o localhost dentro do emulador
  do Android, é preciso usar o endereço IP da máquina host, que é o
  [IP_ADDRESS]. No iOS não é preciso fazer isso.

  Isso acontece porque o emulador do iOS roda nativamente na máquina host,
  portanto, ao realizar uma requisição para localhost, ele acessa a máquina
  host.

  Já o emulador do Android roda em uma máquina virtual, portanto, ao realizar
  uma requisição para localhost, ele acessa a máquina virtual, e não a máquina
  host.

  Soluções:
  1. Usar o endereço IP da máquina host.

  2. É fazer um "proxy reverso" para o localhost.
    adb reverse tcp:<porta_dispositivo> tcp:<porta_computador>

  3. Fazer as requests para um "alias default" do emulador:
    10.0.2.2
*/

const baseURL = Platform.select({
  ios: 'http://localhost:3333',
  android: 'http://10.0.2.2:3333',
})

export function App() {
  const [isLoading, startTransition] = useTransition()
  const [todo, setTodo] = useState()

  useEffect(() => {
    async function load() {
      startTransition(async () => {
        const response = await fetch(`${baseURL}/todos/1`)

        const data = await response.json()

        await new Promise((resolve) => setTimeout(resolve, 1000))

        setTodo(data)
      })
    }

    load()
  }, [])

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {isLoading && <ActivityIndicator />}

        {todo && <AppText style={{ fontSize: 32 }}>{todo.title}</AppText>}
      </View>
    </SafeAreaView>
  )
}
