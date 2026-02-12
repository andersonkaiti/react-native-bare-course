import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
  button: {
    backgroundColor: '#222',
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonActive: {
    opacity: 0.8,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonLabelDisabled: {
    color: '#888',
  },
})
