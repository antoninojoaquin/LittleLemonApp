import * as React from "react";
import { useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../components/PrimaryButton";
import { colors, radius, shadow } from "../constants/theme";
import { validateEmail } from "../utils/index";

const SubscribeScreen = () => {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const isEmailValid = !!validateEmail(email);
  const showError = email.length > 0 && !isEmailValid && !isFocused;

  const subscribed = () => {
    Alert.alert("Thanks for subscribing!", "Stay tuned!", [{ text: "Ok" }]);
    setEmail("");
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.card}>
            <View style={styles.badge}>
              <Image
                style={styles.logoImage}
                resizeMode="contain"
                source={require("../assets/images/little-lemon-logo-grey.png")}
              />
            </View>

            <Text style={styles.title}>Stay in the loop</Text>
            <Text style={styles.subtitle}>
              Subscribe to our newsletter for our latest delicious recipes!
            </Text>

            <Text style={styles.label}>Email address</Text>
            <TextInput
              placeholder="you@example.com"
              placeholderTextColor={colors.textMuted}
              style={[
                styles.input,
                isFocused && styles.inputFocused,
                showError && styles.inputError,
              ]}
              value={email}
              onChangeText={setEmail}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="email"
              keyboardType="email-address"
              returnKeyType="done"
              onSubmitEditing={() => isEmailValid && subscribed()}
            />
            {showError && (
              <Text style={styles.errorText}>
                Please enter a valid email address.
              </Text>
            )}

            <PrimaryButton
              title="Subscribe"
              onPress={subscribed}
              disabled={!isEmailValid}
              style={styles.button}
            />
          </View>

          <Text style={styles.footnote}>You can unsubscribe at any time.</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  flex: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: 24,
    alignItems: "center",
    ...shadow,
  },
  badge: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: colors.accentSoft,
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    width: 48,
    height: 56,
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "800",
    color: colors.text,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    color: colors.textMuted,
    textAlign: "center",
  },
  label: {
    alignSelf: "stretch",
    marginTop: 28,
    marginBottom: 8,
    fontSize: 13,
    fontWeight: "600",
    color: colors.text,
  },
  input: {
    alignSelf: "stretch",
    backgroundColor: colors.background,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: colors.text,
  },
  inputFocused: {
    borderColor: colors.primary,
    backgroundColor: colors.surface,
  },
  inputError: {
    borderColor: colors.error,
  },
  errorText: {
    alignSelf: "stretch",
    marginTop: 6,
    fontSize: 13,
    color: colors.error,
  },
  button: {
    marginTop: 24,
  },
  footnote: {
    marginTop: 16,
    textAlign: "center",
    fontSize: 13,
    color: colors.textMuted,
  },
});

export default SubscribeScreen;
