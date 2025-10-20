import { TypographyH2 } from "@/components/ui/typography";

export function QuantumCircuitDiagram() {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <TypographyH2 className="mb-4 text-center">
        Arsitektur Dasar Sirkuit Kuantum
      </TypographyH2>
      <svg viewBox="0 0 400 200" className="w-full">
        {/* Background */}
        <rect x="0" y="0" width="400" height="200" fill="#f8fafc" rx="10" />
        
        {/* Qubit lines */}
        <line x1="50" y1="50" x2="350" y2="50" stroke="#2563eb" strokeWidth="2" />
        <line x1="50" y1="100" x2="350" y2="100" stroke="#2563eb" strokeWidth="2" />
        <line x1="50" y1="150" x2="350" y2="150" stroke="#2563eb" strokeWidth="2" />
        
        {/* Gates */}
        <rect x="100" y="35" width="30" height="30" fill="#fff" stroke="#2563eb" strokeWidth="2" />
        <rect x="200" y="85" width="30" height="30" fill="#fff" stroke="#2563eb" strokeWidth="2" />
        <rect x="300" y="135" width="30" height="30" fill="#fff" stroke="#2563eb" strokeWidth="2" />
        
        {/* Control points */}
        <circle cx="150" cy="50" r="5" fill="#2563eb" />
        <circle cx="150" cy="100" r="5" fill="#2563eb" />
        <line x1="150" y1="50" x2="150" y2="100" stroke="#2563eb" strokeWidth="2" />
        
        {/* Labels */}
        <text x="30" y="55" fill="#1e40af" fontSize="12">q[0]</text>
        <text x="30" y="105" fill="#1e40af" fontSize="12">q[1]</text>
        <text x="30" y="155" fill="#1e40af" fontSize="12">q[2]</text>
        
        <text x="110" y="55" fill="#1e40af" fontSize="12">H</text>
        <text x="210" y="105" fill="#1e40af" fontSize="12">X</text>
        <text x="310" y="155" fill="#1e40af" fontSize="12">Z</text>
      </svg>
    </div>
  );
}
