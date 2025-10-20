import React from "react";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function TypographyH1({ children, className = "" }: TypographyProps) {
  return (
    <h1 className={`scroll-m-20 text-4xl md:text-6xl font-bold tracking-tight text-balance font-['Tinos',_serif] ${className}`}>
      {children}
    </h1>
  )
}

export function TypographyH2({ children, className = "" }: TypographyProps) {
  return (
    <h2 className={`text-3xl font-bold tracking-tight text-balance font-['Tinos',_serif] ${className}`}>
      {children}
    </h2>
  )
}

export function TypographyP({ children, className = "" }: TypographyProps) {
  return (
    <p className={`text-base md:text-lg font-['Tinos',_serif] ${className}`}>
      {children}
    </p>
  )
}
