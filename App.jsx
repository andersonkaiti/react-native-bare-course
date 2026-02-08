import { ScrollView, Text } from 'react-native'

// O comportamento da scrollbar é aparecer durante o scroll horizontal ou
// vertical e desaparecer quando o usuário parar de interagir.

// Para que a scrollbar permaneça visível o tempo todo, a ScrollView
// aceita a prop persistentScrollbar. * Android only

// Para que a scrollbar tenha um estilo diferente, a ScrollView
// aceita a prop indicatorStyle. * iOS only

// Para que a scrollbar não apareça, a ScrollView aceita a prop
// showsVerticalScrollIndicator para o scroll vertical e
// showsHorizontalScrollIndicator para o scroll horizontal. Alguns aplicativos,
// como o Instagram, quando tem um scroll na horizontal, não mostram a
// scrollbar, mas sim um elemento cortado para indicar que existe mais
// conteúdo.

export function App() {
  return (
    <ScrollView
      persistentScrollbar // * Android only
      indicatorStyle="white" // * iOS only
      showsVerticalScrollIndicator={false} // Anula as outras configurações da scrollbar
    >
      <ScrollView
        horizontal
        persistentScrollbar
        showsHorizontalScrollIndicator={false}
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
