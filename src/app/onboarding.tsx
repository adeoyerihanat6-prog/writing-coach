import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's work on your writing.</Text>

      <Text style={styles.subtitle}>
        You don't need to be a "good writer" to start.
        You just need something to say.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: colors.dark.background,
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.dark.text,
  },

  subtitle: {
    marginTop: 16,
    fontSize: 17,
    lineHeight: 26,
    color: colors.dark.muted,
  },
});