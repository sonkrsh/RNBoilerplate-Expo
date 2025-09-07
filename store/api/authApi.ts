import { baseApi } from "./baseApi";

export interface AuthTokens {
  access_token: string;
  refresh_token?: string;
  id_token?: string;
  expires_in: number;
  token_type: string;
}

export interface UserProfile {
  id: string;
  displayName: string;
  mail: string;
  userPrincipalName: string;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    exchangeCodeForToken: builder.mutation<AuthTokens, { code: string }>({
      query: ({ code }) => ({
        url: "/auth/microsoft/token",
        method: "POST",
        data: {
          code,
          client_id: process.env.EXPO_PUBLIC_MICROSOFT_CLIENT_ID,
          redirect_uri: process.env.EXPO_PUBLIC_MICROSOFT_REDIRECT_URI,
        },
      }),
    }),
    getUserProfile: builder.query<UserProfile, void>({
      query: () => ({
        url: "/auth/profile",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    refreshToken: builder.mutation<AuthTokens, { refreshToken: string }>({
      query: ({ refreshToken }) => ({
        url: "/auth/refresh",
        method: "POST",
        data: { refresh_token: refreshToken },
      }),
    }),
  }),
});

export const {
  useExchangeCodeForTokenMutation,
  useGetUserProfileQuery,
  useRefreshTokenMutation,
} = authApi;
