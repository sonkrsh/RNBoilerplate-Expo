export interface MicrosoftTokens {
  access_token: string;
  refresh_token: string;
  id_token: string;
  expires_in: number;
}

export const exchangeCodeForTokens = async (code: string): Promise<MicrosoftTokens> => {
  const clientId = process.env.EXPO_PUBLIC_MICROSOFT_CLIENT_ID;
  const redirectUri = 'artivosalesapp://auth';

  const response = await fetch('https://login.microsoftonline.com/common/oauth2/v2.0/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId!,
      code,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
      scope: 'openid profile email User.Read',
    }),
  });

  if (!response.ok) {
    throw new Error('Token exchange failed');
  }

  return response.json();
};