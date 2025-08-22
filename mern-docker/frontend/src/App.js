import React, { useEffect, useState } from "react";

export default function App() {
  const [msg, setMsg] = useState("loading…");

  // IMPORTANT: call relative /api — Nginx proxies this to http://backend:3000 via Docker network
  useEffect(() => {
    fetch("/api")
      .then(r => r.json())
      .then(d => setMsg(d.message))
      .catch(e => setMsg(`error: ${e}`));
  }, []);

  return (
    <main style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h1>React + Express + Mongo + Docker</h1>
      <p>Backend says: <strong>{msg}</strong></p>
    </main>
  );
}

