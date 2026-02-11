import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './styles'

export function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <View style={styles.buttonsContainer}>
          <Button
            title="Button"
            color="#000"
            onPress={() => alert('Button pressed')}
          />

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => alert('TouchableOpacity pressed')}
            style={styles.button}
          >
            <Text style={styles.buttonLabel}>TouchableOpacity</Text>
            <Text style={styles.buttonLabel}>TouchableOpacity</Text>
          </TouchableOpacity>

          {/* 
            Quando o TouchableHighlight é pressionado, ele recebe um destaque,
            ou seja, uma cor de fundo é aplicada nele, que por padrão é preta,
            mas pode ser alterada usando a prop underlayColor.

            O highlight só funciona caso ele tenha um onPress.

            Além disso, ao ser pressionado, o texto dentro dele tem a opacidade
            alterada, mas isso pode ser alterado usando a prop activeOpacity,
            que transfere o valor para o filho.

            Limitação: O TouchableHighlight não aceita múltiplos filhos.
          */}
          <TouchableHighlight
            onPress={() => alert('TouchableHighlight pressed')}
            style={styles.button}
            underlayColor="#f00"
            activeOpacity={0.5}
          >
            <View>
              <Text style={styles.buttonLabel}>TouchableHighlight</Text>
              <Text style={styles.buttonLabel}>TouchableHighlight</Text>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
