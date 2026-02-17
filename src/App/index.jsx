import { useEffect } from 'react'
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
  // Importante: não é interessante manter estados nos itens da lista, pois
  // eles serão recriados toda vez que o item for renderizado.
  // O ideal é que o estado seja mantido no componente pai (state lifting).

  useEffect(() => {
    console.log(`${title} mounted`)

    return () => {
      console.log(`${title} unmounted`)
    }
  }, [title])

  return (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>{title}</Text>
    </View>
  )
}

export function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      {/* 
        O problema dessa abordagem com ScrollView é que, dependendo do tamanho
        do array, o dispositivo pode não ter memória suficiente para renderizar
        todos os elementos de uma vez.

        Virtualized Lists: renderizam apenas os elementos que estão visíveis
        na tela, economizando memória.

        Para renderizar listas com esse comportamento, o React Native fornece
        o componente FlatList, que utiliza por baixo dos panos a VirtualizedList.

        Ela aceita as seguinte props:

        - data: Array de dados que serão renderizados.

        - keyExtractor: Função que extrai a key de cada item.
          key={props.keyExtractor(item)}          

        - renderItem: Função que renderiza cada item da lista. Para obter o
          item, é necessário desestruturar o objeto passado como parâmetro.

        Detalhe: não é possível utilizar uma FlatList dentro de uma ScrollView.
      */}
      <FlatList
        style={styles.container}
        contentContainerStyle={{
          gap: 16,
        }}
        data={posts}
        keyExtractor={(post) => post.id}
        renderItem={({ item: post }) => <ListItem title={post.title} />}
      />
    </SafeAreaView>
  )
}
