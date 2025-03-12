// // src/app/playground/page.tsx
// "use client";

// import React from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Info, MapPin, Calendar, Clock, Users } from "lucide-react";

// const PlaygroundPage = () => {
//   // বাংলা ভাষায় খেলার মাঠের তথ্য
//   const facilitiesData = [
//     {
//       id: "outdoor",
//       title: "বহিরঙ্গন খেলার মাঠ",
//       description: "আমাদের বিস্তীর্ণ বহিরঙ্গন খেলার মাঠগুলি",
//       facilities: [
//         {
//           id: 1,
//           name: "ফুটবল মাঠ",
//           description: "আন্তর্জাতিক মানের ফুটবল মাঠ",
//           size: "১০০ × ৬৪ মিটার",
//           capacity: "২০০ দর্শক",
//           equipment: "গোল পোস্ট, মার্কার, স্কোর বোর্ড",
//           image: "/api/placeholder/500/300",
//         },
//         {
//           id: 2,
//           name: "ক্রিকেট মাঠ",
//           description: "পূর্ণাঙ্গ ক্রিকেট মাঠ পিচ সহ",
//           size: "১৩৭ × ১৫০ মিটার",
//           capacity: "১৫০ দর্শক",
//           equipment: "পিচ, স্টাম্প, প্রশিক্ষণ নেট",
//           image: "/api/placeholder/500/300",
//         },
//         {
//           id: 3,
//           name: "বাস্কেটবল কোর্ট",
//           description: "আধুনিক বাস্কেটবল কোর্ট",
//           size: "২৮ × ১৫ মিটার",
//           capacity: "১০০ দর্শক",
//           equipment: "বাস্কেট রিং, স্কোর বোর্ড",
//           image: "/api/placeholder/500/300",
//         },
//       ],
//     },
//     {
//       id: "indoor",
//       title: "অন্তরঙ্গন খেলাধুলা",
//       description: "আমাদের সুসজ্জিত অভ্যন্তরীণ খেলার সুবিধাগুলি",
//       facilities: [
//         {
//           id: 1,
//           name: "টেবিল টেনিস রুম",
//           description: "আন্তর্জাতিক মানের টেবিল টেনিস টেবিল",
//           size: "১৫ × ১০ মিটার",
//           capacity: "৩০ খেলোয়াড়",
//           equipment: "৬টি টেবিল, র‍্যাকেট, বল",
//           image: "/api/placeholder/500/300",
//         },
//         {
//           id: 2,
//           name: "ব্যাডমিন্টন হল",
//           description: "অলিম্পিক মানের ব্যাডমিন্টন কোর্ট",
//           size: "২০ × ১৮ মিটার",
//           capacity: "৫০ খেলোয়াড়",
//           equipment: "নেট, র‍্যাকেট, শাটল",
//           image: "/api/placeholder/500/300",
//         },
//         {
//           id: 3,
//           name: "চেস রুম",
//           description: "শান্ত পরিবেশে দাবা খেলার ব্যবস্থা",
//           size: "১০ × ৮ মিটার",
//           capacity: "২৪ খেলোয়াড়",
//           equipment: "১২টি দাবা বোর্ড, ডিজিটাল ঘড়ি",
//           image: "/api/placeholder/500/300",
//         },
//       ],
//     },
//     {
//       id: "playground",
//       title: "শিশুদের খেলার মাঠ",
//       description: "ছোট শিশুদের জন্য নিরাপদ ও মজাদার খেলার স্থান",
//       facilities: [
//         {
//           id: 1,
//           name: "দোলনা এলাকা",
//           description: "বিভিন্ন ধরনের দোলনা ও স্লাইড",
//           size: "১৫ × ১২ মিটার",
//           capacity: "৩০ শিশু",
//           equipment: "দোলনা, স্লাইড, সি-সো",
//           image: "/api/placeholder/500/300",
//         },
//         {
//           id: 2,
//           name: "বালি খেলার স্থান",
//           description: "নরম বালিতে খেলার নিরাপদ জায়গা",
//           size: "৮ × ৮ মিটার",
//           capacity: "২০ শিশু",
//           equipment: "বালি, খেলনা, বালতি",
//           image: "/api/placeholder/500/300",
//         },
//         {
//           id: 3,
//           name: "জিমন্যাসিয়াম এলাকা",
//           description: "ছোট বাচ্চাদের জন্য সুরক্ষিত জিম সরঞ্জাম",
//           size: "১০ × ১০ মিটার",
//           capacity: "১৫ শিশু",
//           equipment: "ক্লাইম্বিং ফ্রেম, টানেল, ট্রাম্পোলিন",
//           image: "/api/placeholder/500/300",
//         },
//       ],
//     },
//   ];

