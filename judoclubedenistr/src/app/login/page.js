"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      router.push("/dashboard"); // redireciona para painel
    } catch (err) {
      setErro("Email ou senha inválidos");
    }
  }

  return (
    <main style={{ padding: "40px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Login</h1>
      {erro && <p style={{ color: "red" }}>{erro}</p>}
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} required />
        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}
