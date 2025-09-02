# Microsoft Auth Setup Guide

## ✅ What's Already Done
- Installed `expo-auth-session` and `expo-crypto`
- Created `useMicrosoftAuth` hook
- Created `MicrosoftSignIn` component
- Added environment variable placeholder

## 🔧 What You Need to Do

### 1. Azure AD App Registration
1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to **Azure Active Directory** > **App registrations**
3. Click **New registration**
4. Fill in:
   - **Name**: ArtivoSalesApp
   - **Supported account types**: Accounts in any organizational directory and personal Microsoft accounts
   - **Redirect URI**: `artivosalesapp://auth`
5. Copy the **Application (client) ID**

### 2. Update Environment Variables
Replace in `.env.development`:
```env
EXPO_PUBLIC_MICROSOFT_CLIENT_ID=your-actual-client-id-here
```

### 3. Configure App Scheme
Already configured in `app.json`:
```json
"scheme": "artivosalesapp"
```

### 4. Usage Example
```tsx
import { MicrosoftSignIn } from '@/components/molecules/MicrosoftSignIn';

export function LoginScreen() {
  const handleSuccess = (code: string) => {
    console.log('Auth code:', code);
    // Exchange code for access token
  };

  const handleError = (error: any) => {
    console.error('Auth error:', error);
  };

  return (
    <MicrosoftSignIn
      onSuccess={handleSuccess}
      onError={handleError}
    />
  );
}
```

## 🚀 Ready to Use!
Once you add the real client ID, Microsoft auth will work!