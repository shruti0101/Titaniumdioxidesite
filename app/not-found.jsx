"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page on 404
    router.replace("/");
  }, [router]);

  return null; // Nothing to render
}
