# Reusable Form Component Usage

## Import
```tsx
import { Form, FormField } from '@/components/molecules/Form';
```

## Basic Usage

### Login Form
```tsx
const loginFields: FormField[] = [
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    rules: { 
      required: 'Email is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Invalid email'
      }
    }
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    rules: { 
      required: 'Password is required',
      minLength: { value: 6, message: 'Min 6 characters' }
    }
  }
];

export function LoginScreen() {
  const handleLogin = (data: any) => {
    console.log('Login data:', data);
  };

  return (
    <Form
      fields={loginFields}
      onSubmit={handleLogin}
      submitText="Login"
    />
  );
}
```

### Registration Form
```tsx
const registerFields: FormField[] = [
  {
    name: 'name',
    label: 'Full Name',
    placeholder: 'Enter your name',
    rules: { required: 'Name is required' }
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    rules: { required: 'Email is required' }
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    rules: { required: 'Password is required' }
  }
];

<Form
  fields={registerFields}
  onSubmit={handleRegister}
  submitText="Register"
  loading={isLoading}
/>
```

## Features
- ✅ Automatic validation
- ✅ Error display
- ✅ Loading states
- ✅ Theme support
- ✅ TypeScript types
- ✅ Reusable anywhere