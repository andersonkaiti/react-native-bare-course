import { ScrollView, StatusBar } from 'react-native'
import { Button } from './src/Button'

// A Status Bar é a barra que fica no topo do celular, onde fica o horário,
// a bateria, o Wi-Fi, etc.

// O componente StatusBar não é um componente visual, mas sim um componente que
// manipula a Status Bar.

// As props da StatusBar são dinâmicas, ou seja, elas podem ser alteradas por
// eventos, estados, etc.

export function App() {
  return (
    <ScrollView style={{ paddingTop: 200, backgroundColor: '#222' }}>
      <StatusBar hidden={false} barStyle="dark-content" />

      {/* Caso hajam 2 StatusBar, é feito um merge entre as duas. Dessa forma,
      é possível definir no <App /> as configurações padrões da StatusBar, e em
      outras telas, configurações específicas para cada tela. */}
      <StatusBar barStyle="light-content" />

      <Button />
    </ScrollView>
  )
}
