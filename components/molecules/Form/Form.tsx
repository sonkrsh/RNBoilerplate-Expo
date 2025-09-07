import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { StyledText } from '@/components/atoms/StyledText';
import { StyledView } from '@/components/atoms/StyledView';
import { Colors } from '@/constants/Colors';
import { styles } from './styles';

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
  const borderColor = Colors.border;
  const backgroundColor = Colors.background;
  const textColor = Colors.text;

  return (
    <StyledView style={styles.container}>
      {fields.map((field) => (
        <View key={field.name} style={styles.fieldContainer}>
          <StyledText style={styles.label}>{field.label}</StyledText>
          
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
            <StyledText style={styles.errorText}>
              {errors[field.name]?.message}
            </StyledText>
          )}
        </View>
      ))}

      <TouchableOpacity
        style={[styles.submitButton, loading && styles.submitButtonDisabled]}
        onPress={handleSubmit(onSubmit)}
        disabled={loading}
      >
        <StyledText style={styles.submitText}>
          {loading ? 'Loading...' : submitText}
        </StyledText>
      </TouchableOpacity>
    </StyledView>
  );
}

