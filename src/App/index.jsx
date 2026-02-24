import { useState } from 'react'
import { FlatList, RefreshControl, SafeAreaView } from 'react-native'
import { EmptyState } from '../components/EmptyState'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ListItem } from '../components/ListItem'
import { styles } from './styles'

const POSTS_COUNT = 100

/**
 * @type {Array<{ id: number, title: string }>}
 */
const posts = Array.from({ length: POSTS_COUNT }, (_, index) => ({
  id: Math.random(),
  title: `Post #${index + 1}`,
}))

export function App() {
  const [isRefreshing, setIsRefreshing] = useState(false)

  async function handleRefresh() {
    setIsRefreshing(true)

    await new Promise((resolve) => setTimeout(resolve, 10_000))

    setIsRefreshing(false)
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        refreshControl={
          <RefreshControl
            onRefresh={handleRefresh}
            refreshing={isRefreshing}
            tintColor="purple"
            title="Carregando posts..."
            titleColor="purple"
            colors={['red']}
            progressBackgroundColor="#000"
            size="default"
          />
        }
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