//   // ব্যবহারের নিয়ম
//   const rules = [
//     "সব খেলার মাঠ সকাল ৮টা থেকে বিকাল ৫টা পর্যন্ত খোলা থাকবে।",
//     "ছাত্রদের অবশ্যই সঠিক পোশাক ও জুতা পরতে হবে।",
//     "সব সরঞ্জাম ব্যবহারের পর যথাস্থানে রাখতে হবে।",
//     "খেলার মাঠে খাবার নিয়ে যাওয়া নিষেধ।",
//     "যেকোনো ক্ষতি বা দুর্ঘটনার জন্য সাথে সাথে দায়িত্বরত শিক্ষককে জানাতে হবে।",
//     "স্কুলের সম্পত্তি ক্ষতিগ্রস্ত করা হলে তার জন্য দায়ী থাকতে হবে।",
//     "সকল ছাত্রছাত্রীদের পরস্পরের প্রতি সম্মান দেখাতে হবে।",
//   ];

//   // বুকিং সময়সূচী
//   const bookingSchedule = [
//     {
//       day: "সোমবার",
//       time: "দুপুর ১২টা - ২টা",
//       facility: "ফুটবল মাঠ",
//       class: "ষষ্ঠ থেকে অষ্টম শ্রেণী",
//     },
//     {
//       day: "মঙ্গলবার",
//       time: "দুপুর ১২টা - ২টা",
//       facility: "ক্রিকেট মাঠ",
//       class: "নবম থেকে দশম শ্রেণী",
//     },
//     {
//       day: "বুধবার",
//       time: "দুপুর ১২টা - ২টা",
//       facility: "বাস্কেটবল কোর্ট",
//       class: "সকল শ্রেণী",
//     },
//     {
//       day: "বৃহস্পতিবার",
//       time: "দুপুর ১২টা - ২টা",
//       facility: "ব্যাডমিন্টন হল",
//       class: "সকল শ্রেণী",
//     },
//     {
//       day: "শুক্রবার",
//       time: "সকাল ১০টা - ১২টা",
//       facility: "সব খেলার মাঠ",
//       class: "বিশেষ আয়োজন",
//     },
//   ];

//   return (
//     <div className="container mx-auto py-10 px-4">
//       <header className="text-center mb-10">
//         <h1 className="text-4xl font-bold text-primary mb-2">
//           আমাদের খেলার মাঠ
//         </h1>
//         <p className="text-lg text-gray-600 mb-4">
//           আমাদের বিদ্যালয়ের সুসজ্জিত খেলাধুলার সুবিধাসমূহ
//         </p>
//         <div className="flex justify-center gap-4 flex-wrap">
//           <Badge
//             variant="outline"
//             className="text-sm py-1 px-3 flex items-center gap-1"
//           >
//             <MapPin size={14} /> বিদ্যালয় ক্যাম্পাস
//           </Badge>
//           <Badge
//             variant="outline"
//             className="text-sm py-1 px-3 flex items-center gap-1"
//           >
//             <Clock size={14} /> সকাল ৮টা - বিকাল ৫টা
//           </Badge>
//           <Badge
//             variant="outline"
//             className="text-sm py-1 px-3 flex items-center gap-1"
//           >
//             <Users size={14} /> সকল ছাত্রছাত্রীদের জন্য
//           </Badge>
//         </div>
//       </header>

//       <Tabs defaultValue="outdoor" className="mb-10">
//         <TabsList className="grid w-full grid-cols-3">
//           <TabsTrigger value="outdoor">বহিরঙ্গন</TabsTrigger>
//           <TabsTrigger value="indoor">অন্তরঙ্গন</TabsTrigger>
//           <TabsTrigger value="playground">শিশুদের জন্য</TabsTrigger>
//         </TabsList>

