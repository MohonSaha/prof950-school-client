// // ResultsSection.tsx
// "use client"
// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Card } from '@/components/ui/card';
// import { ResultField, ResultsProps, YearRange } from '@/app/types/types';
// import ResultsCard from '../ResultsCard/ResultsCard';
// import ResultsGraph from '../ResultsGraph/ResultsGraph';
// import ResultsTable from '../ResultsTable/ResultsTable';

// export default function ResultsSection({ title, recentYears, historicalData }: ResultsProps) {
//   const [showFullTable, setShowFullTable] = useState(false);
//   const [selectedField, setSelectedField] = useState<ResultField>('passRate');
//   const [yearRange, setYearRange] = useState<YearRange>({
//     start: historicalData[historicalData.length - 1].year,
//     end: historicalData[0].year
//   });

//   // Get all available years
//   const years = historicalData.map(data => data.year).sort((a, b) => b - a);
  
//   const handleYearRangeChange = (startOrEnd: 'start' | 'end', value: string) => {
//     const year = parseInt(value);
//     setYearRange(prev => ({
//       ...prev,
//       [startOrEnd]: year
//     }));
//   };

//   const filteredData = historicalData.filter(
//     data => data.year >= yearRange.start && data.year <= yearRange.end
//   );

//   return (
//     <Card className="p-6">
//       <h3 className="text-xl font-medium mb-4">{title}</h3>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Left side - Recent years cards */}
//         <div>
//           <h4 className="text-lg font-medium mb-3">সাম্প্রতিক ফলাফল</h4>
//           <div className="space-y-4">
//             {recentYears.map(data => (
//               <ResultsCard key={data.year} data={data} />
//             ))}
//           </div>
//         </div>
        
//         {/* Right side - Graph */}
//         <div>
//           <div className="mb-4 flex flex-wrap gap-2 items-center">
//             <div className="flex-1">
//               <h4 className="text-lg font-medium">5-Year Trend</h4>
//             </div>
//             <div className="flex space-x-2">
//               <Select 
//                 value={selectedField} 
//                 onValueChange={(value) => setSelectedField(value as ResultField)}
//               >
//                 <SelectTrigger className="w-32">
//                   <SelectValue placeholder="Select field" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="appeared">Appeared</SelectItem>
//                   <SelectItem value="passed">Passed</SelectItem>
//                   <SelectItem value="failed">Failed</SelectItem>
//                   <SelectItem value="aPlus">A+</SelectItem>
//                   <SelectItem value="passRate">Pass Rate</SelectItem>
//                   <SelectItem value="failRate">Fail Rate</SelectItem>
//                   <SelectItem value="aPlusRate">A+ Rate</SelectItem>
//                 </SelectContent>
//               </Select>
              
//               <Select 
//                 value={yearRange.start.toString()} 
//                 onValueChange={(value) => handleYearRangeChange('start', value)}
//               >
//                 <SelectTrigger className="w-24">
//                   <SelectValue placeholder="From" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {years.map(year => (
//                     <SelectItem key={`start-${year}`} value={year.toString()}>
//                       {year}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
              
//               <Select 
//                 value={yearRange.end.toString()} 
//                 onValueChange={(value) => handleYearRangeChange('end', value)}
//               >
//                 <SelectTrigger className="w-24">
//                   <SelectValue placeholder="To" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {years.map(year => (
//                     <SelectItem key={`end-${year}`} value={year.toString()}>
//                       {year}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
          
//           <ResultsGraph data={filteredData} field={selectedField} />
//         </div>
//       </div>
      
//       {/* Full table section */}
//       <div className="mt-6">
//         {!showFullTable ? (
//           <Button onClick={() => setShowFullTable(true)} variant="outline" className="w-full">
//             Show Full Results History
//           </Button>
//         ) : (
//           <div className="space-y-4">
//             <ResultsTable data={historicalData} />
//             <Button onClick={() => setShowFullTable(false)} variant="outline" className="w-full">
//               Hide Full Results
//             </Button>
//           </div>
//         )}
//       </div>
//     </Card>
//   );
// }



