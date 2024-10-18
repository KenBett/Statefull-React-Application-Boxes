"use client"
import React, { ReactNode } from 'react';

interface CenteredContentProps {
  text?: string;
  children?: ReactNode;
}

export default function CenteredContent({ text, children }: CenteredContentProps) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {text && (
        <p className="text-3xl text-rose-500 font-bold mb-4">
          {text}
        </p>
      )}
      {children}
    </div>
  );
}
