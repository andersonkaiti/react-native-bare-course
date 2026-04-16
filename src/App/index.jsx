import { InputAccessoryView, SafeAreaView, Text, View } from 'react-native'
import { Input } from '../components/Input'
import { styles } from './styles'

export function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Input placeholder="Nome" inputAccessoryViewID="name" />
        <Input placeholder="E-mail" inputAccessoryViewID="email" />
        <Input placeholder="Idade" inputAccessoryViewID="age" />
      </View>

      {/*
        O InputAccessoryView (* iOS only) é uma view que aparece acima do
        teclado.
      */}
      <InputAccessoryView nativeID="name">
        <Text>Accessory do nome</Text>
      </InputAccessoryView>

      <InputAccessoryView nativeID="email">
        <Text>Accessory do email</Text>
      </InputAccessoryView>

      <InputAccessoryView nativeID="age">
        <Text>Accessory da idade</Text>
      </InputAccessoryView>
    </SafeAreaView>
  )
}
