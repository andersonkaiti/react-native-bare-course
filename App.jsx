import { ScrollView, Text } from 'react-native'

// Todas as interações do usuário com o app acontecem no lado nativo e, para
// identificar algum evento, é necessário passar props para o JavaScript
// conversar com a parte nativa (event listeners).

// O scrollEventThrottle (* iOS only) é um valor em ms que define a taxa de
// atualização do evento de scroll. Um valor menor resulta em mais atualizações
// e, consequentemente, mais problemas de performance.

// onScroll é um evento que é chamado toda vez que o usuário rola a tela. Ele
// recebe um objeto event que contém informações sobre o evento de scroll.
// event.nativeEvent.contentOffset é um objeto que contém as coordenadas do
// scroll. Como o iOS tem o efeito do bounce, o valor pode ser negativo.

// onScrollBeginDrag é um evento que é chamado quando o usuário começa a rolar
// a tela e o onScrollEndDrag é um evento que é chamado quando o usuário
// termina de rolar a tela.

// onScrollToTop (* iOS only) é um evento que é chamado quando o usuário rola a
// tela para o topo.

export function App() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      // scrollEventThrottle={16} // * iOS only
      // onScroll={(event) => console.log(event.nativeEvent.contentOffset.y)}
      // onScrollBeginDrag={() => console.log('beginDrag')}
      // onScrollEndDrag={() => console.log('endDrag')}
      onScrollToTop={() => console.log('scrollTop')} // * iOS only
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        // onScroll={(event) => console.log(event.nativeEvent.contentOffset.x)}
      >
        <Text style={{ marginTop: 38, fontSize: 32 }}>
          Início! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
          sequi, distinctio deserunt numquam iure dolores aliquam possimus
          provident quia nulla alias vitae minima enim hic. Dolorum ratione at
          amet odio. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Fim!
        </Text>
      </ScrollView>

      <Text style={{ marginTop: 38, fontSize: 32 }}>
        Início! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
        sequi, distinctio deserunt numquam iure dolores aliquam possimus
        provident quia nulla alias vitae minima enim hic. Dolorum ratione at
        amet odio. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Repellendus quis deleniti
        placeat impedit vero alias doloremque, quas, fuga dignissimos vel
        obcaecati nostrum, rerum quam non? Nisi illum consequatur perspiciatis
        ea. Fim!
      </Text>
    </ScrollView>
  )
}
