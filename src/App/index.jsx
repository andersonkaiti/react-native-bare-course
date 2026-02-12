import {
  Button,
  Pressable,
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
            pressRetentionOffset={16}
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

          {/* 
            O Pressable foi introduzido na versão 0.63 do React Native e é o
            botão mais moderno.

            Benefícios:
            1. Simplifica as coisas, permitindo reproduzir os mesmos feebacks de
            todos os outros componentes de toque.
            2. Flexibilidade na forma de entregar um feedback de touch para o
            usuário.
            3. Os nossos apps deixam de ter uma "cara de React Native".

            Aceita vários filhos.

            Por padrão, ele é um TouchableWithoutFeedback.

            Dentro da prop style, é possível adicionar uma função callback que
            recebe como parâmetro um objeto com a prop pressed. Para utilizar no
            elemento filho, é necessário utilizar a render prop para acessar o
            valor.

            A prop android_ripple (* Android only) permite adicionar um
            efeito de ondulação quando o botão é pressionado.

            A prop android_disableSound (* Android only) permite desabilitar o
            som quando o botão é pressionado.

            Aceita todas as props de lifecycle. A diferença é que a ordem é um
            pouco diferente: onPressIn -> onPress -> onPressOut
           */}
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && {
                transform: 'scale(.97)',
              },
            ]}
            onPress={() => console.log('Pressable pressed')}
            android_ripple={{ color: '#f00' }}
            android_disableSound
            onPressIn={() => console.log('onPressIn')}
            onPressOut={() => console.log('onPressOut')}
            onLongPress={() => console.log('onLongPress')}
            delayLongPress={3000}
            hitSlop={30}
          >
            {/* Render props */}
            {({ pressed }) => (
              <Text
                style={[
                  styles.buttonLabel,
                  pressed && {
                    opacity: 0.5,
                  },
                ]}
              >
                Pressable
              </Text>
            )}
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
