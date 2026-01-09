import React, { useEffect, useState } from "react";
import { useForm } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xbddrrld");
  const [email, setEmail] = useState("");

  // Reset de l'email après succès
  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        setEmail("");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <label htmlFor="email" className="sr-only">
        Adresse e-mail
      </label>

      <div className="flex items-center gap-2">
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre e-mail"
          required
          className="w-full rounded-md bg-slate-900 border border-slate-800 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <button
          type="submit"
          disabled={state.submitting}
          className="inline-flex items-center gap-2 bg-yellow-400 text-slate-950 px-3 py-2 rounded-md text-sm font-medium hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:opacity-60"
        >
          {state.submitting ? "Envoi..." : "S'abonner"}
        </button>
      </div>

      {state.succeeded && (
        <p className="mt-2 text-xs text-green-400">
        Vous êtes bien abonné.
        </p>
      )}

      <p className="mt-2 text-xs text-gray-500">
        Pas de spam — désabonnement en un clic.
      </p>
    </form>
  );
}

export default function Abonner() {
  return <ContactForm />;
}
