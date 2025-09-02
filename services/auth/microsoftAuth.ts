import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
  tokenEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
};

export const useMicrosoftAuth = () => {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: process.env.EXPO_PUBLIC_MICROSOFT_CLIENT_ID || 'your-client-id',
      scopes: ['openid', 'profile', 'email', 'User.Read'],
      redirectUri: makeRedirectUri({
        scheme: 'artivosalesapp',
        path: 'auth'
      }),
      responseType: 'code',
    },
    discovery
  );

  const signInWithMicrosoft = async () => {
    const result = await promptAsync();
    return result;
  };

  return {
    request,
    response,
    signInWithMicrosoft,
  };
};