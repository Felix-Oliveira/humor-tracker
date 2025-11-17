import { StyleSheet, Text, View } from 'react-native'
import { theme } from '../themes/theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface IFooterProps {
  children: React.ReactNode
}
export const Footer = ({ children }: IFooterProps) => {
  const insets = useSafeAreaInsets()
  return (
    <View
      style={{ ...styles.footerContainer, paddingBottom: insets.bottom + 16 }}
    >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  footerContainer: {
    padding: 16,
    backgroundColor: theme.colors.paper,

    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    ...theme.shadows.default,
  },
})
