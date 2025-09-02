import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { ThemedText } from '@/components/atoms/ThemedText/ThemedText';
import { ThemedView } from '@/components/atoms/ThemedView/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';

export interface FormField {
  name: string;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  rules?: any;
}

interface FormProps {
  fields: FormField[];
  onSubmit: (data: any) => void;
  submitText?: string;
  loading?: boolean;
}

export function Form({ fields, onSubmit, submitText = 'Submit', loading = false }: FormProps) {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const borderColor = useThemeColor({}, 'border');
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');

  return (
    <ThemedView style={styles.container}>
      {fields.map((field) => (
        <View key={field.name} style={styles.fieldContainer}>
          <ThemedText style={styles.label}>{field.label}</ThemedText>
          
          <Controller
            control={control}
            name={field.name}
            rules={field.rules}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[
                  styles.input,
                  { borderColor, backgroundColor, color: textColor },
                  errors[field.name] && styles.inputError
                ]}
                value={value}
                onChangeText={onChange}
                placeholder={field.placeholder}
                secureTextEntry={field.type === 'password'}
                keyboardType={field.type === 'email' ? 'email-address' : 'default'}
                autoCapitalize={field.type === 'email' ? 'none' : 'sentences'}
              />
            )}
          />
          
          {errors[field.name] && (
            <ThemedText style={styles.errorText}>
              {errors[field.name]?.message}
            </ThemedText>
          )}
        </View>
      ))}

      <TouchableOpacity
        style={[styles.submitButton, loading && styles.submitButtonDisabled]}
        onPress={handleSubmit(onSubmit)}
        disabled={loading}
      >
        <ThemedText style={styles.submitText}>
          {loading ? 'Loading...' : submitText}
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  fieldContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
  inputError: {
    borderColor: '#EF4444',
  },
  errorText: {
    color: '#EF4444',
    fontSize: 14,
    marginTop: 4,
  },
  submitButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  submitButtonDisabled: {
    backgroundColor: '#9CA3AF',
  },
  submitText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});