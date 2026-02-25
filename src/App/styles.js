import { Platform, StatusBar, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  modalContainer: {
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
})
