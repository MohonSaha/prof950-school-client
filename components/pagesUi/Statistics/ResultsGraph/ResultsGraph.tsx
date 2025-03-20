// ResultsGraph.tsx
import React from 'react';
import { Card } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ResultData, ResultField } from '@/app/types/types';

interface ResultsGraphProps {
  data: ResultData[];
  field: ResultField;
}

export default function ResultsGraph({ data, field }: ResultsGraphProps) {
  // Sort data by year ascending for the chart
  const sortedData = [...data].sort((a, b) => a.year - b.year);
  
  // Format data for the chart
  const chartData = sortedData.map(item => ({
    year: item.year,
    [field]: item[field]
  }));
  
  // Get field label for display
  const fieldLabels: Record<ResultField, string> = {
    appeared: 'Students Appeared',
    passed: 'Students Passed',
    failed: 'Students Failed',
    aPlus: 'A+ Students',
    passRate: 'Pass Rate (%)',
    failRate: 'Fail Rate (%)',
    aPlusRate: 'A+ Rate (%)'
  };
  
  // Choose color based on field
  const getLineColor = (field: ResultField) => {
    switch (field) {
      case 'passed':
      case 'passRate':
        return '#10b981'; // green
      case 'failed':
      case 'failRate':
        return '#ef4444'; // red
      case 'aPlus':
      case 'aPlusRate':
        return '#3b82f6'; // blue
      default:
        return '#6366f1'; // indigo
    }
  };

  // Check if we need percentage or absolute numbers
  const isPercentage = field.includes('Rate');

  return (
    <Card className="p-1">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis 
              domain={isPercentage ? [0, 100] : ['auto', 'auto']}
              tickFormatter={isPercentage ? (value) => `${value}%` : undefined}
            />
            <Tooltip 
              formatter={(value) => isPercentage ? `${Number(value).toFixed(2)}%` : value}
              labelFormatter={(year) => `Year: ${year}`}
            />
            <Line
              type="monotone"
              dataKey={field}
              stroke={getLineColor(field)}
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name={fieldLabels[field]}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}