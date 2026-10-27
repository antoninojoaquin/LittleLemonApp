import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.logoImage}
          source={require("../assets/images/little-lemon-logo.png")}
        />
        <Text
          style={styles.heroText}
        >{`Little Lemon, your local\nMediterranean Bistro`}</Text>
      </View>

      <Pressable
        style={styles.newsletterButton}
        onPress={() => navigation.navigate("Subscribe")}
      >
        <Text style={styles.newsletterText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    height: 256,
    width: 256,
    resizeMode: "contain",
  },
  heroText: {
    fontSize: 24,
    marginTop: 64,
    textAlign: "center",
  },
  newsletterButton: {
    paddingVertical: 12,
    alignSelf: "stretch",
    borderRadius: 8,
    backgroundColor: "#495E57",
    marginBottom: 48,
    marginHorizontal: 24,
    alignItems: "center",
  },
  newsletterText: {
    color: "white",
    fontSize: 20,
  },
});

export default WelcomeScreen;
