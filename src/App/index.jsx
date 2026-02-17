import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { styles } from './styles'

const POSTS_COUNT = 30

/**
 * @type {Array<{ id: number, title: string }>}
 */
const posts = Array.from({ length: POSTS_COUNT }, (_, index) => ({
  id: Math.random(),
  title: `Post #${index + 1}`,
}))

export function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      {/* 
        A prop style aplica estilos na própria ScrollView, enquanto o
        contentContainerStyle aplica estilos no container interno que
        contém os elementos filhos.

        Ou seja: a ScrollView é um container e dentro dela existe um
        contentContainer que é outro container.
      */}
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          alignItems: 'stretch',
          gap: 16,
        }}
      >
        {/*
          A renderização de listas podem ser feitas da mesma forma que no React.
        */}
        {posts.map((post) => (
          <View key={post.id} style={styles.postContainer}>
            <Text style={styles.postTitle}>{post.title}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}
