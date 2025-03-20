// "use client"
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Search } from 'lucide-react';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { Tabs,  TabsList, TabsTrigger } from '@/components/ui/tabs';

// // Teacher type definition
// interface Teacher {
//   id: number;
//   name: string;
//   subjects: string[];
//   university: string;
//   image: string;
//   department: string;
// }

// // Sample teachers data in Bengali
// const teachers: Teacher[] = [
//   {
//     id: 1,
//     name: 'ড. রফিকুল ইসলাম',
//     subjects: ['পদার্থবিজ্ঞান', 'জ্যোতির্বিজ্ঞান'],
//     university: 'ঢাকা বিশ্ববিদ্যালয়',
//     image: '/api/placeholder/300/300',
//     department: 'বিজ্ঞান'
//   },
//   {
//     id: 2,
//     name: 'পারভীন সুলতানা',
//     subjects: ['ইংরেজি সাহিত্য', 'ভাষাতত্ত্ব'],
//     university: 'জাহাঙ্গীরনগর বিশ্ববিদ্যালয়',
//     image: '/api/placeholder/300/300',
//     department: 'মানবিক'
//   },
//   {
//     id: 3,
//     name: 'ড. মাহমুদুল হাসান',
//     subjects: ['গণিত', 'পরিসংখ্যান'],
//     university: 'বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয়',
//     image: '/api/placeholder/300/300',
//     department: 'বিজ্ঞান'
//   },
//   {
//     id: 4,
//     name: 'নুসরাত জাহান',
//     subjects: ['ইতিহাস', 'রাষ্ট্রবিজ্ঞান'],
//     university: 'রাজশাহী বিশ্ববিদ্যালয়',
//     image: '/api/placeholder/300/300',
//     department: 'মানবিক'
//   },
//   {
//     id: 5,
//     name: 'আবদুল আলিম',
//     subjects: ['অর্থনীতি', 'ব্যবসায় প্রশাসন'],
//     university: 'চট্টগ্রাম বিশ্ববিদ্যালয়',
//     image: '/api/placeholder/300/300',
//     department: 'বাণিজ্য'
//   },
//   {
//     id: 6,
//     name: 'তানিয়া আক্তার',
//     subjects: ['বাংলা সাহিত্য', 'সমাজবিজ্ঞান'],
//     university: 'জাতীয় বিশ্ববিদ্যালয়',
//     image: '/api/placeholder/300/300',
//     department: 'মানবিক'
//   },
// ];

// export default function TeachersPage() {
//   const [searchTerm, setSearchTerm] = React.useState('');
//   const [filteredTeachers, setFilteredTeachers] = React.useState(teachers);
//   const [activeTab, setActiveTab] = React.useState('সকল');

//   React.useEffect(() => {
//     let result = teachers;
    
//     // Filter by search term
//     if (searchTerm) {
//       result = result.filter(teacher => 
//         teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         teacher.subjects.some(subject => subject.toLowerCase().includes(searchTerm.toLowerCase())) ||
//         teacher.university.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
    
//     // Filter by department
//     if (activeTab !== 'সকল') {
//       result = result.filter(teacher => teacher.department === activeTab);
//     }
    
//     setFilteredTeachers(result);
//   }, [searchTerm, activeTab]);

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold mb-2">আমাদের অভিজ্ঞ শিক্ষকমণ্ডলী</h1>
//         <p className="text-lg text-gray-600 mb-8">উচ্চমানের শিক্ষা প্রদানের জন্য নিবেদিত আমাদের দক্ষ শিক্ষকগণ</p>
        
//         <div className="flex max-w-md mx-auto relative mb-8">
//           <Input
//             className="pr-10"
//             placeholder="শিক্ষক, বিষয় বা বিশ্ববিদ্যালয় অনুসন্ধান করুন"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
//         </div>

//         <Tabs defaultValue="সকল" className="max-w-md mx-auto" onValueChange={setActiveTab}>
//           <TabsList className="grid grid-cols-4 mb-8">
//             <TabsTrigger value="সকল">সকল</TabsTrigger>
//             <TabsTrigger value="বিজ্ঞান">বিজ্ঞান</TabsTrigger>
//             <TabsTrigger value="মানবিক">মানবিক</TabsTrigger>
//             <TabsTrigger value="বাণিজ্য">বাণিজ্য</TabsTrigger>
//           </TabsList>
//         </Tabs>
//       </div>

//       {filteredTeachers.length === 0 ? (
//         <div className="text-center py-12">
//           <p className="text-xl text-gray-500">কোন শিক্ষক পাওয়া যায়নি। অনুগ্রহ করে অন্য কিছু অনুসন্ধান করুন।</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredTeachers.map((teacher) => (
//             <motion.div
//               key={teacher.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3 }}
//               className="relative group"
//             >
//               <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
//                 <div className="flex items-center p-4 border-b">
//                   <div className="relative w-20 h-20 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
//                     <img
//                       src={teacher.image}
//                       alt={teacher.name}
//                       className="w-full h-full object-cover rounded-full"
//                     />
//                   </div>
//                   <div className="flex-1">
//                     <h2 className="text-xl font-semibold">{teacher.name}</h2>
//                     <p className="text-sm text-gray-600 dark:text-gray-300">{teacher.university}</p>
//                   </div>
//                 </div>
                
