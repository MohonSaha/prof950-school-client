// AnalysisOfPublicResults.tsx
import { ResultData } from '@/app/types/types';
import React from 'react';
import ResultsSection from '../ResultsSection/ResultsSection';

export default function AnalysisOfPublicResults() {
  // Sample data - replace with actual data from your database
  const jscRecentData: ResultData[] = [
    {
      year: 2023,
      appeared: 120,
      passed: 115,
      failed: 5,
      aPlus: 25,
      passRate: 95.83,
      failRate: 4.17,
      aPlusRate: 20.83
    },
    {
      year: 2022,
      appeared: 110,
      passed: 105,
      failed: 5,
      aPlus: 20,
      passRate: 95.45,
      failRate: 4.55,
      aPlusRate: 18.18
    }
  ];

  const jscHistoricalData: ResultData[] = [
    // Last 5 years data including the recent ones
    {
      year: 2023,
      appeared: 120,
      passed: 115,
      failed: 5,
      aPlus: 25,
      passRate: 95.83,
      failRate: 4.17,
      aPlusRate: 20.83
    },
    {
      year: 2022,
      appeared: 110,
      passed: 105,
      failed: 5,
      aPlus: 20,
      passRate: 95.45,
      failRate: 4.55,
      aPlusRate: 18.18
    },
    {
      year: 2021,
      appeared: 105,
      passed: 100,
      failed: 5,
      aPlus: 18,
      passRate: 95.24,
      failRate: 4.76,
      aPlusRate: 17.14
    },
    {
      year: 2020,
      appeared: 100,
      passed: 95,
      failed: 5,
      aPlus: 15,
      passRate: 95.00,
      failRate: 5.00,
      aPlusRate: 15.00
    },
    {
      year: 2019,
      appeared: 95,
      passed: 90,
      failed: 5,
      aPlus: 12,
      passRate: 94.74,
      failRate: 5.26,
      aPlusRate: 12.63
    }
  ];

  const sscRecentData: ResultData[] = [
    {
      year: 2023,
      appeared: 100,
      passed: 98,
      failed: 2,
      aPlus: 30,
      passRate: 98.00,
      failRate: 2.00,
      aPlusRate: 30.00
    },
    {
      year: 2022,
      appeared: 95,
      passed: 92,
      failed: 3,
      aPlus: 25,
      passRate: 96.84,
      failRate: 3.16,
      aPlusRate: 26.32
    }
  ];

  const sscHistoricalData: ResultData[] = [
    // Last 5 years data including the recent ones
    {
      year: 2023,
      appeared: 100,
      passed: 98,
      failed: 2,
      aPlus: 30,
      passRate: 98.00,
      failRate: 2.00,
      aPlusRate: 30.00
    },
    {
      year: 2022,
      appeared: 95,
      passed: 92,
      failed: 3,
      aPlus: 25,
      passRate: 96.84,
      failRate: 3.16,
      aPlusRate: 26.32
    },
    {
      year: 2021,
      appeared: 90,
      passed: 88,
      failed: 2,
      aPlus: 22,
      passRate: 97.78,
      failRate: 2.22,
      aPlusRate: 24.44
    },
    {
      year: 2020,
      appeared: 85,
      passed: 82,
      failed: 3,
      aPlus: 20,
      passRate: 96.47,
      failRate: 3.53,
      aPlusRate: 23.53
    },
    {
      year: 2019,
      appeared: 80,
      passed: 78,
      failed: 2,
      aPlus: 18,
      passRate: 97.50,
      failRate: 2.50,
      aPlusRate: 22.50
    }
  ];

  return (
    <div className="space-y-6 mt-10">
      {/* <h2 className="text-2xl font-semibold mb-6 mt-6">পাবলিক ফলাফল বিশ্লেষণ:</h2> */}

      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-balck-600">শত্রুজিৎপুর আব্দুল গণি মাধ্যমিক বালিকা বিদ্যালয়ের ফলাফল বিশ্লেষণ</h2>
        <p className="text-gray-600 mt-2">বিদ্যালয়ের শিক্ষার্থীদের কৃতিত্ব ও পারফরম্যান্স মূল্যায়ন</p>
      </div>
      
      <ResultsSection
        // title="JSC Results" 
        title="জেএসসি পরীক্ষার ফলাফল" 
        recentYears={jscRecentData} 
        historicalData={jscHistoricalData} 
      />
      
      <ResultsSection 
        // title="SSC Results" 
        title="এসএসসি পরীক্ষার ফলাফল" 
        recentYears={sscRecentData} 
        historicalData={sscHistoricalData} 
      />
    </div>
  );
}