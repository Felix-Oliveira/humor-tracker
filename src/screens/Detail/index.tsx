import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

import { TRouteProps, type TNavigationScreenProps } from '../../Routes'
import { theme } from '../../shared/themes/theme'
import { Footer } from '../../shared/components/Footer'
import { BaseInput } from '../../shared/components/BaseInput'
import { Button } from '../../shared/components/Button'
import { useState } from 'react'

export const Detail = () => {
  const navigation = useNavigation<TNavigationScreenProps>()
  const { params } = useRoute<TRouteProps<'detail'>>()

  const [rate, setRate] = useState(params.rate)
  const [description, setDescription] = useState('')
  const [date, setDate] = useState(new Date)
  const [showDateTimePicker, setShowDateTimePicker] = useState(false)
  return (
    <>
      <View style={styles.footerContainerView}>
        <Text style={styles.footerTitle}>Como está seu humor hoje?</Text>
        <View style={styles.footerStarContainer}>
          <TouchableOpacity onPress={() => setRate(1)}>
            <MaterialIcons
              name={rate >= 1 ? 'star' : 'star-border'}
              size={36}
              color={
                rate >= 1
                  ? theme.colors.highlight
                  : theme.colors.textPlaceholder
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRate(2)}>
            <MaterialIcons
              name={rate >= 2 ? 'star' : 'star-border'}
              size={36}
              color={
                rate >= 2
                  ? theme.colors.highlight
                  : theme.colors.textPlaceholder
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRate(3)}>
            <MaterialIcons
              name={rate >= 3 ? 'star' : 'star-border'}
              size={36}
              color={
                rate >= 3
                  ? theme.colors.highlight
                  : theme.colors.textPlaceholder
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRate(4)}>
            <MaterialIcons
              name={rate >= 4 ? 'star' : 'star-border'}
              size={36}
              color={
                rate >= 4
                  ? theme.colors.highlight
                  : theme.colors.textPlaceholder
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRate(5)}>
            <MaterialIcons
              name={rate >= 5 ? 'star' : 'star-border'}
              size={36}
              color={
                rate >= 5
                  ? theme.colors.highlight
                  : theme.colors.textPlaceholder
              }
            />
          </TouchableOpacity>
        </View>

        <BaseInput
          label='Data e Hora'
          asButton
          onPress={() => setShowDateTimePicker(true)}
        >
          <TextInput
            value={date.toLocaleString('pt-Br')}
            
            pointerEvents='none'
            editable={false}
            style={styles.footerInput}
            placeholder='Escreva seu Nome aqui...'
            placeholderTextColor={theme.colors.textPlaceholder}
          />
        </BaseInput>
        <DateTimePickerModal
          isVisible={showDateTimePicker}
          date={date}
          mode='datetime'
          onConfirm={(date) => {setShowDateTimePicker(false), setDate(date)}}
          onCancel={() => setShowDateTimePicker(false)}
        />
        <BaseInput label='Descreva mais sobre esse humor'>
          <TextInput
            value={description}
            onChangeText={setDescription}
            style={{ ...styles.footerInputArea, ...styles.footerInput }}
            placeholder='Escreva uma nota...'
            placeholderTextColor={theme.colors.textPlaceholder}
            multiline
            numberOfLines={20}
          />
        </BaseInput>

        <View style={{ flex: 1 }} />

        <View style={styles.actionsContainer}>
          {params.id && (
            <Button variant='outlined' color={theme.colors.error}>
              <MaterialIcons
                name='delete-outline'
                size={18}
                color={theme.colors.error}
              />
            </Button>
          )}

          <Button
            title='Cancelar'
            grow
            variant='outlined'
            onPress={() => navigation.goBack()}
          />
          <Button title='Salvar' grow />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  footerContainerView: {
    gap: 8,
    flex: 1,
  },
  footerInput: {
    padding: 12,
    fontFamily: theme.family.regular,
    fontSize: theme.fonts.body,
    color: theme.colors.text,
  },
  footerInputArea: {
    height: theme.fonts.body * 20,
    textAlignVertical: 'top',
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
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 30,
  },
})
