import { useEffect, useState, useTransition } from 'react'
import { ActivityIndicator, SafeAreaView, View } from 'react-native'
import { AppText } from '../components/AppText'
import { styles } from './styles'

/**
  O React Native tem suporte à fetch API e, como temos um browser nele, não
  existe erro de CORS.
*/
export function App() {
  const [isLoading, startTransition] = useTransition()
  const [todo, setTodo] = useState()

  useEffect(() => {
    async function load() {
      startTransition(async () => {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos/1',
        )

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
