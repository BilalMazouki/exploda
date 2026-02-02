// hooks/useUser.ts - Enhanced version
"use client";
import { useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  user_metadata: {
    name?: string;
    signup_date?: string;
  };
  profile?: {
    role: string;
    name: string;
  } | null;
  email_confirmed_at: string | null;
  last_sign_in_at: string | null;
  created_at: string;
}

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/user/profile');
      const data = await response.json();
      
      if (data.success) {
        setUser(data.user);
      } else {
        setUser(null);
        if (response.status !== 401) { 
          setError(data.message || "Failed to fetch user");
        }
      }
    } catch (err) {
      console.error("Failed to fetch user:", err);
      setUser(null);
      setError("Network error - please try again");
    } finally {
      setLoading(false);
    }
  };



  const logout = async (): Promise<{success: boolean; message: string}> => {
    try {
      const response = await fetch('/api/auth/logout', { 
        method: 'POST' 
      });
      
      const data = await response.json();
      
      if (data.success) {
        setUser(null);
      }
      
      return data;
    } catch (err) {
      console.error("Failed to logout:", err);
      return { success: false, message: "Network error during logout" };
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    user,
    loading,
    error,
    refetch: fetchUser,
    logout
  };
}
