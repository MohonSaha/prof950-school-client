// Statistics.tsx
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AnalysisOfPublicResults from '@/components/pagesUi/Statistics/AnalysisOfPublicResults/AnalysisOfPublicResults';
import PeopleAtSchool from '@/components/pagesUi/Statistics/PeopleAtSchool/PeopleAtSchool';

export default function Statistics() {
  return (
    <div className="container mx-auto py-4 md:py-8 px-4 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-8 text-green-600">স্কুল পরিসংখ্যান</h1>
      
      <Tabs defaultValue="results" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-0">
          <TabsTrigger value="results" className="text-xs sm:text-sm md:text-base"><span className='hidden md:visible lg:visible'>পাবলিক পরীক্ষার </span>ফলাফল বিশ্লেষণ</TabsTrigger>
          <TabsTrigger value="people" className="text-xs sm:text-sm md:text-base">শিক্ষক, ছাত্রী এবং কর্মচারী</TabsTrigger>
        </TabsList>
        
        <TabsContent value="results">
          <AnalysisOfPublicResults />
        </TabsContent>
        
        <TabsContent value="people">
          <PeopleAtSchool />
        </TabsContent>
      </Tabs>
    </div>
  );
}