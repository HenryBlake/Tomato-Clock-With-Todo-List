import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainPage from "./Views/MainPage";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Clock /> */}
      <MainPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
