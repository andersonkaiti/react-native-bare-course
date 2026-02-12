import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
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
          {/* 
            O único evento permitido no Button é o onPress.
          */}
          <Button
            title="Button"
            color="#000"
            onPress={() => alert('Button pressed')}
          />

          {/* 
            onPressIn: é chamado no primeiro milissegundo quando o usuário
            pressiona o botão.

            onPressOut: é chamado quando o usuário solta o botão.

            onLongPress: é chamado quando o usuário pressiona e segura o
            elemento pressionável.

            Lifecycle: onPressIn -> onPressOut -> onPress

            Long Press Lifecycle: onPressIn -> onLongPress -> onPressOut

            Para controlar o tempo de delay do long press, usamos a propriedade
            delayLongPress em milissegundos.
          */}
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button}
            //
            onPress={() => console.log('TouchableOpacity pressed')}
            onPressIn={() => console.log('onPressIn')}
            onPressOut={() => console.log('onPressOut')}
            onLongPress={() => console.log('onLongPress')}
            delayLongPress={3000}
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

          <TouchableWithoutFeedback
            onPress={() => alert('TouchableWithoutFeedback pressed')}
          >
            <View style={styles.button}>
              <Text style={styles.buttonLabel}>TouchableWithoutFeedback</Text>
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.androidButtonContainer}>
            <TouchableNativeFeedback
              onPress={() => alert('TouchableNativeFeedback pressed')}
              background={TouchableNativeFeedback.Ripple('#f00')}
            >
              <View style={styles.button}>
                <Text style={styles.buttonLabel}>TouchableNativeFeedback</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
