/** @format */

'use client';

import { useState, useEffect } from 'react';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClosing(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 300); // Wait for animation to complete
    }, 1500); // Show loader for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-gradient-to-br from-primary to-secondary flex items-center justify-center ${
        isClosing ? 'animate-fade-out' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-pulse">
          Bejjani Audit
        </h1>
        <div className="flex justify-center gap-2">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
        </div>
        <p className="text-blue-100 mt-6 text-sm">Loading...</p>
      </div>
    </div>
  );
}
