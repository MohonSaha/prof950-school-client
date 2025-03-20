// app/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MyButton from "@/components/shared/Button";

// Define the class data structure
interface ClassData {
  id: string;
  name: string;
  routineImageUrl: string;
}

// Mock data for class routines
const classData: ClassData[] = [
  {
    id: "6",
    name: "৬ষ্ঠ শ্রেণী",
    routineImageUrl: "https://i.ibb.co.com/82zZtsk/45227115.jpg",
  },
  {
    id: "7",
    name: "৭ম শ্রেণী",
    routineImageUrl: "https://i.ibb.co.com/82zZtsk/45227115.jpg",
  },
  {
    id: "8",
    name: "৮ম শ্রেণী",
    routineImageUrl: "https://i.ibb.co.com/82zZtsk/45227115.jpg",
  },
  {
    id: "9",
    name: "৯ম শ্রেণী",
    routineImageUrl: "https://i.ibb.co.com/82zZtsk/45227115.jpg",
  },
  {
    id: "10",
    name: "১০ম শ্রেণী",
    routineImageUrl: "https://i.ibb.co.com/82zZtsk/45227115.jpg",
  },
];

export default function Routine() {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<"select" | "view">("select");

  const selectedClassData = classData.find((cls) => cls.id === selectedClass);

  const handleClassSelect = (value: string) => {
    setSelectedClass(value);
  };

  const handleViewRoutine = () => {
    if (selectedClass) {
      setCurrentView("view");
    }
  };

  const handleBackToSelection = () => {
    setCurrentView("select");
  };

  return (
    <main className="min-h-screen bg-gray-100 py-6 px-4 md:px-10">
      <div className="container mx-auto  ">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-green-700">ক্লাস রুটিন</h1>
            <p className="text-center mb-8">
              আপনার শ্রেণী নির্বাচন করুন এবং রুটিন দেখুন
            </p>

            <Tabs value={currentView} className="w-full">
              <TabsContent value="select" className="mt-0">
                <div className="space-y-6">
                  <div className="flex flex-col items-center gap-4">
                    <label className="text-lg font-medium">
                      আপনার শ্রেণী নির্বাচন করুন:
                    </label>
                    <Select onValueChange={handleClassSelect}>
                      <SelectTrigger className="w-full max-w-xs">
                        <SelectValue placeholder="শ্রেণী নির্বাচন করুন" />
                      </SelectTrigger>
                      <SelectContent>
                        {classData.map((cls) => (
                          <SelectItem key={cls.id} value={cls.id}>
                            {cls.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex justify-center">
                    <MyButton
                      onClick={handleViewRoutine}
                      disabled={!selectedClass}
                      className="px-8"
                    >
                      রুটিন দেখুন
                    </MyButton>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="view" className="mt-0">
                {selectedClassData && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold mb-2">
                        {selectedClassData.name} রুটিন
                      </h2>
                    </div>

                    <div className="flex justify-center">
                      <div className="relative rounded overflow-hidden shadow-md">
                        <Image
                          src={selectedClassData.routineImageUrl}
                          alt={`${selectedClassData.name} রুটিন`}
                          width={800}
                          height={600}
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <div className="flex justify-center mt-6">
                      <MyButton
                        onClick={handleBackToSelection}
                        variant="outline"
                        className="px-8"
                      >
                        ফিরে যান
                      </MyButton>
                    </div>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
