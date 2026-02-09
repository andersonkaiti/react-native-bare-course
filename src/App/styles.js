import { Platform, StatusBar, StyleSheet } from 'react-native'

// O StyleSheet.create é uma função que aceita como argumento um objeto de
// estilos que podem ser definidos com a ajuda do intelisense, e retorna um
// objeto de estilos.

export const styles = StyleSheet.create({
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
})
