import { useExchangeCodeForTokenMutation } from "@/store/api/authApi";
import { useAuthRequest } from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: `https://login.microsoftonline.com/${
    process.env.EXPO_PUBLIC_MICROSOFT_TENANT_ID || "common"
  }/oauth2/v2.0/authorize`,
  tokenEndpoint: `https://login.microsoftonline.com/${
    process.env.EXPO_PUBLIC_MICROSOFT_TENANT_ID || "common"
  }/oauth2/v2.0/token`,
};

export const useMicrosoftAuth = () => {
  const [exchangeCode, { isLoading }] = useExchangeCodeForTokenMutation();

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: process.env.EXPO_PUBLIC_MICROSOFT_CLIENT_ID!,
      scopes: ["openid", "profile", "email", "User.Read"],
      redirectUri: process.env.EXPO_PUBLIC_MICROSOFT_REDIRECT_URI!,
      responseType: "code",
    },
    discovery
  );

  console.log(
    "---process.env.EXPO_PUBLIC_MICROSOFT_CLIENT_ID",
    process.env.EXPO_PUBLIC_MICROSOFT_CLIENT_ID
  );

  const signInWithMicrosoft = async () => {
    console.log("Starting Microsoft auth...");
    const result = await promptAsync();

    if (result.type === "success" && result.params.code) {
      console.log("Auth code received:", result.params.code);
      console.log("Direct tokens:", result.params.access_token);
      console.log("Refresh token:", result.params.refresh_token);
      try {
        const tokenResponse = await exchangeCode({
          code: result.params.code,
        }).unwrap();
        console.log("Tokens received:", tokenResponse);
        return { success: true, tokens: tokenResponse };
      } catch (error) {
        console.error("Token exchange failed:", error);
        return { success: false, error };
      }
    }

    return { success: false, error: "Auth cancelled or failed" };
  };

  return {
    request,
    response,
    signInWithMicrosoft,
    isLoading,
  };
};
