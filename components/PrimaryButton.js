import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { colors, radius } from "../constants/theme";

const PrimaryButton = ({ title, onPress, disabled = false, style }) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    paddingVertical: 16,
    alignItems: "center",
    alignSelf: "stretch",
  },
  pressed: {
    backgroundColor: colors.primaryDark,
    transform: [{ scale: 0.98 }],
  },
  disabled: {
    opacity: 0.4,
  },
  text: {
    color: colors.surface,
    fontSize: 17,
    fontWeight: "600",
    letterSpacing: 0.3,
  },
});

export default PrimaryButton;
