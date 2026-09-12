import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { router } from 'expo-router';

import { colors } from '@/theme/colors';



export default function BaselineScreen() {
  const [writing, setWriting] = useState('');

  const wordCount = writing.trim()
    ? writing.trim().split(/\s+/).length
    : 0;

 const canContinue = wordCount > 0;

  function handleSubmit() {
    if (!canContinue) {
      return;
    }

    router.push('/analysis');
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.eyebrow}>YOUR BASELINE</Text>

        <Text style={styles.title}>Let's see how you write.</Text>

        <Text style={styles.subtitle}>
          Don't overthink it. Write naturally. There are no wrong answers here.
        </Text>

        <View style={styles.promptCard}>
          <Text style={styles.promptLabel}>WRITE ABOUT THIS</Text>

          <Text style={styles.prompt}>
            Tell us about something you've learned recently that changed the
            way you think.
          </Text>
        </View>

        <View style={styles.extraSpace}>
          <Text style={styles.helperTitle}>A few things to remember</Text>

          <Text style={styles.helperText}>
            Write the way you normally would. Don't try to impress the coach.
            We're interested in your natural writing style.
          </Text>

          <Text style={styles.helperText}>
            Your response will be used to create your initial writing profile.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.composer}>
        <TextInput
          value={writing}
          onChangeText={setWriting}
          placeholder="Start writing here..."
          placeholderTextColor={colors.dark.muted}
          multiline
          textAlignVertical="top"
          style={styles.input}
        />

        <View style={styles.composerFooter}>
          <Text style={styles.wordCount}>{wordCount} words</Text>

          <Pressable
            style={[
              styles.submitButton,
              !canContinue && styles.disabledButton,
            ]}
            onPress={handleSubmit}
            disabled={!canContinue}
          >
            <Text
              style={[
                styles.submitButtonText,
                !canContinue && styles.disabledButtonText,
              ]}
            >
              Submit
            </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark.background,
  },

  scrollView: {
    flex: 1,
  },

  content: {
    padding: 24,
    paddingTop: 64,
    paddingBottom: 24,
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

  promptCard: {
    marginTop: 32,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.dark.border,
    borderRadius: 12,
    backgroundColor: colors.dark.surface,
  },

  promptLabel: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: colors.dark.muted,
  },

  prompt: {
    marginTop: 10,
    fontSize: 17,
    lineHeight: 26,
    color: colors.dark.text,
  },

  extraSpace: {
    marginTop: 48,
    paddingBottom: 120,
  },

  helperTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.dark.text,
  },

  helperText: {
    marginTop: 12,
    fontSize: 15,
    lineHeight: 24,
    color: colors.dark.muted,
  },

  composer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    borderTopWidth: 1,
    borderTopColor: colors.dark.border,
    backgroundColor: colors.dark.background,
  },

  input: {
    minHeight: 52,
    maxHeight: 120,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: colors.dark.border,
    borderRadius: 16,
    backgroundColor: colors.dark.surface,
    fontSize: 16,
    lineHeight: 23,
    color: colors.dark.text,
  },

  composerFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },

  wordCount: {
    fontSize: 13,
    color: colors.dark.muted,
  },

  submitButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: colors.dark.accent,
  },

  disabledButton: {
    backgroundColor: colors.dark.surface,
    borderWidth: 1,
    borderColor: colors.dark.border,
  },

  submitButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.dark.background,
  },

  disabledButtonText: {
    color: colors.dark.muted,
  },
});