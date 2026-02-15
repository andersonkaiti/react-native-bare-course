import { useRef, useState } from 'react'
import { SafeAreaView, Switch, View } from 'react-native'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { TextArea } from '../components/Textarea'
import { styles } from './styles'

export function App() {
  const passwordInputRef = useRef(null)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [selected, setSelected] = useState(false)

  function handleSubmit() {
    console.log({
      email,
      password,
    })
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {/* 
          O componente Switch é uma alternativa ao checkbox.

          Ele sempre precisa ser um controlled component.

          Para alterar a sua aparência, utilizamos as props:
          - thumbColor -> controla a cor da bolinha do Switch
          - trackColor -> controla a cor do fundo do Switch
        */}
        <Switch
          style={{ alignSelf: 'flex-start' }}
          value={selected}
          onValueChange={setSelected}
          // disabled
          thumbColor="purple"
          ios_backgroundColor="yellow"
          trackColor={{
            false: 'yellow',
            true: '#0fa0f8',
          }}
        />

        <TextArea placeholder="Descrição" />

        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="email"
          onSubmitEditing={() => {
            passwordInputRef.current.focus()
          }}
          returnKeyType="next"
          value={email}
          onChangeText={setEmail}
        />

        <Input
          ref={passwordInputRef}
          placeholder="Senha"
          secureTextEntry
          keyboardType="number-pad"
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
        />

        <Button onPress={handleSubmit}>Enviar</Button>
      </View>
    </SafeAreaView>
  )
}
