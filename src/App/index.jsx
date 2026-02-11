import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
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
          </TouchableOpacity>

          <TouchableHighlight
            onPress={() => alert('TouchableHighlight pressed')}
            style={styles.button}
            underlayColor="#f00"
            activeOpacity={0.5}
          >
            <Text style={styles.buttonLabel}>TouchableHighlight</Text>
          </TouchableHighlight>

          {/*
            O TouchableWithoutFeedback não tem nenhum feedback visual
            quando é pressionado.

            Ele não pode ter mais de um filho.

            Além disso, a prop style não é aplicada a ele, então é
            necessário envolver o componente em uma View ou adicionar
            estilos no filho para que ele tenha um estilo.
          */}
          <TouchableWithoutFeedback
            onPress={() => alert('TouchableWithoutFeedback pressed')}
          >
            <View style={styles.button}>
              <Text style={styles.buttonLabel}>TouchableWithoutFeedback</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
