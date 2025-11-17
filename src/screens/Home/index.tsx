import { useEffect, useState } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'


import { TNavigationScreenProps, TRouteProps } from '../../Routes'
import { Header } from '../../shared/components/Header'
import { Footer } from '../../shared/components/Footer'
import { BaseInput } from '../../shared/components/BaseInput'
import { theme } from '../../shared/themes/theme'


export const Home = () => {
  const navigation = useNavigation<TNavigationScreenProps>()
  const { params } = useRoute<TRouteProps<'home'>>()

  const [name, setName] = useState('')

  useEffect(() => {
    if (params?.newName) {
      setName(params.newName || '')
    }
  }, [params?.newName])

  useEffect(() => {
    AsyncStorage.getItem('user-name').then((value) => {
      setName(value || '')
    })
  }, [])

  return (
    <>
      <Header name={name} />
      <View style={styles.emptyContenteContainer}>
        <Text style={styles.emptyContentText}>
          Você ainda não{'\n'} registrou seu humor!
        </Text>
      </View>

      <Footer>
        <View style={styles.footerContainerView}>
          <Text style={styles.footerTitle}>
            {name ? 'Como está seu humor hoje?' : 'Qual é o seu nome?'}
          </Text>

          {!name && (
            <BaseInput
              label='Nome:'
              asButton
              onPress={() => navigation.navigate('setusername')}
            >
              <TextInput
                style={styles.footerInput}
                pointerEvents='none'
                editable={false}
                placeholder='Escreva seu Nome aqui...'
                placeholderTextColor={theme.colors.textPlaceholder}
              />
            </BaseInput>
          )}
          {name && (
            <View style={styles.footerStarContainer}>
              <TouchableOpacity onPress={()=>{navigation.navigate('detail', {rate:1})}}>
                <MaterialIcons
                  name='star-border'
                  size={36}
                  color={theme.colors.textPlaceholder}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{navigation.navigate('detail', {rate:2})}}>
                <MaterialIcons
                  name='star-border'
                  size={36}
                  color={theme.colors.textPlaceholder}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{navigation.navigate('detail', {rate:3})}}>
                <MaterialIcons
                  name='star-border'
                  size={36}
                  color={theme.colors.textPlaceholder}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{navigation.navigate('detail', {rate:4})}}>
                <MaterialIcons
                  name='star-border'
                  size={36}
                  color={theme.colors.textPlaceholder}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{navigation.navigate('detail', {rate:5})}}>
                <MaterialIcons
                  name='star-border'
                  size={36}
                  color={theme.colors.textPlaceholder}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Footer>
    </>
  )
}

const styles = StyleSheet.create({
  footerContainerView: {
    gap: 8,
  },
  footerInput: {
    padding: 12,
    fontFamily: theme.family.regular,
    fontSize: theme.fonts.body,
    color: theme.colors.text,
  },
  footerTitle: {
    textAlign: 'center',
    fontFamily: theme.family.regular,
    fontSize: theme.fonts.body,
    color: theme.colors.text,
  },
  footerStarContainer: {
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  emptyContenteContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContentText: {
    textAlign: 'center',
    fontFamily: theme.family.italic,
    fontSize: theme.fonts.subtitle,
    color: theme.colors.textPlaceholder,
  },
})
