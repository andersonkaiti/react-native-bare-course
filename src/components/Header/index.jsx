import { Text, View } from 'react-native'
import { styles } from './styles'

/**
 * @param {{title: string}} param
 */
export function Header({ title }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}
