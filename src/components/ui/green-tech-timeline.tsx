import React from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface GreenTechTimelineProps {
  data: Record<string, TimelineEvent>;
}

export function GreenTechTimeline({ data }: GreenTechTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
      <div className="space-y-8">
        {Object.entries(data).map(([year, event], index) => (
          <div key={year} className="relative">
            <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="w-1/2 flex justify-end">
                <div className="bg-white p-6 rounded-lg shadow-lg border border-green-100 max-w-md">
                  <div className="text-2xl font-bold text-green-600 mb-2">{year}</div>
                  <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
              <div className="w-4 h-4 bg-green-400 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              <div className="w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
