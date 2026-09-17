import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors } from '@/theme/colors';

const sampleAnalysis = {
  scores: [
    {
      skill: 'Clarity',
      score: 74,
    },
    {
      skill: 'Structure',
      score: 82,
    },
    {
      skill: 'Specificity',
      score: 61,
    },
    {
      skill: 'Sentence Craft',
      score: 70,
    },
    {
      skill: 'Vocabulary',
      score: 76,
    },
    {
      skill: 'Flow',
      score: 72,
    },
  ],

  strongestSkill: {
    skill: 'Structure',
    explanation:
      'Your ideas follow a logical order, making it easy for the reader to understand how one point connects to the next.',
  },

  focusSkill: {
    skill: 'Specificity',
    explanation:
      'Your main ideas are clear, but some points would become stronger with concrete examples or details.',
  },

  observations: [
    {
      excerpt: '“It changed the way I think.”',
      issue: 'The idea is meaningful but quite general.',
      explanation:
        'A specific example of what changed in your thinking would give the reader something concrete to understand.',
    },
    {
      excerpt: '“I started seeing things differently.”',
      issue: 'The statement could be more precise.',
      explanation:
        'Try explaining exactly what you started noticing or doing differently.',
    },
  ],

  lesson: {
    title: 'Make your ideas easier to picture',
    content:
      'When you make a point, ask yourself: “Can I give the reader something concrete to hold onto?” Examples, details, and specific situations can turn a general statement into a memorable one.',
  },
};

export default function AnalysisScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.eyebrow}>YOUR WRITING ANALYSIS</Text>

      <Text style={styles.title}>Here’s what I noticed.</Text>

      <Text style={styles.subtitle}>
        This is your starting point. We’ll use it to help you improve over
        time.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>SKILL SNAPSHOT</Text>

        <View style={styles.scoresCard}>
          {sampleAnalysis.scores.map((item) => (
            <View key={item.skill} style={styles.scoreRow}>
              <View style={styles.scoreHeader}>
                <Text style={styles.scoreSkill}>{item.skill}</Text>

                <Text style={styles.scoreValue}>{item.score}</Text>
              </View>

              <View style={styles.progressTrack}>
                <View
                  style={[
                    styles.progressFill,
                    { width: `${item.score}%` },
                  ]}
                />
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>YOUR STRONGEST SKILL</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            {sampleAnalysis.strongestSkill.skill}
          </Text>

          <Text style={styles.cardText}>
            {sampleAnalysis.strongestSkill.explanation}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>YOUR FOCUS</Text>

        <View style={styles.focusCard}>
          <Text style={styles.cardTitle}>
            {sampleAnalysis.focusSkill.skill}
          </Text>

          <Text style={styles.cardText}>
            {sampleAnalysis.focusSkill.explanation}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>WHAT I NOTICED</Text>

        {sampleAnalysis.observations.map((observation, index) => (
          <View key={index} style={styles.observationCard}>
            <Text style={styles.excerpt}>{observation.excerpt}</Text>

            <Text style={styles.observationIssue}>
              {observation.issue}
            </Text>

            <Text style={styles.cardText}>
              {observation.explanation}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>MINI LESSON</Text>

        <View style={styles.lessonCard}>
          <Text style={styles.lessonTitle}>
            {sampleAnalysis.lesson.title}
          </Text>

          <Text style={styles.cardText}>
            {sampleAnalysis.lesson.content}
          </Text>
        </View>
      </View>

      <View style={styles.bottomSpace} />
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
    paddingTop: 64,
  },

  eyebrow: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: colors.dark.accent,
  },

  title: {
    marginTop: 12,
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '700',
    color: colors.dark.text,
  },

  subtitle: {
    marginTop: 12,
    fontSize: 16,
    lineHeight: 25,
    color: colors.dark.muted,
  },

  section: {
    marginTop: 36,
  },

  sectionLabel: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: colors.dark.muted,
  },

  scoresCard: {
    marginTop: 12,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.dark.border,
    borderRadius: 12,
    backgroundColor: colors.dark.surface,
  },

  scoreRow: {
    marginBottom: 18,
  },

  scoreRowLast: {
    marginBottom: 0,
  },

  scoreHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  scoreSkill: {
    fontSize: 14,
    color: colors.dark.text,
  },

  scoreValue: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.dark.accent,
  },

  progressTrack: {
    height: 6,
    overflow: 'hidden',
    borderRadius: 999,
    backgroundColor: colors.dark.border,
  },

  progressFill: {
    height: '100%',
    borderRadius: 999,
    backgroundColor: colors.dark.accent,
  },

  card: {
    marginTop: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.dark.border,
    borderRadius: 12,
    backgroundColor: colors.dark.surface,
  },

  focusCard: {
    marginTop: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.dark.accent,
    borderRadius: 12,
    backgroundColor: colors.dark.surface,
  },

  cardTitle: {
    fontSize: 19,
    lineHeight: 26,
    fontWeight: '600',
    color: colors.dark.text,
  },

  cardText: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 24,
    color: colors.dark.muted,
  },

  observationCard: {
    marginTop: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.dark.border,
    borderRadius: 12,
    backgroundColor: colors.dark.surface,
  },

  excerpt: {
    fontSize: 15,
    lineHeight: 23,
    fontStyle: 'italic',
    color: colors.dark.accent,
  },

  observationIssue: {
    marginTop: 12,
    fontSize: 16,
    lineHeight: 23,
    fontWeight: '600',
    color: colors.dark.text,
  },

  lessonCard: {
    marginTop: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.dark.border,
    borderRadius: 12,
    backgroundColor: colors.dark.surface,
  },

  lessonTitle: {
    fontSize: 20,
    lineHeight: 27,
    fontWeight: '600',
    color: colors.dark.text,
  },

  bottomSpace: {
    height: 48,
  },
});