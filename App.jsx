import { ScrollView, Text } from 'react-native'

// Apesar de apenas existir o componente View para criar containers, existem
// outros componentes que permitem trazer mais funcionalidades/comportamentos
// adicionais para a View.

// Por padrão, o ScrollView cria um scroll na vertical e não é inteligente
// em saber qual é a direção do scroll. É necessário definir a direção a partir
// da prop horizontal.

export function App() {
  return (
    <ScrollView>
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

      <ScrollView horizontal>
        <Text style={{ marginTop: 38, fontSize: 32 }}>
          Início! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
          sequi, distinctio deserunt numquam iure dolores aliquam possimus
          provident quia nulla alias vitae minima enim hic. Dolorum ratione at
          amet odio. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Fim!
        </Text>
      </ScrollView>
    </ScrollView>
  )
}
