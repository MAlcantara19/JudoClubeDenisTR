"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (!user) router.push("/login");
      else setLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  if (loading) return <p>Carregando...</p>;
  return children;
}
