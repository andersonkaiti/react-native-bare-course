import { Image, SafeAreaView, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { UserIcon } from '../components/user-icon'
import userIcon from '../images/user-icon/user-icon.png'
import { styles } from './styles'

export function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          source={userIcon}
          style={{
            width: 100,
            height: 100,
          }}
        />

        <SvgXml
          width={400}
          height={400}
          xml={`
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_2)">
                <circle cx="50" cy="100" r="48" fill="black"/>
                <circle cx="50" cy="27" r="21" fill="black"/>
              </g>
              <defs>
                <clipPath id="clip0_1_2">
                  <rect width="100" height="100" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          `}
        />

        <UserIcon width={500} height={500} />
      </View>
    </SafeAreaView>
  )
}
