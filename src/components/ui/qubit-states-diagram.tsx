import { TypographyH2 } from "@/components/ui/typography";

export function QubitStatesDiagram() {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <TypographyH2 className="mb-4 text-center">
        Representasi Keadaan Qubit
      </TypographyH2>
      <svg viewBox="0 0 400 300" className="w-full">
        {/* Background */}
        <rect x="0" y="0" width="400" height="300" fill="#f8fafc" rx="10" />
        
        {/* Bloch Sphere */}
        <circle cx="200" cy="150" r="100" fill="none" stroke="#2563eb" strokeWidth="2" />
        <ellipse cx="200" cy="150" rx="100" ry="30" fill="none" stroke="#2563eb" strokeWidth="1" strokeDasharray="4" />
        
        {/* Axes */}
        <line x1="80" y1="150" x2="320" y2="150" stroke="#64748b" strokeWidth="1" />
        <line x1="200" y1="30" x2="200" y2="270" stroke="#64748b" strokeWidth="1" />
        
        {/* State vector */}
        <line x1="200" y1="150" x2="250" y2="100" stroke="#dc2626" strokeWidth="2" />
        <circle cx="250" cy="100" r="4" fill="#dc2626" />
        
        {/* Labels */}
        <text x="330" y="150" fill="#1e40af" fontSize="14">|0⟩</text>
        <text x="185" y="40" fill="#1e40af" fontSize="14">|1⟩</text>
        <text x="260" y="95" fill="#dc2626" fontSize="14">|ψ⟩</text>
      </svg>
    </div>
  );
}