//         {facilitiesData.map((category) => (
//           <TabsContent key={category.id} value={category.id}>
//             <Card>
//               <CardHeader>
//                 <CardTitle>{category.title}</CardTitle>
//                 <CardDescription>{category.description}</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {category.facilities.map((facility) => (
//                     <Card key={facility.id} className="overflow-hidden">
//                       <img
//                         src={facility.image}
//                         alt={facility.name}
//                         className="w-full h-48 object-cover"
//                       />
//                       <CardHeader className="p-4">
//                         <CardTitle className="text-xl">
//                           {facility.name}
//                         </CardTitle>
//                         <CardDescription>
//                           {facility.description}
//                         </CardDescription>
//                       </CardHeader>
//                       <CardContent className="p-4 pt-0">
//                         <div className="space-y-2">
//                           <div className="flex justify-between">
//                             <span className="font-medium">আয়তন:</span>
//                             <span>{facility.size}</span>
//                           </div>
//                           <div className="flex justify-between">
//                             <span className="font-medium">ধারণক্ষমতা:</span>
//                             <span>{facility.capacity}</span>
//                           </div>
//                           <div className="flex justify-between">
//                             <span className="font-medium">সরঞ্জাম:</span>
//                             <span>{facility.equipment}</span>
//                           </div>
//                         </div>
//                         <Button className="w-full mt-4">বিস্তারিত দেখুন</Button>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         ))}
//       </Tabs>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
//         <Card>
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               <Info size={20} />
//               ব্যবহারের নিয়মাবলী
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ul className="list-disc pl-5 space-y-2">
//               {rules.map((rule, index) => (
//                 <li key={index}>{rule}</li>
//               ))}
//             </ul>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               <Calendar size={20} />
//               সাপ্তাহিক সময়সূচী
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="overflow-x-auto">
//               <table className="w-full border-collapse">
//                 <thead>
//                   <tr className="border-b">
//                     <th className="py-2 text-left">দিন</th>
//                     <th className="py-2 text-left">সময়</th>
//                     <th className="py-2 text-left">স্থান</th>
//                     <th className="py-2 text-left">শ্রেণী</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {bookingSchedule.map((item, index) => (
//                     <tr key={index} className="border-b">
//                       <td className="py-2">{item.day}</td>
//                       <td className="py-2">{item.time}</td>
//                       <td className="py-2">{item.facility}</td>
//                       <td className="py-2">{item.class}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       <Card className="mb-10">
//         <CardHeader>
//           <CardTitle>আমাদের সুবিধা বুকিং করুন</CardTitle>
//           <CardDescription>
//             খেলার মাঠ বুকিং করতে নিচের ফর্মটি পূরণ করুন অথবা স্কুল অফিসে যোগাযোগ
//             করুন
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="text-center p-10">
//             <p className="mb-4">
//               অনলাইন বুকিং সিস্টেম শীঘ্রই চালু হবে। আপাতত অনুগ্রহ করে স্কুল
//               অফিসের সাথে যোগাযোগ করুন।
//             </p>
//             <Button className="mr-4">যোগাযোগ করুন</Button>
//             <Button variant="outline">আরও জানুন</Button>
//           </div>
//         </CardContent>
//       </Card>

//       <footer className="text-center text-gray-500 text-sm">
//         <p>© ২০২৫ আমাদের বিদ্যালয়। সর্বস্বত্ব সংরক্ষিত।</p>
//         <p>প্রশ্ন বা সাহায্যের জন্য ০১৭XXXXXXXX নম্বরে কল করুন।</p>
//       </footer>
//     </div>
//   );
// };

// export default PlaygroundPage;

// src/app/playground/page.tsx
"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Info } from "lucide-react";
import Image from "next/image";

