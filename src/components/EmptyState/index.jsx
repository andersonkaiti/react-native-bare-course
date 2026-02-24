import { Text, View } from 'react-native'
import { styles } from './styles'

export function EmptyState() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Nenhum post encontrado</Text>
    </View>
  )
}
