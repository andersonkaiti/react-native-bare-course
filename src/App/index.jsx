import { FlatList, SafeAreaView, Text, View } from 'react-native'
import { styles } from './styles'

const POSTS_COUNT = 100_000

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

export function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        style={styles.container}
        contentContainerStyle={{
          gap: 16,
        }}
        data={posts}
        keyExtractor={(post) => post.id}
        renderItem={({ item: post }) => <ListItem title={post.title} />}
        // A Virtualized List não monta todos os itens da lista, mas sim
        // gera pelo menos o layout, o espaço em branco onde o elemento
        // será renderizado.

        // A prop getItemLayout recebe uma função callback que pré-calcula
        // o tamanho e a posição de cada item para melhorar a performance,
        // assim o scroll permanece com um tamanho fixo, evitando o cálculo
        // dinâmico do layout da FlatList.

        // length -> altura do item
        // offset -> distância do item em relação ao topo
        getItemLayout={(_, index) => ({
          index,
          length: 64 + 16,
          offset: (64 + 16) * index,
        })}
      />
    </SafeAreaView>
  )
}
