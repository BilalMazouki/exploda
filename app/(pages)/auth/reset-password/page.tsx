// app/reset-password/page.tsx  (or pages/reset-password.tsx)
"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js"; // or from your client helper
// make sure to use PUBLIC keys on client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ResetPasswordPage() {
  const [status, setStatus] = useState<"idle"|"loading"|"ready"|"error"|"done">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [password, setPassword] = useState("");

  useEffect(() => {
    // 1) Listen for PASSWORD_RECOVERY event (preferred)
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") {
        // user is (auto-)signed-in via the reset link
        setStatus("ready");
      }
    });

    // 2) Fallback: parse access_token from hash if listener didn't trigger
    // URL looks like: /reset-password#access_token=...&type=recovery&...
    if (typeof window !== "undefined") {
      const hash = window.location.hash; // "#access_token=...&..."
      if (hash && hash.includes("access_token=")) {
        const params = new URLSearchParams(hash.replace(/^#/, ""));
        const access_token = params.get("access_token");
        const refresh_token = params.get("refresh_token");
        if (access_token && refresh_token) {
          // set session so updateUser works
          (async () => {
            try {
              setStatus("loading");
              await supabase.auth.setSession({ access_token, refresh_token });
              setStatus("ready");
            } catch (err) {
              console.error("setSession fallback error:", err);
              setErrorMsg("Invalid or expired reset link.");
              setStatus("error");
            }
          })();
        }
      }
    }

    return () => {
      listener?.subscription?.unsubscribe();
    };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);
    if (password.length < 8) {
      setErrorMsg("Password must be at least 8 characters.");
      return;
    }
    try {
      setStatus("loading");
      // user must be signed-in (via the recovery link) in order to call update
      const { data, error } = await supabase.auth.updateUser({ password });
      if (error) {
        console.error("updateUser error:", error);
        setErrorMsg("Could not update password. Try again.");
        setStatus("error");
        return;
      }
      setStatus("done");
    } catch (err) {
      console.error("update password exception:", err);
      setErrorMsg("Internal error. Try again later.");
      setStatus("error");
    }
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Reset your password</h1>

      {status === "idle" && <p>Checking reset link...</p>}
      {status === "loading" && <p>Working…</p>}
      {status === "error" && <p style={{ color: "red" }}>{errorMsg}</p>}
      {status === "ready" && (
        <form onSubmit={handleSubmit}>
          <label>
            New password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
              required
              style={{ display: "block", marginTop: 8 }}
            />
          </label>
          <button type="submit" style={{ marginTop: 12 }}>
            Save new password
          </button>
        </form>
      )}

      {status === "done" && (
        <p>Password updated. You are logged in — redirecting you to your account...</p>
      )}
    </main>
  );
}
