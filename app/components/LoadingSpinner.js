"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingSpinner() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted immediately to prevent flash
    setMounted(true);
    // Hide loading after initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show loading for 2 seconds on initial load

    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this only runs once on mount

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 w-screen h-screen z-[9999] animate-fade-out transition-colors duration-300 ${
        mounted ? "bg-[var(--background)]" : "bg-[var(--background)]"
      }`}
    >
      <div className="loadingSpinnerContainer flex items-center justify-center w-full h-full">
        <Image
          src="/logo-typo.png"
          alt="Loading"
          width={100}
          height={100}
          className="object-contain animate-[blink_1.2s_ease-in-out_infinite]"
          priority
        />
      </div>
    </div>
  );
}
