import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

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

  function handleContinue() {
    if (selectedGoals.length === 0) {
      return;
    }

    router.push('/baseline');
  }

  const canContinue = selectedGoals.length > 0;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
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

      <Pressable
        style={[
          styles.continueButton,
          !canContinue && styles.disabledButton,
        ]}
        onPress={handleContinue}
        disabled={!canContinue}
      >
        <Text
          style={[
            styles.continueButtonText,
            !canContinue && styles.disabledButtonText,
          ]}
        >
          Continue
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark.background,
  },

  content: {
    padding: 24,
    paddingTop: 80,
    paddingBottom: 40,
  },

  title: {
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

  continueButton: {
    marginTop: 32,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: colors.dark.accent,
  },

  disabledButton: {
    backgroundColor: colors.dark.surface,
    borderWidth: 1,
    borderColor: colors.dark.border,
  },

  continueButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.dark.background,
  },

  disabledButtonText: {
    color: colors.dark.muted,
  },
});