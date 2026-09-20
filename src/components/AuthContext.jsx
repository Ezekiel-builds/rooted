import { supabase } from "../supabaseClient";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  async function fetchProfile(userId) {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    if (error) {
      console.error("Fetch profile error:", error);
      setProfile(null);
    } else {
      setProfile(data);
    }
  }

  useEffect(() => {
    async function checkExistingSession() {
      const result = await supabase.auth.getSession();
      const session = result.data.session;

      if (session) {
        setUser(session.user);
        fetchProfile(session.user.id);
      } else {
        setUser(null);
        setProfile(null);
      }
    }

    checkExistingSession();

    const listener = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUser(session.user);
        fetchProfile(session.user.id);
      } else {
        setUser(null);
        setProfile(null);
      }

      function cleanUp() {
        listener.data.subscription.unsubscribe();
      }

      return cleanUp;
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user: user, profile: profile }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}
