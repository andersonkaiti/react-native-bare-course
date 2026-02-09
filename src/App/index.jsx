import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native'
import { Button } from '../Button'
import { styles } from './styles'

// A estilização do React Native tem quase a mesma sintaxe que do CSS da web,
// mas não existem estilos globais, nem herança de estilos, e nem classes.

// As propriedades do CSS são convertidas para camelCase, em vez de kebab-case.

// No React Native, os elementos já são flex-box por padrão, com
// flex-direction: column, e são implementados pelo Yoga, uma engine de layout
// multiplataforma.

export function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <StatusBar hidden={false} barStyle="dark-content" />

        <View style={styles.buttonsContainer}>
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
