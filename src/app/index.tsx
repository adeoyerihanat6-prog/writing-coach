import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Writing Coach</Text>

      <Text style={styles.subtitle}>
        Become a better writer, one piece at a time.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() =>
          Alert.alert(
            'Coming soon',
            'Your writing journey starts here.'
          )
        }
      >
        <Text style={styles.buttonText}>Start writing</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    marginTop: 12,
    fontSize: 16,
    textAlign: 'center',
    color: colors.dark.muted,
  },

  button: {
    marginTop: 32,
    paddingVertical: 14,
    paddingHorizontal: 28,
    backgroundColor: colors.dark.accent,
    borderRadius: 8,
  },

  buttonText: {
    color: colors.dark.background,
    fontSize: 16,
    fontWeight: '600',
  },
});