import { Text, View } from 'react-native'
import { styles } from './styles'

/**
 * @param {{ title: string }} props
 */
export function ListItem({ title }) {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>{title}</Text>
    </View>
  )
}
