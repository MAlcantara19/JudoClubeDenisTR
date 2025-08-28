"use client";

import ProtectedRoute from "../../components/ProtectedRoute";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <Header />
      <main style={{ padding: "20px" }}>
        <h1>Painel Administrativo</h1>
        <p>Bem-vindo! Aqui você pode gerenciar alunos, presença e muito mais.</p>
      </main>
      <Footer />
    </ProtectedRoute>
  );
}
