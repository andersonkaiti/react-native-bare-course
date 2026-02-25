import { useState } from 'react'
import { SafeAreaView, SectionList, Text, View } from 'react-native'
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
      <SectionList
        onRefresh={handleRefresh}
        refreshing={isRefreshing}
        ListHeaderComponent={<Header title="Posts" />}
        ListFooterComponent={Footer}
        // Neste caso, o ListEmptyComponent será renderizado quando não houver
        // nenhuma seção
        ListEmptyComponent={EmptyState}
        stickyHeaderIndices={[0]}
        style={styles.container}
        contentContainerStyle={{ gap: 16 }}
        keyExtractor={(post) => post.id}
        renderItem={({ item: post, section: { key } }) => (
          <ListItem title={`${key} - ${post.title}`} />
        )}
        getItemLayout={(_, index) => ({
          index,
          length: 64 + 16,
          offset: (64 + 16) * index,
        })}
        sections={[
          {
            key: 'First section',
            data: posts.slice(0, 5),
          },
          {
            key: 'Second section',
            data: posts.slice(6, 20),
          },
          {
            key: 'Third section',
            data: posts.slice(21, 100),
          },
        ]}
        renderSectionHeader={({ section: { key } }) => (
          <View
            style={{
              backgroundColor: '#000',
              padding: 10,
              borderRadius: 8,
            }}
          >
            <Text style={{ color: '#fff' }}>Section - {key}</Text>
          </View>
        )}
        stickySectionHeadersEnabled // * iOS only
        stickyHeaderHiddenOnScroll // * iOS only
      />
    </SafeAreaView>
  )
}
