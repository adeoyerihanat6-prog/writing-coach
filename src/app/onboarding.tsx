import { Pressable, StyleSheet, Text, View } from 'react-native';

import { router } from 'expo-router';

import { colors } from '@/theme/colors';

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>MARGIN</Text>

      <View style={styles.hero}>
        <Text style={styles.title}>
          Let's work on your writing.
        </Text>

        <Text style={styles.subtitle}>
          You don't need to be a "good writer" to start.
          You just need something to say.
        </Text>

        <Text style={styles.loop}>
          Write. Get coached. Practice. Come back better.
        </Text>
      </View>

      <View>
        <Pressable
          style={styles.button}
          onPress={() => router.push('/goals')}
        >
          <Text style={styles.buttonText}>Let's begin</Text>
        </Pressable>

        <Text style={styles.signInPrompt}>
          Already have an account?{' '}
          <Text style={styles.signIn}>Sign in</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 24,
    paddingTop: 64,
    paddingBottom: 40,
    backgroundColor: colors.dark.background,
  },

  brand: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 3,
    color: colors.dark.accent,
  },

  hero: {
    marginBottom: 80,
  },

  title: {
    fontSize: 34,
    lineHeight: 42,
    fontWeight: '700',
    color: colors.dark.text,
  },

  subtitle: {
    marginTop: 16,
    fontSize: 17,
    lineHeight: 26,
    color: colors.dark.muted,
  },

  loop: {
    marginTop: 24,
    fontSize: 15,
    lineHeight: 23,
    fontWeight: '600',
    color: colors.dark.text,
  },

  button: {
    alignSelf: 'stretch',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: colors.dark.accent,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.dark.background,
  },

  signInPrompt: {
    marginTop: 18,
    textAlign: 'center',
    fontSize: 14,
    color: colors.dark.muted,
  },

  signIn: {
    fontWeight: '600',
    color: colors.dark.text,
  },
});