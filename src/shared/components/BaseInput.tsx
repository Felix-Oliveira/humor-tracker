import { Pressable, StyleSheet, Text, View } from 'react-native'
import { theme } from '../themes/theme'

interface IBaseInputProps {
  label: string
  children: React.ReactNode
  asButton?: boolean
  onPress?: () => void
}
export const BaseInput = ({
  children,
  label,
  asButton,
  onPress,
}: IBaseInputProps) => {
  return (
    <View style={styles.baseInputContainer}>
      <Text style={styles.label}>{label}</Text>

      {asButton && (
        <Pressable
          onPress={onPress}
          style={({ pressed }) =>
            pressed ? styles.baseInputPressed : styles.baseInput
          }
        >
          {children}
        </Pressable>
      )}
      {!asButton && <Pressable style={styles.baseInput}>{children}</Pressable>}
    </View>
  )
}

const styles = StyleSheet.create({
  baseInputContainer: {
    gap: 4,
    flexDirection: 'column',
  },
  label: {
    fontSize: theme.fonts.body,
    color: theme.colors.text,
    fontFamily: theme.family.regular,
  },
  baseInput: {
    borderRadius: 8,
    backgroundColor: theme.colors.background,
  },
  baseInputPressed: {
    opacity: 0.5,
    borderRadius: 8,
    backgroundColor: theme.colors.background,
  },
})
