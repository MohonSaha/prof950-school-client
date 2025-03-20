// ResultsTable.tsx
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ResultData } from '@/app/types/types';

interface ResultsTableProps {
  data: ResultData[];
}

export default function ResultsTable({ data }: ResultsTableProps) {
  // Sort data by year descending for the table
  const sortedData = [...data].sort((a, b) => b.year - a.year);

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>বছর</TableHead>
            <TableHead className="text-right">মোট ছাত্রী</TableHead>
            <TableHead className="text-right">পাস</TableHead>
            <TableHead className="text-right">পাস রেট</TableHead>
            <TableHead className="text-right">ফেইল</TableHead>
            <TableHead className="text-right">ফেইল রেট</TableHead>
            <TableHead className="text-right">A+</TableHead>
            <TableHead className="text-right">A+ রেট</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((row) => (
            <TableRow key={row.year}>
              <TableCell className="font-medium">{row.year}</TableCell>
              <TableCell className="text-right">{row.appeared}</TableCell>
              <TableCell className="text-right">{row.passed}</TableCell>
              <TableCell className="text-right text-green-600">{row.passRate.toFixed(2)}%</TableCell>
              <TableCell className="text-right">{row.failed}</TableCell>
              <TableCell className="text-right text-red-600">{row.failRate.toFixed(2)}%</TableCell>
              <TableCell className="text-right">{row.aPlus}</TableCell>
              <TableCell className="text-right text-blue-600">{row.aPlusRate.toFixed(2)}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}