import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

import { colors } from '@/theme/colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Brand */}
      <View style={styles.header}>
        <View style={styles.brandMark}>
          <View style={styles.brandLine} />
          <Text style={styles.brand}>MARGIN</Text>
        </View>

        <Text style={styles.eyebrow}>WRITE · LEARN · REWRITE</Text>
      </View>

      {/* Main content */}
      <View style={styles.content}>
        <Text style={styles.title}>
          Writing is a
          {'\n'}
          <Text style={styles.titleAccent}>skill.</Text>
          {'\n'}
          Not a personality trait.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.subtitle}>
          Write something. We'll help you understand it,
          practice it, and get better.
        </Text>
      </View>

      {/* Bottom */}
      <View style={styles.footer}>
        <Pressable
          style={styles.button}
          onPress={() => router.push('/onboarding')}
        >
          <Text style={styles.buttonText}>Get started</Text>

          <Text style={styles.arrow}>→</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 24,
    backgroundColor: colors.dark.background,
  },

  header: {
    gap: 22,
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
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 2,
    color: colors.dark.muted,
  },

  content: {
    marginTop: 24,
    marginBottom: 32,
  },

  title: {
    fontSize: 39,
    lineHeight: 47,
    fontWeight: '700',
    color: colors.dark.text,
  },

  titleAccent: {
    color: colors.dark.accent,
  },

  divider: {
    width: 48,
    height: 1,
    marginTop: 28,
    marginBottom: 22,
    backgroundColor: colors.dark.border,
  },

  subtitle: {
    maxWidth: 330,
    fontSize: 16,
    lineHeight: 26,
    color: colors.dark.muted,
  },

  footer: {
    gap: 10,
  },

  button: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 17,
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
});