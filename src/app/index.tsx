import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/theme/colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Writing Coach</Text>

      <Text style={styles.subtitle}>
        Become a better writer, one piece at a time.
      </Text>
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
});