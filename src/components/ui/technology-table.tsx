import React from 'react';

interface TechnologyItem {
  name: string;
  description: string;
  impact: string;
  readiness: 'Research' | 'Development' | 'Deployment';
}

interface TechnologyTableProps {
  data: TechnologyItem[];
}

export function TechnologyTable({ data }: TechnologyTableProps) {
  const getReadinessColor = (readiness: TechnologyItem['readiness']) => {
    switch (readiness) {
      case 'Research':
        return 'bg-yellow-100 text-yellow-800';
      case 'Development':
        return 'bg-blue-100 text-blue-800';
      case 'Deployment':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-green-50">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-green-900">Technology</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-green-900">Description</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-green-900">Impact</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-green-900">Readiness</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.name}</td>
              <td className="px-6 py-4 text-sm text-gray-600">{item.description}</td>
              <td className="px-6 py-4 text-sm text-gray-600">{item.impact}</td>
              <td className="px-6 py-4 text-sm">
                <span className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${getReadinessColor(item.readiness)}`}>
                  {item.readiness}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
