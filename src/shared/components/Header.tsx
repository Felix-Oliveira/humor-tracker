import { StyleSheet, Text, View } from "react-native";
import { theme } from "../themes/theme";


interface IHeaderProps  {
  name?: string | undefined
}
export const Header = ({ name  }: IHeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        Olá, <Text style={styles.headerBoldText}>{!name ? 'seu nome é?'  : `${name}!`}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: theme.fonts.title,
    fontFamily: theme.family.regular,
  },
  headerBoldText: {
    fontSize: theme.fonts.title,
    color: theme.colors.primary,
    fontFamily: theme.family.bold,
  },
});
