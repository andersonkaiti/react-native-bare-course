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
  const disabled = false

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
            style={[styles.button, disabled && styles.buttonDisabled]}
            disabled={disabled}
            /*
              Caso o usuário pressione e arraste o dedo para fora da área de
              toque, o evento onPress não será chamado, mas caso ele volte para
              a área de toque, o evento será chamado.
  
              Para aumentar a área de toque, usamos a prop pressRetentionOffset,
              passando um valor em pixels.
            */
            pressRetentionOffset={16}
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

          <TouchableOpacity
            onPress={() => alert('Ver mais!')}
            style={{
              backgroundColor: 'red',
              alignSelf: 'flex-start',
            }}
            hitSlop={{
              top: 10,
              bottom: 10,
              left: 10,
              right: 10,
            }}
          >
            <Text>Ver mais</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
