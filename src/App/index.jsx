import { useRef, useState } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Switch,
} from 'react-native'
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
      {/* 
        Caso existam vários inputs, o keyboard pode se sobrepor a eles. Para
        evitar isso, usamos o KeyboardAvoidingView, que ajuda a evitar esse
        problema.

        A prop behavior define como o KeyboardAvoidingView vai se comportar
        nesse caso.

        Também é possivel desativar tudo com a prop enabled={false}
      */}
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // enabled={false}
      >
        <Switch
          style={{ alignSelf: 'flex-start' }}
          value={selected}
          onValueChange={setSelected}
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
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
