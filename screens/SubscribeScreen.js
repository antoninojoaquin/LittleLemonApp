import * as React from "react";
import { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { validateEmail } from "../utils/index";

const SubscribeScreen = () => {
  const [email, setEmail] = useState("");
  const isEmailValid = !!validateEmail(email);

  const subscribed = () => {
    Alert.alert("Thanks for subscribing!", "Stay tuned!", [{ text: "Ok" }]);
    setEmail("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Image
        style={styles.logoImage}
        source={require("../assets/images/little-lemon-logo-grey.png")}
      />
      <Text style={styles.heroText}>
        {`Subscribe to our newsletter for our\nlatest delicious recipes!`}
      </Text>
      <TextInput
        placeholder="Type your email"
        placeholderTextColor="#9c9c9c"
        style={styles.newsletterInput}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
      />
      <Pressable
        onPress={subscribed}
        style={[styles.subscribeButton, !isEmailValid && styles.buttonDisabled]}
        disabled={!isEmailValid}
      >
        <Text style={styles.subscribeText}>Subscribe</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  logoImage: {
    height: 150,
    width: 150,
    resizeMode: "contain",
  },
  heroText: {
    fontSize: 24,
    marginTop: 48,
    textAlign: "center",
  },
  newsletterInput: {
    marginTop: 24,
    borderWidth: 1,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: "stretch",
    fontSize: 18,
  },
  subscribeButton: {
    marginTop: 24,
    backgroundColor: "#495E57",
    borderRadius: 8,
    alignSelf: "stretch",
    alignItems: "center",
    paddingVertical: 8,
  },
  subscribeText: {
    color: "white",
    fontSize: 20,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
});

export default SubscribeScreen;
