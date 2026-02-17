import { FlatList, SafeAreaView, Text, View } from 'react-native'
import { styles } from './styles'

const POSTS_COUNT = 5

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

function Divider() {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: '#aaa',
        marginVertical: 12,
      }}
    />
  )
}

export function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        // Adiciona um componente no topo da lista e que acompanha o scroll.
        // É possível enviar tanto a referência da função quanto o JSX.
        ListHeaderComponent={<Header title="Posts" />}
        // Adiciona um componente no final da lista e que acompanha o scroll.
        ListFooterComponent={Footer}
        // Adiciona um componente quando a lista está vazia.
        ListEmptyComponent={EmptyState}
        // Adiciona um componente entre os itens da lista.
        ItemSeparatorComponent={Divider}
        style={styles.container}
        // contentContainerStyle={{ gap: 16 }}
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
