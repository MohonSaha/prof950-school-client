"use client"

import React, { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from 'next/image';
import { Calendar, Printer } from 'lucide-react';
import MyButton from '@/components/shared/Button';

// Define available classes
interface ClassOption {
  id: string;
  name: string;
  scheduleImage: string;
}

// Sample data - replace with your actual class data
const classOptions: ClassOption[] = [
  { id: 'six', name: 'ষষ্ঠ শ্রেণী', scheduleImage: '/images/exam-schedule-six.jpg' },
  { id: 'seven', name: 'সপ্তম শ্রেণী', scheduleImage: '/images/exam-schedule-seven.jpg' },
  { id: 'eight', name: 'অষ্টম শ্রেণী', scheduleImage: '/images/exam-schedule-eight.jpg' },
  { id: 'nine', name: 'নবম শ্রেণী', scheduleImage: '/images/exam-schedule-nine.jpg' },
  { id: 'ten', name: 'দশম শ্রেণী', scheduleImage: '/images/exam-schedule-ten.jpg' },
];

const ExamSchedulePage: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<ClassOption | null>(null);
  const [error, setError] = useState<string>('');
  const imageRef = useRef<HTMLDivElement>(null);

  const handleClassChange = (classId: string) => {
    const selected = classOptions.find(option => option.id === classId);
    if (selected) {
      setSelectedClass(selected);
      setError('');
    }
  };

  const printImage = () => {
    if (!selectedClass) return;
    
    // Create a new window for printing just the image
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      setError('পপ-আপ ব্লকার বন্ধ করুন এবং আবার চেষ্টা করুন');
      return;
    }
    
    // Write the image to the new window with some minimal styling
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${selectedClass.name} - পরীক্ষার সময়সূচী</title>
          <style>
            body {
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
            }
            img {
              max-width: 100%;
              max-height: 100vh;
            }
            @media print {
              @page {
                size: auto;
                margin: 0mm;
              }
            }
          </style>
        </head>
        <body onload="window.print(); window.setTimeout(function(){window.close()}, 500)">
          <img src="${selectedClass.scheduleImage}" alt="${selectedClass.name} পরীক্ষার সময়সূচী" />
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-10">
      <Card className="w-full  mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-green-700">পরীক্ষার সময়সূচী</CardTitle>
          <CardDescription className="text-lg">
            আপনার শ্রেণী নির্বাচন করুন এবং পরীক্ষার সময়সূচী দেখুন
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-8">
            <div className="space-y-4">
              <label className="text-lg font-medium">আপনার শ্রেণী নির্বাচন করুন</label>
              <Select onValueChange={handleClassChange}>
                <SelectTrigger className="w-full md:w-80">
                  <SelectValue placeholder="শ্রেণী নির্বাচন করুন" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {classOptions.map((option) => (
                      <SelectItem key={option.id} value={option.id}>
                        {option.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {error && <p className="text-red-500">{error}</p>}

            {selectedClass ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <h3 className="text-xl font-medium">{selectedClass.name} - পরীক্ষার সময়সূচী</h3>
                </div>
                
                <div className="bg-gray-100 p-4 rounded-lg flex justify-center" ref={imageRef}>
                  <div className="relative h-96 w-full">
                    <Image 
                      src={selectedClass.scheduleImage}
                      alt={`${selectedClass.name} পরীক্ষার সময়সূচী`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <MyButton onClick={printImage} className="flex items-center gap-2">
                    <Printer className="h-4 w-4" />
                    <span>সময়সূচী প্রিন্ট করুন</span>
                  </MyButton>
                </div>
              </div>
            ) : (
              <div className="bg-blue-50 p-8 rounded-lg text-center">
                <p className="text-lg text-blue-800">পরীক্ষার সময়সূচী দেখতে উপরে আপনার শ্রেণী নির্বাচন করুন</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExamSchedulePage;