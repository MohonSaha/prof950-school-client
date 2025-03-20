// ResultsCard.tsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ResultData } from '@/app/types/types';

interface ResultsCardProps {
  data: ResultData;
}

export default function ResultsCard({ data }: ResultsCardProps) {
  return (
    <Card className='py-2 md:py-4'>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h5 className="font-semibold text-lg">{data.year}</h5>
          <div className="text-sm text-muted-foreground font-semibold">
            Students: {data.appeared}
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 text-sm">
          <div className="bg-green-50 p-2 rounded">
            <div className="font-medium">Pass Rate</div>
            <div className="text-green-600 font-semibold">{data.passRate.toFixed(2)}%</div>
          </div>
          
          <div className="bg-red-50 p-2 rounded">
            <div className="font-medium">Fail Rate</div>
            <div className="text-red-600 font-semibold">{data.failRate.toFixed(2)}%</div>
          </div>
          
          <div className="bg-blue-50 p-2 rounded">
            <div className="font-medium">A+ Rate</div>
            <div className="text-blue-600 font-semibold">{data.aPlusRate.toFixed(2)}%</div>
          </div>
        </div>
        
        <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
          <div className="border p-2 rounded text-center">
            <div className="font-medium">Passed</div>
            <div>{data.passed}</div>
          </div>
          
          <div className="border p-2 rounded text-center">
            <div className="font-medium">Failed</div>
            <div>{data.failed}</div>
          </div>
          
          <div className="border p-2 rounded text-center">
            <div className="font-medium">A+</div>
            <div>{data.aPlus}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}