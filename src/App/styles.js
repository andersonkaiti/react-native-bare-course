import { Platform, StatusBar, StyleSheet } from 'react-native'

// O StyleSheet.create é uma função que aceita como argumento um objeto de
// estilos que podem ser definidos com a ajuda do intelisense, e retorna um
// objeto de estilos.

export const styles = StyleSheet.create({
  wrapper: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
  },
  buttonsContainer: {
    gap: 16,
  },
  button: {
    backgroundColor: '#222',
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
  androidButtonContainer: {
    overflow: 'hidden',
    borderRadius: 8,
  },
})
