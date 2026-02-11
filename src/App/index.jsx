import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
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

          {/*
            Os elementos Touchable permitem que qualquer elemento da ui,
            como uma View, uma imagem, etc., seja pressionável.

            O "Opacity" do TouchableOpacity está relacionado com o tipo de
            feedback quando o componente é pressionado, ou seja, tudo dentro
            dele escurece quando é pressionado.

            A prop "activeOpacity" define o nível de opacidade quando o
            componente é pressionado.

            Ele aceita a prop style.
          */}

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => alert('TouchableOpacity pressed')}
            style={styles.button}
          >
            <Text style={styles.buttonLabel}>TouchableOpacity</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
