import { Platform, StatusBar } from 'react-native'

// Desacopla o estilo do componente e apenas cria o objeto de estilos quando o
// componente é importado.
export const styles = {
  wrapper: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    backgroundColor: '#222',
    height: '100%',
  },
  buttonsContainer: {
    gap: 16,
  },
}
