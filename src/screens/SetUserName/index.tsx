
import { View, Text, TextInput, StyleSheet } from "react-native";
import { BaseInput } from '../../shared/components/BaseInput';
import { theme } from "../../shared/themes/theme";
import { Button } from "../../shared/components/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TNavigationScreenProps } from "../../Routes";



export const SetUserName = ()=> {
  const navigation = useNavigation<TNavigationScreenProps>()
  const [name, setName] = useState('')

    const insets = useSafeAreaInsets()
  return (
    <View style={{...styles.container, paddingBottom: insets.bottom}}>
      <Text style={styles.Title}>Qual é o seu nome?</Text>
          <BaseInput
            label="Nome:"

          >
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={(text) => setName(text)}
              autoFocus
              placeholder="Escreva seu Nome aqui..."
              placeholderTextColor={theme.colors.textPlaceholder}
            />
          </BaseInput>
          <View style={{flex:1}}/>

          <Button onPress={()=> navigation.popTo('home',{newName:name})} title="Salvar">
          
          </Button>
    </View>

  );
}


const styles = StyleSheet.create({
  input: {
    padding: 12,
    fontFamily: theme.family.regular,
    fontSize: theme.fonts.body,
    color: theme.colors.text,
  },
  container:{
    gap: 6,
    flex:1,
    
  },
  Title: {
    textAlign: "center",

    fontFamily: theme.family.regular,
    fontSize: theme.fonts.body,
    color: theme.colors.text,
  },
});

