import { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import { TNavigationScreenProps, TRouteProps } from "../../Routes";
import { Header } from "../../shared/components/Header";
import { Footer } from "../../shared/components/Footer";
import { BaseInput } from "../../shared/components/BaseInput";
import { theme } from "../../shared/themes/theme";

export const Home = () => {

  const navigation = useNavigation<TNavigationScreenProps>();
  const { params } = useRoute<TRouteProps<'home'>>();

  const [name, setName] = useState('')



  useEffect(()=>{
    if(params?.newName){
      setName(params.newName || '')
    }
  },[params?.newName])


  return (
    <>
      <Header name={name} />
      <View style={{ flex: 1 }}></View>

      <Footer>
        <View style={styles.footerContainerView}>
          <Text style={styles.footerTitle}>
            Qual é o seu nome? 
          </Text>
          <BaseInput
            label="Nome:"
            asButton
            onPress={() => navigation.navigate("setusername")}
          >
            <TextInput
              style={styles.footerInput}
              pointerEvents="none"
              editable={false}
              placeholder="Escreva seu Nome aqui..."
              placeholderTextColor={theme.colors.textPlaceholder}
            />
          </BaseInput>
        </View>
      </Footer>
    </>
  );
};

const styles = StyleSheet.create({
  footerContainerView:{
    gap:8,

  },
  footerInput: {
    padding: 12,
    fontFamily: theme.family.regular,
    fontSize: theme.fonts.body,
    color: theme.colors.text,
  },
  footerTitle: {
    textAlign: "center",

    fontFamily: theme.family.regular,
    fontSize: theme.fonts.body,
    color: theme.colors.text,
  },
});
