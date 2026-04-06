import React, { createContext, useContext, useEffect, useState } from 'react';

import { apiRequest } from '../config/api';

const AuthContext = createContext(null);
const STORAGE_KEY = 'nurox-auth';

const readStoredSession = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return { token: '', user: null };
    }

    const parsed = JSON.parse(stored);
    return {
      token: parsed.token || '',
      user: parsed.user || null,
    };
  } catch (_error) {
    return { token: '', user: null };
  }
};

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(() => readStoredSession());
  const [isLoading, setIsLoading] = useState(() => Boolean(readStoredSession().token));

  const syncSession = (nextState) => {
    setAuthState(nextState);

    if (nextState.token && nextState.user) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
      return;
    }

    window.localStorage.removeItem(STORAGE_KEY);
  };

  useEffect(() => {
    const restoreSession = async () => {
      const session = readStoredSession();

      if (!session.token) {
        setIsLoading(false);
        return;
      }

      try {
        const data = await apiRequest('/auth/me', {
          headers: {
            Authorization: `Bearer ${session.token}`,
          },
        });

        syncSession({
          token: session.token,
          user: data.user,
        });
      } catch (_error) {
        syncSession({ token: '', user: null });
      } finally {
        setIsLoading(false);
      }
    };

    restoreSession();
  }, []);

  const register = async (payload) => {
    const data = await apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    syncSession({
      token: data.token,
      user: data.user,
    });

    return data;
  };

  const login = async (payload) => {
    const data = await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    syncSession({
      token: data.token,
      user: data.user,
    });

    return data;
  };

  const logout = () => {
    syncSession({ token: '', user: null });
  };

  return (
    <AuthContext.Provider
      value={{
        user: authState.user,
        token: authState.token,
        isLoading,
        isAuthenticated: Boolean(authState.token && authState.user),
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