// // ResultsSection.tsx
// "use client"
// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Card } from '@/components/ui/card';
// import { ResultField, ResultsProps, YearRange } from '@/app/types/types';
// import ResultsCard from '../ResultsCard/ResultsCard';
// import ResultsGraph from '../ResultsGraph/ResultsGraph';
// import ResultsTable from '../ResultsTable/ResultsTable';

// export default function ResultsSection({ title, recentYears, historicalData }: ResultsProps) {
//   const [showFullTable, setShowFullTable] = useState(false);
//   const [selectedField, setSelectedField] = useState<ResultField>('passRate');
//   const [yearRange, setYearRange] = useState<YearRange>({
//     start: historicalData[historicalData.length - 1].year,
//     end: historicalData[0].year
//   });

//   // Get all available years
//   const years = historicalData.map(data => data.year).sort((a, b) => b - a);
  
//   const handleYearRangeChange = (startOrEnd: 'start' | 'end', value: string) => {
//     const year = parseInt(value);
//     setYearRange(prev => ({
//       ...prev,
//       [startOrEnd]: year
//     }));
//   };

//   const filteredData = historicalData.filter(
//     data => data.year >= yearRange.start && data.year <= yearRange.end
//   );

//   return (
//     <Card className="p-6">
//       <h3 className="text-xl font-medium mb-4">{title}</h3>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Left side - Recent years cards */}
//         <div>
//           <h4 className="text-lg font-medium mb-3">সাম্প্রতিক ফলাফল</h4>
//           <div className="space-y-4">
//             {recentYears.map(data => (
//               <ResultsCard key={data.year} data={data} />
//             ))}
//           </div>
//         </div>
        
//         {/* Right side - Graph */}
//         <div>
//           <div className="mb-4 flex flex-wrap gap-2 items-center">
//             <div className="flex-1">
//               <h4 className="text-lg font-medium">৫-বছরের প্রবণতা</h4>
//             </div>
//             <div className="flex space-x-2">
//               <Select 
//                 value={selectedField} 
//                 onValueChange={(value) => setSelectedField(value as ResultField)}
//               >
//                 <SelectTrigger className="w-32">
//                   <SelectValue placeholder="ক্ষেত্র নির্বাচন করুন" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="appeared">উপস্থিত</SelectItem>
//                   <SelectItem value="passed">উত্তীর্ণ</SelectItem>
//                   <SelectItem value="failed">অনুত্তীর্ণ</SelectItem>
//                   <SelectItem value="aPlus">এ+</SelectItem>
//                   <SelectItem value="passRate">পাসের হার</SelectItem>
//                   <SelectItem value="failRate">ফেলের হার</SelectItem>
//                   <SelectItem value="aPlusRate">এ+ হার</SelectItem>
//                 </SelectContent>
//               </Select>
              
//               <Select 
//                 value={yearRange.start.toString()} 
//                 onValueChange={(value) => handleYearRangeChange('start', value)}
//               >
//                 <SelectTrigger className="w-24">
//                   <SelectValue placeholder="থেকে" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {years.map(year => (
//                     <SelectItem key={`start-${year}`} value={year.toString()}>
//                       {year}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
              
//               <Select 
//                 value={yearRange.end.toString()} 
//                 onValueChange={(value) => handleYearRangeChange('end', value)}
//               >
//                 <SelectTrigger className="w-24">
//                   <SelectValue placeholder="পর্যন্ত" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {years.map(year => (
//                     <SelectItem key={`end-${year}`} value={year.toString()}>
//                       {year}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
          
//           <ResultsGraph data={filteredData} field={selectedField} />
//         </div>
//       </div>
      
//       {/* Full table section */}
//       <div className="mt-6">
//         {!showFullTable ? (
//           <Button onClick={() => setShowFullTable(true)} variant="outline" className="w-full">
//             সম্পূর্ণ ফলাফলের ইতিহাস দেখুন
//           </Button>
//         ) : (
//           <div className="space-y-4">
//             <ResultsTable data={historicalData} />
//             <Button onClick={() => setShowFullTable(false)} variant="outline" className="w-full">
//               সম্পূর্ণ ফলাফল লুকান
//             </Button>
//           </div>
//         )}
//       </div>
//     </Card>
//   );
// }



