import { Platform, ScrollView, Text } from 'react-native'

// O React Native contém a Platform API, que fornece informações sobre a
// plataforma em que o app está sendo executado. Ela é útil para
// personalizar o comportamento do app de acordo com a plataforma e a versão,
// caso haja alguma incompatibilidade, e personalizar um fallback.

// No Platform.select({}), ele retorna o valor da plataforma que está sendo
// executada. Caso não encontre, ele retorna o valor native e, se não houver
// valor native, ele retorna o valor default.

// Dessa forma, caso, por exemplo, a prototipação da UI do android que seja
// diferente da UI do iOS, podemos usar Platform.select({}) para personalizar
// a UI de acordo com a plataforma.

// console.log({
//   OS: Platform.OS,
//   Version: Platform.Version,
// })

// const isAndroid = Platform.OS === 'android'

export function App() {
  // if (isAndroid) {
  //   return (
  //     <ScrollView>
  //       <Text style={{ marginTop: 58, fontSize: 32 }}>Hello, Android!</Text>
  //     </ScrollView>
  //   )
  // }

  return (
    <ScrollView>
      <Text style={{ marginTop: 58, fontSize: 32 }}>
        {Platform.select({
          android: (
            <>
              Hello, <Text style={{ fontWeight: 'bold' }}>Android!</Text>
            </>
          ),
          ios: 'Hello, iOS!',
          native: 'Hello, Native!',
          default: 'Hello, Default!',
        })}
      </Text>
    </ScrollView>
  )
}
