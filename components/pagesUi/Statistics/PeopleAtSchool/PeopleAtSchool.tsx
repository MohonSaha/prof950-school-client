

"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChevronDown, ChevronUp } from 'lucide-react';

type DataPoint = {
  year: string;
  male?: number;
  female?: number;
  total?: number;
};

const PeopleAtSchool = () => {
  const [showTeacherTable, setShowTeacherTable] = useState(false);
  const [showStudentTable, setShowStudentTable] = useState(false);
  const [showEmployeeTable, setShowEmployeeTable] = useState(false);
  const [teacherFilterGender, setTeacherFilterGender] = useState<'all' | 'male' | 'female'>('all');
  const [employeeFilterGender, setEmployeeFilterGender] = useState<'all' | 'male' | 'female'>('all');

  // Sample data for teachers over years
  const teacherData = [
    { year: '2020', male: 8, female: 12, total: 20 },
    { year: '2021', male: 9, female: 14, total: 23 },
    { year: '2022', male: 10, female: 15, total: 25 },
    { year: '2023', male: 10, female: 16, total: 26 },
    { year: '2024', male: 12, female: 18, total: 30 },
  ];

  // Sample data for students over years
  const studentData = [
    { year: '2020', male: 0, female: 420, total: 420 },
    { year: '2021', male: 0, female: 450, total: 450 },
    { year: '2022', male: 0, female: 480, total: 480 },
    { year: '2023', male: 0, female: 510, total: 510 },
    { year: '2024', male: 0, female: 530, total: 530 },
  ];

  // Sample data for employees over years
  const employeeData = [
    { year: '2020', male: 5, female: 3, total: 8 },
    { year: '2021', male: 6, female: 3, total: 9 },
    { year: '2022', male: 6, female: 4, total: 10 },
    { year: '2023', male: 7, female: 4, total: 11 },
    { year: '2024', male: 7, female: 5, total: 12 },
  ];

  const getFilteredData = (data: DataPoint[], filterType: 'all' | 'male' | 'female'): DataPoint[] => {
    return data.map(item => {
      if (filterType === 'all') {
        return { year: item.year, total: item.total };
      } else if (filterType === 'male') {
        return { year: item.year, male: item.male };
      } else {
        return { year: item.year, female: item.female };
      }
    });
  };

  // Current totals
  const currentTeachers = teacherData[teacherData.length - 1].total;
  const currentStudents = studentData[studentData.length - 1].total;
  const currentEmployees = employeeData[employeeData.length - 1].total;

  return (
    <div className="space-y-10 mt-10">
      {/* Section Heading */}
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-balck-600">শত্রুজিৎপুর আব্দুল গণি মাধ্যমিক বালিকা বিদ্যালয়ের মানুষজন</h2>
        <p className="text-gray-600 mt-2">বিদ্যালয়ের শিক্ষক, ছাত্রী এবং কর্মচারীদের সংখ্যা সম্পর্কিত তথ্য</p>
      </div>

      {/* Teachers Section */}
      <div className=" pt-6">
        <h3 className="text-lg md:text-xl font-semibold mb-4 text-green-600">শিক্ষক</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">মোট শিক্ষক</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{currentTeachers}</div>
                <p className="text-sm text-gray-500">২০২৪ সালে</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">লিঙ্গ অনুপাত</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <div>
                    <div className="text-xl font-semibold">{teacherData[teacherData.length - 1].male}</div>
                    <p className="text-sm text-gray-500">পুরুষ</p>
                  </div>
                  <div>
                    <div className="text-xl font-semibold">{teacherData[teacherData.length - 1].female}</div>
                    <p className="text-sm text-gray-500">মহিলা</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="h-full">
              <CardHeader className="pb-0">
                <CardTitle className="text-lg">৫ বছরের শিক্ষকের পরিসংখ্যান</CardTitle>
                <div className="flex space-x-2 mt-2">
                  <Button variant={teacherFilterGender === 'all' ? "default" : "outline"} 
                        size="sm" onClick={() => setTeacherFilterGender('all')}>
                    সবগুলো
                  </Button>
                  <Button variant={teacherFilterGender === 'male' ? "default" : "outline"} 
                        size="sm" onClick={() => setTeacherFilterGender('male')}>
                    পুরুষ
                  </Button>
                  <Button variant={teacherFilterGender === 'female' ? "default" : "outline"} 
                        size="sm" onClick={() => setTeacherFilterGender('female')}>
                    মহিলা
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={getFilteredData(teacherData, teacherFilterGender)}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      {teacherFilterGender === 'all' && <Bar dataKey="total" fill="#4CAF50" name="মোট" />}
                      {teacherFilterGender === 'male' && <Bar dataKey="male" fill="#2196F3" name="পুরুষ" />}
                      {teacherFilterGender === 'female' && <Bar dataKey="female" fill="#FF5722" name="মহিলা" />}
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <Button 
            onClick={() => setShowTeacherTable(!showTeacherTable)}
            variant="outline"
            className="flex items-center gap-2"
          >
            {showTeacherTable ? "তালিকা লুকান" : "আরো দেখুন"}
            {showTeacherTable ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </Button>
        </div>

        {showTeacherTable && (
          <div className="mt-4 transition-all duration-300 ease-in-out overflow-hidden">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">শিক্ষকের বিস্তারিত তথ্য</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b">বছর</th>
                        <th className="py-2 px-4 border-b">পুরুষ</th>
                        <th className="py-2 px-4 border-b">মহিলা</th>
                        <th className="py-2 px-4 border-b">মোট</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teacherData.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="py-2 px-4 border-b">{item.year}</td>
                          <td className="py-2 px-4 border-b text-center">{item.male}</td>
                          <td className="py-2 px-4 border-b text-center">{item.female}</td>
                          <td className="py-2 px-4 border-b text-center">{item.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Students Section */}
      <div className="border-t pt-6">
        <h3 className="text-lg md:text-xl font-semibold mb-4 text-green-600">ছাত্রী</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">মোট ছাত্রী</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{currentStudents}</div>
                <p className="text-sm text-gray-500">২০২৪ সালে</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">বালিকা বিদ্যালয়</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <div>
                    <div className="text-xl font-semibold">{studentData[studentData.length - 1].female}</div>
                    <p className="text-sm text-gray-500">মহিলা ছাত্রী</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="h-full">
              <CardHeader className="pb-0">
                <CardTitle className="text-lg">৫ বছরের ছাত্রীর পরিসংখ্যান</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={studentData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="total" fill="#9C27B0" name="মোট ছাত্রী" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <Button 
            onClick={() => setShowStudentTable(!showStudentTable)}
            variant="outline"
            className="flex items-center gap-2"
          >
            {showStudentTable ? "তালিকা লুকান" : "আরো দেখুন"}
            {showStudentTable ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </Button>
        </div>

        {showStudentTable && (
          <div className="mt-4 transition-all duration-300 ease-in-out overflow-hidden">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">ছাত্রীর বিস্তারিত তথ্য</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b">বছর</th>
                        <th className="py-2 px-4 border-b">ছাত্রী সংখ্যা</th>
                        <th className="py-2 px-4 border-b">বৃদ্ধির হার</th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentData.map((item, index) => {
                        const growthRate = index > 0 
                          ? (((item.total - studentData[index-1].total) / studentData[index-1].total) * 100).toFixed(1)
                          : '-';
                        
                        return (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="py-2 px-4 border-b">{item.year}</td>
                            <td className="py-2 px-4 border-b text-center">{item.total}</td>
                            <td className="py-2 px-4 border-b text-center">
                              {growthRate !== '-' ? `${growthRate}%` : '-'}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Employees Section */}
      <div className="border-t pt-6">
        <h3 className="text-lg md:text-xl font-semibold mb-4 text-green-600">কর্মচারী</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">মোট কর্মচারী</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{currentEmployees}</div>
                <p className="text-sm text-gray-500">২০২৪ সালে</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">লিঙ্গ অনুপাত</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <div>
                    <div className="text-xl font-semibold">{employeeData[employeeData.length - 1].male}</div>
                    <p className="text-sm text-gray-500">পুরুষ</p>
                  </div>
                  <div>
                    <div className="text-xl font-semibold">{employeeData[employeeData.length - 1].female}</div>
                    <p className="text-sm text-gray-500">মহিলা</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="h-full">
              <CardHeader className="pb-0">
                <CardTitle className="text-lg">৫ বছরের কর্মচারীর পরিসংখ্যান</CardTitle>
                <div className="flex space-x-2 mt-2">
                  <Button variant={employeeFilterGender === 'all' ? "default" : "outline"} 
                        size="sm" onClick={() => setEmployeeFilterGender('all')}>
                    সবগুলো
                  </Button>
                  <Button variant={employeeFilterGender === 'male' ? "default" : "outline"} 
                        size="sm" onClick={() => setEmployeeFilterGender('male')}>
                    পুরুষ
                  </Button>
                  <Button variant={employeeFilterGender === 'female' ? "default" : "outline"} 
                        size="sm" onClick={() => setEmployeeFilterGender('female')}>
                    মহিলা
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={getFilteredData(employeeData, employeeFilterGender)}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      {employeeFilterGender === 'all' && <Bar dataKey="total" fill="#FF9800" name="মোট" />}
                      {employeeFilterGender === 'male' && <Bar dataKey="male" fill="#2196F3" name="পুরুষ" />}
                      {employeeFilterGender === 'female' && <Bar dataKey="female" fill="#FF5722" name="মহিলা" />}
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <Button 
            onClick={() => setShowEmployeeTable(!showEmployeeTable)}
            variant="outline"
            className="flex items-center gap-2"
          >
            {showEmployeeTable ? "তালিকা লুকান" : "আরো দেখুন"}
            {showEmployeeTable ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </Button>
        </div>

        {showEmployeeTable && (
          <div className="mt-4 transition-all duration-300 ease-in-out overflow-hidden">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">কর্মচারীর বিস্তারিত তথ্য</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b">বছর</th>
                        <th className="py-2 px-4 border-b">পুরুষ</th>
                        <th className="py-2 px-4 border-b">মহিলা</th>
                        <th className="py-2 px-4 border-b">মোট</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employeeData.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="py-2 px-4 border-b">{item.year}</td>
                          <td className="py-2 px-4 border-b text-center">{item.male}</td>
                          <td className="py-2 px-4 border-b text-center">{item.female}</td>
                          <td className="py-2 px-4 border-b text-center">{item.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default PeopleAtSchool;