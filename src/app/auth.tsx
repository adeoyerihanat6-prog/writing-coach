import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';

import { colors } from '@/theme/colors';

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.brandMark}>
          <View style={styles.brandLine} />
          <Text style={styles.brand}>MARGIN</Text>
        </View>

        <Text style={styles.eyebrow}>YOUR WRITING SPACE</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          Make this
          {'\n'}
          <Text style={styles.titleAccent}>yours.</Text>
        </Text>

        <Text style={styles.subtitle}>
          Create an account so Margin can remember what
          you're working on and track how your writing changes
          over time.
        </Text>

        <View style={styles.form}>
          <View style={styles.field}>
            <Text style={styles.label}>EMAIL</Text>

            <TextInput
              style={styles.input}
              placeholder="you@example.com"
              placeholderTextColor={colors.dark.muted}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>PASSWORD</Text>

            <TextInput
              style={styles.input}
              placeholder="Create a password"
              placeholderTextColor={colors.dark.muted}
              secureTextEntry
            />
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Pressable
          style={styles.button}
          onPress={() => router.push('/goals')}
        >
          <Text style={styles.buttonText}>Create account</Text>
          <Text style={styles.arrow}>→</Text>
        </Pressable>

        <Text style={styles.signInPrompt}>
          Already have an account?{' '}
          <Text style={styles.signIn}>Sign in</Text>
        </Text>

        <Text style={styles.note}>Your writing stays yours.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 36,
    paddingBottom: 20,
    backgroundColor: colors.dark.background,
  },

  header: {
    gap: 16,
  },

  brandMark: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  brandLine: {
    width: 22,
    height: 1,
    backgroundColor: colors.dark.accent,
  },

  brand: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 3,
    color: colors.dark.text,
  },

  eyebrow: {
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 1.8,
    color: colors.dark.muted,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 24,
  },

  title: {
    fontSize: 38,
    lineHeight: 46,
    fontWeight: '700',
    color: colors.dark.text,
  },

  titleAccent: {
    color: colors.dark.accent,
  },

  subtitle: {
    maxWidth: 340,
    marginTop: 18,
    fontSize: 15,
    lineHeight: 23,
    color: colors.dark.muted,
  },

  form: {
    marginTop: 30,
    gap: 18,
  },

  field: {
    gap: 8,
  },

  label: {
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 1.8,
    color: colors.dark.muted,
  },

  input: {
    height: 50,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: colors.dark.border,
    borderRadius: 8,
    fontSize: 15,
    color: colors.dark.text,
    backgroundColor: colors.dark.surface,
  },

  footer: {
    width: '100%',
  },

  button: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: colors.dark.accent,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.dark.background,
  },

  arrow: {
    fontSize: 21,
    color: colors.dark.background,
  },

  signInPrompt: {
    marginTop: 12,
    textAlign: 'center',
    fontSize: 13,
    color: colors.dark.muted,
  },

  signIn: {
    fontWeight: '600',
    color: colors.dark.text,
  },

  note: {
    marginTop: 16,
    textAlign: 'center',
    fontSize: 11,
    color: colors.dark.muted,
  },
});