"use client";

import { useState } from "react";

type User = {
  name: string;
};

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = (await res.json()) as { user?: User; error?: string };
    if (res.ok) {
      setUser(data.user ?? null);
    } else {
      alert(data.error ?? "Erreur");
    }
    setLoading(false);
  };

  if (user) return <div>Connecté en tant que {user.name}</div>;

  return (
    <div className="flex gap-2 ">
      <input
        type="email"
        placeholder="Votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded px-2 py-1"
      />
      <button onClick={handleLogin} disabled={loading} className="bg-yellow-400 px-3 rounded">
        {loading ? "Connexion..." : "Login"}
      </button>
    </div>
  );
}
