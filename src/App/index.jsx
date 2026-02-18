import { useState } from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import { styles } from './styles'

const POSTS_COUNT = 100

/**
 * @type {Array<{ id: number, title: string }>}
 */
const posts = Array.from({ length: POSTS_COUNT }, (_, index) => ({
  id: Math.random(),
  title: `Post #${index + 1}`,
}))

/**
 * @param {{ title: string }} props
 */
function ListItem({ title }) {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>{title}</Text>
    </View>
  )
}

/**
 * @param {{title: string}} param
 */
function Header({ title }) {
  return (
    <View
      style={{
        backgroundColor: '#ccc',
        padding: 16,
        borderRadius: 8,
      }}
    >
      <Text>{title}</Text>
    </View>
  )
}

function Footer() {
  return (
    <View
      style={{
        backgroundColor: '#000',
        padding: 24,
        borderRadius: 8,
      }}
    >
      <Text style={{ color: '#fff' }}>Rodapé</Text>
    </View>
  )
}

function EmptyState() {
  return (
    <View
      style={{
        backgroundColor: '#555',
        padding: 24,
        borderRadius: 8,
      }}
    >
      <Text style={{ color: '#fff' }}>Nenhum post encontrado</Text>
    </View>
  )
}

export function App() {
  const [isRefreshing, setIsRefreshing] = useState(false)

  async function handleRefresh() {
    setIsRefreshing(true)

    await new Promise((resolve) => setTimeout(resolve, 1_500))

    setIsRefreshing(false)
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        // Função que será chamada quando o usuário puxar para baixo
        onRefresh={handleRefresh}
        // Controla se o spinner de refresh deve ser exibido
        refreshing={isRefreshing}
        ListHeaderComponent={<Header title="Posts" />}
        ListFooterComponent={Footer}
        ListEmptyComponent={EmptyState}
        stickyHeaderIndices={[0]}
        style={styles.container}
        contentContainerStyle={{ gap: 16 }}
        data={posts}
        keyExtractor={(post) => post.id}
        renderItem={({ item: post }) => <ListItem title={post.title} />}
        getItemLayout={(_, index) => ({
          index,
          length: 64 + 16,
          offset: (64 + 16) * index,
        })}
      />
    </SafeAreaView>
  )
}
