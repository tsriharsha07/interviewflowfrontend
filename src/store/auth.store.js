import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      isAuthenticated: false,
      refreshToken: null,

      login: (user, accessToken, refreshToken) =>
        set({
          user,
          accessToken,
          isAuthenticated: true,
          refreshToken,
        }),

      logout: () =>
        set({
          user: null,
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "auth-session-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
