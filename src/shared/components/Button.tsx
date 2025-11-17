import { Pressable, StyleSheet, Text } from 'react-native'
import { theme } from '../themes/theme'

interface IButtonProps {
  title?: string
  children?: React.ReactNode
  onPress?: () => void
}
export const Button = ({ children, title, onPress }: IButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...styles.button,
        ...(pressed ? styles.buttonPressed : {}),
      })}
      onPress={onPress}
    >
      {children}
      {!children && <Text style={styles.buttonTitle}>{title}</Text>}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: theme.colors.primary,

    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  buttonTitle: {
    color: theme.colors.primaryText,
    fontFamily: theme.family.regular,
    fontSize: theme.fonts.body,
  },
})
