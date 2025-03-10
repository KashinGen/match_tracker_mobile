import { COLORS } from "@/constants/Colors";
import { MatchScreen } from "@/content/MatchScreen/MatchScreen";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";

export default function Index() {
  return (
    // <View
    //   style={styles.screen}
    // >
    //   <MatchScreen/>
    // </View>

            <SafeAreaView style={styles.screen}>
            <ScrollView>
                <MatchScreen />
            </ScrollView>
            </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
    fontFamily: 'InterSemiBold'
  },
})