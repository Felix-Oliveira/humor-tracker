import { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import { theme } from '../../shared/themes/theme'
import { TNavigationScreenProps } from '../../Routes'
import { BaseInput } from '../../shared/components/BaseInput'
import { Button } from '../../shared/components/Button'

export const SetUserName = () => {
  const navigation = useNavigation<TNavigationScreenProps>()
  const [name, setName] = useState('')

  useEffect(()=>{
    AsyncStorage.getItem('user-name').then(
      value =>{
        setName(value || '')
      }
    )
  },[])

  const handleSaveUserName = async () => {
    try {
      await AsyncStorage.setItem('user-name', name)
    } catch (e) {
      // saving error
    }
    navigation.popTo('home', { newName: name })
  }

  const insets = useSafeAreaInsets()
  return (
    <View style={{ ...styles.container, paddingBottom: insets.bottom }}>
      <Text style={styles.Title}>Qual é o seu nome?</Text>
      <BaseInput label='Nome:'>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          autoFocus
          placeholder='Escreva seu Nome aqui...'
          placeholderTextColor={theme.colors.textPlaceholder}
        />
      </BaseInput>
      <View style={{ flex: 1 }} />

      <Button onPress={handleSaveUserName} title='Salvar'></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 12,
    fontFamily: theme.family.regular,
    fontSize: theme.fonts.body,
    color: theme.colors.text,
  },
  container: {
    gap: 6,
    flex: 1,
  },
  Title: {
    textAlign: 'center',

    fontFamily: theme.family.regular,
    fontSize: theme.fonts.body,
    color: theme.colors.text,
  },
})
