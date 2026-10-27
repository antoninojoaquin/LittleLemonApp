import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../components/PrimaryButton";
import { colors, radius, shadow } from "../constants/theme";

const HIGHLIGHTS = ["Fresh", "Seasonal", "Family-owned"];

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.decorCircle} />

      <View style={styles.content}>
        <View style={styles.logoCard}>
          <Image
            style={styles.logoImage}
            resizeMode="contain"
            source={require("../assets/images/little-lemon-logo.png")}
          />
        </View>

        <Text style={styles.title}>Your local{"\n"}Mediterranean Bistro</Text>
        <Text style={styles.subtitle}>
          Traditional recipes served with a modern twist, right here in Chicago.
        </Text>

        <View style={styles.chips}>
          {HIGHLIGHTS.map((item) => (
            <View key={item} style={styles.chip}>
              <Text style={styles.chipText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <PrimaryButton
          title="Join our newsletter"
          onPress={() => navigation.navigate("Subscribe")}
        />
        <Text style={styles.footerNote}>New recipes every week. No spam.</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    overflow: "hidden",
  },
  decorCircle: {
    position: "absolute",
    top: -140,
    right: -120,
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: colors.accentSoft,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 28,
  },
  logoCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    paddingVertical: 24,
    paddingHorizontal: 32,
    ...shadow,
  },
  logoImage: {
    width: 110,
    height: 194,
  },
  title: {
    marginTop: 36,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "800",
    color: colors.text,
    textAlign: "center",
  },
  subtitle: {
    marginTop: 12,
    fontSize: 16,
    lineHeight: 23,
    color: colors.textMuted,
    textAlign: "center",
    maxWidth: 300,
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
    marginTop: 24,
  },
  chip: {
    backgroundColor: colors.accentSoft,
    borderRadius: radius.pill,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  chipText: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "600",
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  footerNote: {
    marginTop: 12,
    textAlign: "center",
    fontSize: 13,
    color: colors.textMuted,
  },
});

export default WelcomeScreen;
