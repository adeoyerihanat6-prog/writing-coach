import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useOnboarding } from '@/context/OnboardingContext';
import { colors } from '@/theme/colors';

const goals = [
  'Expressing ideas',
  'Professional writing',
  'Storytelling',
  'Academic writing',
  'Content & social writing',
  'Technical writing',
  'General writing',
];

export default function GoalsScreen() {
  const { selectedGoals, setSelectedGoals } = useOnboarding();

  function toggleGoal(goal: string) {
    setSelectedGoals((currentGoals) => {
      if (currentGoals.includes(goal)) {
        return currentGoals.filter((item) => item !== goal);
      }

      return [...currentGoals, goal];
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What do you want to improve?</Text>

      <Text style={styles.subtitle}>
        Pick one or more areas you want Writing Coach to help you with.
      </Text>

      <View style={styles.options}>
        {goals.map((goal) => {
          const isSelected = selectedGoals.includes(goal);

          return (
            <Pressable
              key={goal}
              style={[
                styles.option,
                isSelected && styles.selectedOption,
              ]}
              onPress={() => toggleGoal(goal)}
            >
              <Text
                style={[
                  styles.optionText,
                  isSelected && styles.selectedOptionText,
                ]}
              >
                {isSelected ? '✓  ' : ''}
                {goal}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.dark.background,
  },

  title: {
    marginTop: 80,
    fontSize: 30,
    fontWeight: '700',
    color: colors.dark.text,
  },

  subtitle: {
    marginTop: 12,
    fontSize: 16,
    lineHeight: 24,
    color: colors.dark.muted,
  },

  options: {
    marginTop: 32,
    gap: 12,
  },

  option: {
    padding: 18,
    borderWidth: 1,
    borderColor: colors.dark.border,
    borderRadius: 10,
    backgroundColor: colors.dark.surface,
  },

  selectedOption: {
    borderColor: colors.dark.accent,
    backgroundColor: colors.dark.accent,
  },

  optionText: {
    fontSize: 16,
    color: colors.dark.text,
  },

  selectedOptionText: {
    color: colors.dark.background,
    fontWeight: '600',
  },
});