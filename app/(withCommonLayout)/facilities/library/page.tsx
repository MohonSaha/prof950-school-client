// src/app/library/page.tsx
"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Clock,
  Book,
  Users,
  Calendar,
  BookOpen,
  Library,
  Search,
} from "lucide-react";

const LibraryPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col items-center mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">আমাদের লাইব্রেরি সুবিধাসমূহ</h1>
        <p className="text-xl max-w-2xl text-gray-600">
          আমাদের স্কুলের লাইব্রেরিতে শিক্ষার্থীদের জন্য বিভিন্ন সুবিধা রয়েছে।
          এখানে শিক্ষার্থীরা তাদের জ্ঞান বৃদ্ধি করতে এবং গবেষণা করতে পারে।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="flex flex-col items-center text-center p-6">
          <Book size={48} className="text-blue-600 mb-4" />
          <CardTitle className="text-xl mb-2">বিশাল বইয়ের সংগ্রহ</CardTitle>
          <CardDescription>২০,০০০+ বই, পত্রিকা এবং ই-বুক</CardDescription>
        </Card>

        <Card className="flex flex-col items-center text-center p-6">
          <Users size={48} className="text-blue-600 mb-4" />
          <CardTitle className="text-xl mb-2">অধ্যয়ন স্থান</CardTitle>
          <CardDescription>১০০+ আসন সহ শান্ত অধ্যয়নের পরিবেশ</CardDescription>
        </Card>

        <Card className="flex flex-col items-center text-center p-6">
          <Clock size={48} className="text-blue-600 mb-4" />
          <CardTitle className="text-xl mb-2">সময়সূচী</CardTitle>
          <CardDescription>
            সোমবার থেকে শুক্রবার: সকাল ৮টা - বিকাল ৪টা
          </CardDescription>
        </Card>
      </div>

      <Tabs defaultValue="facilities" className="w-full mb-12">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2 mx-auto mb-8">
          <TabsTrigger value="facilities">সুবিধাসমূহ</TabsTrigger>
          <TabsTrigger value="rules">নিয়মাবলী</TabsTrigger>
        </TabsList>

        <TabsContent value="facilities">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" /> পাঠকক্ষ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  শান্ত পরিবেশে পড়াশুনার জন্য আলাদা পাঠকক্ষ রয়েছে। বিভিন্ন
                  আকারের টেবিল এবং আরামদায়ক চেয়ার সহ সুসজ্জিত।
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" /> ডিজিটাল ক্যাটালগ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  আমাদের অনলাইন ক্যাটালগ সিস্টেম দিয়ে সহজেই বই খুঁজে পাওয়া
                  যায়। কম্পিউটার কিয়স্ক এবং মোবাইল অ্যাপের মাধ্যমে ব্যবহার করা
                  যায়।
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" /> বই ধার নেওয়া
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  শিক্ষার্থীরা ২ সপ্তাহের জন্য ৩টি বই ধার নিতে পারে। প্রয়োজনে
                  নবায়ন করা যাবে যদি অন্য কেউ বইটি রিজার্ভ না করে থাকে।
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Library className="h-5 w-5" /> ই-লাইব্রেরি
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  ডিজিটাল সংগ্রহে প্রবেশাধিকার, যেখানে ই-বুক, অনলাইন জার্নাল এবং
                  শিক্ষামূলক ভিডিও রয়েছে। যেকোনো ডিভাইস থেকে ব্যবহার করা যায়।
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="rules">
          <Card>
            <CardHeader>
              <CardTitle>লাইব্রেরির নিয়মাবলী</CardTitle>
              <CardDescription>
                সকল শিক্ষার্থীদের অনুসরণ করতে হবে
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ১
                  </div>
                  <p>
                    লাইব্রেরিতে নীরবতা বজায় রাখতে হবে। মোবাইল ফোন সাইলেন্ট মোডে
                    রাখতে হবে।
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ২
                  </div>
                  <p>লাইব্রেরিতে খাবার ও পানীয় নিষিদ্ধ।</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ৩
                  </div>
                  <p>
                    বই বা লাইব্রেরির অন্যান্য সম্পদ নষ্ট করা থেকে বিরত থাকুন।
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ৪
                  </div>
                  <p>
                    নির্ধারিত তারিখের মধ্যে বই ফেরত দিতে হবে। দেরি হলে জরিমানা
                    দিতে হবে।
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ৫
                  </div>
                  <p>লাইব্রেরি কার্ড ছাড়া কোনো বই ধার দেওয়া হবে না।</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ৬
                  </div>
                  <p>
                    রেফারেন্স বই, দুষ্প্রাপ্য বই এবং জার্নাল লাইব্রেরির বাইরে
                    নেওয়া যাবে না।
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">
          আমাদের লাইব্রেরিয়ানের সাথে যোগাযোগ করুন
        </h2>
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">যোগাযোগের তথ্য</h3>
                <p className="mb-4">
                  যেকোনো প্রশ্ন বা সহায়তার জন্য আমাদের লাইব্রেরিয়ানের সাথে
                  যোগাযোগ করুন।
                </p>
                <div className="space-y-2">
                  <p>
                    <strong>ইমেইল:</strong> library@school.edu.bd
                  </p>
                  <p>
                    <strong>ফোন:</strong> ০১৭১২-৩৪৫৬৭৮
                  </p>
                  <p>
                    <strong>সময়:</strong> সকাল ৯টা - দুপুর ৩টা (কার্যদিবস)
                  </p>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">লাইব্রেরি ঘণ্টা</h3>
                <div className="space-y-2">
                  <p>
                    <strong>সোমবার - বৃহস্পতিবার:</strong> সকাল ৮টা - বিকাল ৪টা
                  </p>
                  <p>
                    <strong>শুক্রবার:</strong> সকাল ৮টা - দুপুর ১টা
                  </p>
                  <p>
                    <strong>শনিবার:</strong> সকাল ৯টা - দুপুর ১২টা
                  </p>
                  <p>
                    <strong>রবিবার:</strong> বন্ধ
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">
          আমাদের সাম্প্রতিক সংগ্রহ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              title: "বাংলা সাহিত্যের ইতিহাস",
              author: "আনিসুজ্জামান",
              category: "সাহিত্য",
            },
            {
              title: "বিজ্ঞানের আলোকে বিশ্ব",
              author: "জাফর ইকবাল",
              category: "বিজ্ঞান",
            },
            { title: "গণিতের মজা", author: "মুনীর হাসান", category: "গণিত" },
            {
              title: "বাংলাদেশের মুক্তিযুদ্ধ",
              author: "হুমায়ুন আহমেদ",
              category: "ইতিহাস",
            },
          ].map((book, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-40 bg-blue-100 flex items-center justify-center">
                <Book size={64} className="text-blue-500" />
              </div>
              <CardContent className="pt-4">
                <h3 className="font-bold mb-1">{book.title}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  লেখক: {book.author}
                </p>
                <p className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full inline-block">
                  {book.category}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