//                 <div className="p-4">
//                   <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">বিষয়সমূহ</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {teacher.subjects.map((subject, index) => (
//                       <Badge key={index} variant="outline" className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
//                         {subject}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>
                
//                 <div className="p-4 bg-gray-100 dark:bg-gray-700/50 text-center">
//                   <Button className="w-full" variant="outline">
//                     বিস্তারিত দেখুন
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

"use client"
// components/TeachersPage.tsx
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

// Teacher type definition
interface Teacher {
  id: number;
  name: string;
  designation: string;
  subjects: string[];
  university: string;
  image: string;
  department: string;
}

// Sample teachers data in Bengali
const teachers: Teacher[] = [
  {
    id: 1,
    name: 'মোঃ আবদুর রাজ্জাক',
    designation: 'প্রধান শিক্ষক',
    subjects: ['ইংরাজি'],
    university: 'এম এম কলেজ',
    image: 'https://i.ibb.co.com/993bjTXy/462719185-3803756793225010-4459295209552193269-n.jpg',
    department: 'বিজ্ঞান'
  },
  {
    id: 2,
    name: 'সাবিনা ইয়াসমিন',
    designation: 'সহকারী শিক্ষক',
    subjects: ['বাংলা'],
    university: 'জাহাঙ্গীরনগর বিশ্ববিদ্যালয়',
    image: 'https://i.ibb.co.com/993bjTXy/462719185-3803756793225010-4459295209552193269-n.jpg',
    department: 'মানবিক'
  },
  {
    id: 3,
    name: 'মোঃ আলী হোসেন',
    designation: 'সহকারী শিক্ষক',
    subjects: ['ইংরেজি'],
    university: 'রাজশাহী বিশ্ববিদ্যালয়',
    image: 'https://i.ibb.co.com/993bjTXy/462719185-3803756793225010-4459295209552193269-n.jpg',
    department: 'মানবিক'
  },
  {
    id: 4,
    name: 'নাজমা আক্তার',
    designation: 'সহকারী শিক্ষক',
    subjects: ['বিজ্ঞান', 'জীববিজ্ঞান'],
    university: 'জাতীয় বিশ্ববিদ্যালয়',
    image: 'https://i.ibb.co.com/993bjTXy/462719185-3803756793225010-4459295209552193269-n.jpg',
    department: 'বিজ্ঞান'
  },
  {
    id: 5,
    name: 'রফিকুল ইসলাম',
    designation: 'সহকারী শিক্ষক',
    subjects: ['সমাজ বিজ্ঞান', 'ইসলাম শিক্ষা'],
    university: 'ইসলামী বিশ্ববিদ্যালয়',
    image: 'https://i.ibb.co.com/993bjTXy/462719185-3803756793225010-4459295209552193269-n.jpg',
    department: 'মানবিক'
  },
  {
    id: 6,
    name: 'সালমা বেগম',
    designation: 'সহকারী শিক্ষক',
    subjects: ['ভূগোল', 'অর্থনীতি'],
    university: 'চট্টগ্রাম বিশ্ববিদ্যালয়',
    image: 'https://i.ibb.co.com/993bjTXy/462719185-3803756793225010-4459295209552193269-n.jpg',
    department: 'মানবিক'
  },
];

export default function TeachersPage() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedDepartment, setSelectedDepartment] = React.useState('সকল');
  const [filteredTeachers, setFilteredTeachers] = React.useState(teachers);

  React.useEffect(() => {
    let result = teachers;
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(teacher => 
        teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.subjects.some(subject => subject.toLowerCase().includes(searchTerm.toLowerCase())) ||
        teacher.university.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by department
    if (selectedDepartment !== 'সকল') {
      result = result.filter(teacher => teacher.department === selectedDepartment);
    }
    
    setFilteredTeachers(result);
  }, [searchTerm, selectedDepartment]);

  return (
    <div className="md:px-10 mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
        <div className="p-6 bg-green-50 dark:bg-green-950 rounded-t-lg">
          <h1 className="text-3xl font-bold text-center text-green-700 dark:text-green-300">শিক্ষক মণ্ডলী</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-2">আমাদের যোগ্য ও অভিজ্ঞ শিক্ষকগণ</p>
        </div>

        <div className="p-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                className="pl-10"
                placeholder="নাম, বা বিষয় অনুসারে খুঁজুন"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="বিভাগ বাছাই করুন" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="সকল">সকল বিভাগ</SelectItem>
                <SelectItem value="বিজ্ঞান">বিজ্ঞান</SelectItem>
                <SelectItem value="মানবিক">মানবিক</SelectItem>
                <SelectItem value="বাণিজ্য">বাণিজ্য</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {filteredTeachers.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">কোন শিক্ষক পাওয়া যায়নি। অনুগ্রহ করে অন্য কিছু অনুসন্ধান করুন।</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredTeachers.map((teacher) => (
                <div key={teacher.id} className="flex flex-col md:flex-row items-center gap-6 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900">
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-grow text-center md:text-left">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">{teacher.name}</h2>
                    <p className="text-green-600 dark:text-green-400 font-medium">{teacher.designation}</p>
                    
                    <div className="mt-3 space-y-1">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-medium">বিষয়:</span> {teacher.subjects.join(', ')}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-medium">শিক্ষাগত যোগ্যতা:</span> {teacher.university}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-medium">বিভাগ:</span> {teacher.department}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}