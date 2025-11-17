import { Pressable, StyleSheet, Text } from 'react-native'
import { theme } from '../themes/theme'

interface IButtonProps {
  title?: string
  children?: React.ReactNode
  onPress?: () => void
  grow?: boolean 
  variant?: 'contained' | 'outlined'
  color?: string
}
export const Button = ({ children, title, onPress, grow, variant = 'contained', color }: IButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...styles.button,
        ...(pressed ? styles.buttonPressed : {}),
        ...(grow ? { flexGrow: 1 } : {}),
        ...(variant === 'contained' ? styles.buttonContained : {}),
        ...(variant === 'outlined' ? {
          ...styles.buttonOutlined,
          ...(color && {borderColor: color})
        } : {}),
      })}
      onPress={onPress}
    >
      {children}
      {!children && (
        <Text
          style={{
            ...styles.buttonTitle,
            ...(variant === 'contained' ? styles.buttonContainedTitle : {}),
            ...(variant === 'outlined' ? styles.buttonOutlinedTitle : {}),
          }}
        >
          {title}
        </Text>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: theme.colors.primary,

    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  buttonContained: {
    backgroundColor: theme.colors.primary,
  },
  buttonOutlined: {
    borderWidth:2,
    borderColor: theme.colors.primary,
    
    backgroundColor:'transparent',
  },
  buttonTitle: {
    color: theme.colors.primaryText,
    fontFamily: theme.family.bold,
    fontSize: theme.fonts.body,
  },
  buttonContainedTitle: {
    color: theme.colors.primaryText,
  },
  buttonOutlinedTitle: {
    color: theme.colors.primary,

  },
})