const PlaygroundPage = () => {
  // বাংলা ভাষায় খেলার মাঠের তথ্য
  const playgroundInfo = {
    title: "আমাদের খেলার মাঠ",
    subtitle: "সকল ছাত্রছাত্রীদের জন্য সাধারণ খেলার মাঠ",
    description:
      "আমাদের বিদ্যালয়ের খেলার মাঠটি সকল ছাত্রছাত্রীদের জন্য উন্মুক্ত। এখানে বিভিন্ন ধরনের খেলাধুলার ব্যবস্থা রয়েছে। প্রতিদিন স্কুলের সময়ে এবং স্কুল শেষে ছাত্রছাত্রীরা এখানে খেলাধুলা করতে পারে। এই মাঠটি সবুজ ঘাসে আচ্ছাদিত এবং চারপাশে বড় বড় গাছ দিয়ে ঘেরা, যা একটি প্রাকৃতিক পরিবেশ তৈরি করে।",
    features: [
      "প্রশস্ত খেলার মাঠ",
      "স্বাস্থ্যকর পরিবেশ",
      "নিরাপদ এবং সুরক্ষিত",
      "পর্যাপ্ত বিশ্রাম স্থান",
      "বিশুদ্ধ পানীয় জলের ব্যবস্থা",
      "ছায়াযুক্ত বসার স্থান",
    ],
    images: [
      {
        src: "https://i.ibb.co.com/jvh4LVC0/476157816-3943353619269352-6515535858994079857-n.jpg",
        alt: "সামনের দিকের খেলার মাঠ",
      },
      {
        src: "https://i.ibb.co.com/p5BkvST/440939710-3721837231420993-5583543011897817735-n.jpg",
        alt: "মাঠের পূর্ব দিক",
      },
      {
        src: "https://i.ibb.co.com/wrjDWkTQ/457440983-3806089406329108-5510199248060323847-n.jpg",
        alt: "মাঠের পশ্চিম দিক",
      },
      {
        src: "https://i.ibb.co.com/bGLtz7d/438263304-3721837338087649-1784584947152964870-n.jpg",
        alt: "বসার স্থান",
      },
      {
        src: "https://i.ibb.co.com/p5BkvST/440939710-3721837231420993-5583543011897817735-n.jpg",
        alt: "সবুজ ঘাসের মাঠ",
      },
      {
        src: "https://i.ibb.co.com/VWc49P61/468515310-3888187788119269-4246541016842618094-n.jpg8",
        alt: "খেলার সময়",
      },
    ],
  };

  // ব্যবহারের নিয়ম
  const rules = [
    "সকল ছাত্রছাত্রী খেলার মাঠ ব্যবহার করতে পারবে।",
    "খেলার মাঠে সবাই পরস্পরের প্রতি সম্মান দেখাতে হবে।",
    "মাঠে ময়লা আবর্জনা ফেলা নিষেধ।",
    "মাঠের সরঞ্জাম যত্ন সহকারে ব্যবহার করতে হবে।",
    "কোনো সমস্যা হলে দায়িত্বরত শিক্ষককে জানাতে হবে।",
    "সকল ছাত্রছাত্রীদের নিরাপত্তার প্রতি সচেতন থাকতে হবে।",
    "স্কুলের সময়সূচী অনুযায়ী মাঠ ব্যবহার করতে হবে।",
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-2">
          {playgroundInfo.title}
        </h1>
        <p className="text-lg text-gray-600 mb-6">{playgroundInfo.subtitle}</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Badge
            variant="outline"
            className="text-sm py-1 px-3 flex items-center gap-1"
          >
            <MapPin size={14} /> বিদ্যালয় ক্যাম্পাস
          </Badge>
          <Badge
            variant="outline"
            className="text-sm py-1 px-3 flex items-center gap-1"
          >
            <Clock size={14} /> স্কুল চলাকালীন সময়
          </Badge>
          <Badge
            variant="outline"
            className="text-sm py-1 px-3 flex items-center gap-1"
          >
            <Users size={14} /> সকল ছাত্রছাত্রীদের জন্য
          </Badge>
        </div>
      </header>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle>আমাদের খেলার মাঠ সম্পর্কে</CardTitle>
          <CardDescription>
            সকল ছাত্রছাত্রীদের জন্য একটি সাধারণ খেলার মাঠ
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-6">{playgroundInfo.description}</p>
              <h3 className="text-lg font-semibold mb-3">মাঠের বৈশিষ্ট্য:</h3>
              <ul className="list-disc pl-5 space-y-2">
                {playgroundInfo.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button>আরও জানুন</Button>
              </div>
            </div>
            <div className="">
              {/* <img
                src={playgroundInfo.images[0].src}
                alt={playgroundInfo.images[0].alt}
                className="w-full h-full rounded-lg shadow-md"
              /> */}
              <Image
                src={playgroundInfo.images[0].src}
                alt={playgroundInfo.images[0].alt}
                width={500}
                height={300}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 rounded-md"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">
          আমাদের খেলার মাঠের ছবি
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {playgroundInfo.images.slice(1).map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              /> */}
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={300}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-3 bg-white">
                <p className="text-center text-gray-700">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info size={20} />
            ব্যবহারের নিয়মাবলী
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            {rules.map((rule, index) => (
              <li key={index} className="text-gray-700">
                {rule}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-12 bg-primary/5">
        <CardHeader>
          <CardTitle>শিক্ষার্থীদের সুস্থতার জন্য খেলাধুলার গুরুত্ব</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">শারীরিক সুস্থতা</h3>
              <p className="text-gray-700">
                নিয়মিত খেলাধুলা শারীরিক সুস্থতা বজায় রাখতে সাহায্য করে। এতে
                শরীরের পেশি মজবুত হয় এবং রোগ প্রতিরোধ ক্ষমতা বাড়ে।
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">মানসিক বিকাশ</h3>
              <p className="text-gray-700">
                খেলাধুলা শিক্ষার্থীদের মনোযোগ ও একাগ্রতা বাড়াতে সাহায্য করে।
                এতে তাদের মানসিক চাপ কমে এবং মেধা বিকশিত হয়।
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">সামাজিক দক্ষতা</h3>
              <p className="text-gray-700">
                দলীয় খেলাধুলা শিক্ষার্থীদের মধ্যে সহযোগিতা, নেতৃত্ব এবং টীম
                ওয়ার্কের মনোভাব গড়ে তোলে। এতে তাদের সামাজিক দক্ষতা বৃদ্ধি
                পায়।
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlaygroundPage;