// ResultsSection.tsx
"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { ResultField, ResultsProps, YearRange } from '@/app/types/types';
import ResultsCard from '../ResultsCard/ResultsCard';
import ResultsGraph from '../ResultsGraph/ResultsGraph';
import ResultsTable from '../ResultsTable/ResultsTable';
import { motion, AnimatePresence } from 'framer-motion';

export default function ResultsSection({ title, recentYears, historicalData }: ResultsProps) {
  const [showFullTable, setShowFullTable] = useState(false);
  const [selectedField, setSelectedField] = useState<ResultField>('passRate');
  const [yearRange, setYearRange] = useState<YearRange>({
    start: historicalData[historicalData.length - 1].year,
    end: historicalData[0].year
  });

  // Get all available years
  const years = historicalData.map(data => data.year).sort((a, b) => b - a);
  
  const handleYearRangeChange = (startOrEnd: 'start' | 'end', value: string) => {
    const year = parseInt(value);
    setYearRange(prev => ({
      ...prev,
      [startOrEnd]: year
    }));
  };

  const filteredData = historicalData.filter(
    data => data.year >= yearRange.start && data.year <= yearRange.end
  );

  const toggleFullTable = () => {
    setShowFullTable(prev => !prev);
  };

  return (
    <Card className="p-6 overflow-hidden">
      <h3 className="text-xl font-medium mb-0">{title}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left side - Recent years cards */}
        <div>
          <h4 className="text-lg font-medium mb-3">সাম্প্রতিক ফলাফল</h4>
          <div className="space-y-4">
            {recentYears.map(data => (
              <ResultsCard key={data.year} data={data} />
            ))}
          </div>
        </div>
        
        {/* Right side - Graph */}
        <div>
          <div className="mb-4 flex flex-wrap gap-2 items-center">
            <div className="flex-1">
              <h4 className="text-lg font-medium">৫-বছরের পরিসংখ্যান</h4>
            </div>
            <div className="flex space-x-2 flex-wrap gap-4">
              <Select 
                value={selectedField} 
                onValueChange={(value) => setSelectedField(value as ResultField)}
              >
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="ক্ষেত্র নির্বাচন করুন" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="appeared">উপস্থিত</SelectItem>
                  <SelectItem value="passed">উত্তীর্ণ</SelectItem>
                  <SelectItem value="failed">অনুত্তীর্ণ</SelectItem>
                  <SelectItem value="aPlus">এ+</SelectItem>
                  <SelectItem value="passRate">পাসের হার</SelectItem>
                  <SelectItem value="failRate">ফেলের হার</SelectItem>
                  <SelectItem value="aPlusRate">এ+ হার</SelectItem>
                </SelectContent>
              </Select>
              
              <Select 
                value={yearRange.start.toString()} 
                onValueChange={(value) => handleYearRangeChange('start', value)}
              >
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="থেকে" />
                </SelectTrigger>
                <SelectContent>
                  {years.map(year => (
                    <SelectItem key={`start-${year}`} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select 
                value={yearRange.end.toString()} 
                onValueChange={(value) => handleYearRangeChange('end', value)}
              >
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="পর্যন্ত" />
                </SelectTrigger>
                <SelectContent>
                  {years.map(year => (
                    <SelectItem key={`end-${year}`} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <ResultsGraph data={filteredData} field={selectedField} />
        </div>
      </div>
      
      {/* Full table section with animation */}
      <div className="mt-6">
        <AnimatePresence mode="wait">
          {!showFullTable ? (
            <motion.div
              key="showButton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button 
                onClick={toggleFullTable} 
                variant="outline" 
                className="w-full relative overflow-hidden group"
              >
                <span className="relative z-10">সম্পূর্ণ ফলাফলের ইতিহাস দেখুন</span>
                <motion.div 
                  className="absolute inset-0 bg-primary/10 rounded"
                  initial={{ y: '100%' }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="fullTable"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30, 
                duration: 0.5 
              }}
              className="overflow-hidden"
            >
              <div className="space-y-4">
                <ResultsTable data={historicalData} />
                <Button 
                  onClick={toggleFullTable} 
                  variant="outline" 
                  className="w-full relative overflow-hidden group"
                >
                  <span className="relative z-10">সম্পূর্ণ ফলাফল লুকান</span>
                  <motion.div 
                    className="absolute inset-0 bg-primary/10 rounded"
                    initial={{ y: '100%' }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
}