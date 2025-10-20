import React from 'react';

interface EmissionData {
  year: string;
  value: number;
  target: number;
}

interface EmissionsChartProps {
  data: EmissionData[];
}

export function EmissionsChart({ data }: EmissionsChartProps) {
  // Normalize incoming data to ensure numbers (handles strings or unexpected types)
  const normalized = data.map(d => ({
    year: String(d.year),
    value: Number(d.value) || 0,
    target: Number(d.target) || 0,
  }));

  let maxValue = Math.max(...normalized.map(d => Math.max(d.value, d.target)));
  if (!isFinite(maxValue) || maxValue <= 0) maxValue = 1;
  maxValue = maxValue * 1.2;

  return (
    <div className="w-full h-96 p-4 bg-white rounded-lg shadow-lg">
      <div className="w-full h-full relative">
        {/* Y-axis */}
        <div className="absolute left-0 h-full flex flex-col justify-between">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-sm text-gray-500 w-12 text-right pr-2">
                {Math.round((maxValue * (5 - i)) / 5)}
              </span>
              <div className="w-full border-t border-gray-200"></div>
            </div>
          ))}
        </div>

        {/* Chart content */}
        <div className="pl-16 pr-4 pt-4 pb-6 h-full flex items-end">
          <div className="w-full h-full flex justify-between items-end">
            {normalized.map((d, i) => (
              <div key={i} className="flex flex-col items-center gap-1 w-16">
                <div className="relative w-full h-full flex items-end justify-center">
                  {/* Actual value bar (ensure a minimum visible height) */}
                  <div
                    className="w-6 bg-green-500 transition-all duration-300"
                    style={{ height: `${Math.max((d.value / maxValue) * 100, 4)}%` }}
                  ></div>
                  {/* Target line */}
                  <div
                    className="absolute w-8 border-t-2 border-red-400"
                    style={{ bottom: `${(d.target / maxValue) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">{d.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
