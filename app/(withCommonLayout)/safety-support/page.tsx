"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import {
  AlertCircle,
  Phone,
  Shield,
  FileText,
  MessageCircle,
  BookOpen,
  Bell,
  PhoneCall,
} from "lucide-react";

const SafetyAndSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [report, setReport] = useState("");
  const [anonymous, setAnonymous] = useState("yes");
  const [studentName, setStudentName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [studentRoll, setStudentRoll] = useState("");

  const handleSubmit = () => {
    console.log("Report Submitted:", {
      report,
      anonymous,
      ...(anonymous === "no" && {
        name: studentName,
        class: studentClass,
        roll: studentRoll,
      }),
    });
    setIsOpen(false);

    // Reset form fields after submission
    setReport("");
    setAnonymous("yes");
    setStudentName("");
    setStudentClass("");
    setStudentRoll("");
  };

  const emergencyContacts = [
    { name: "জাতীয় জরুরী সেবা", number: "৯৯৯" },
    { name: "নারী ও শিশু নির্যাতন প্রতিরোধ হেল্পলাইন", number: "১০৯" },
    { name: "শিশু সহায়তা হটলাইন", number: "১০৯৮" },
    { name: "আইনি সহায়তা", number: "১৬৪৩০" },
    { name: "স্কুল শিক্ষক", number: "01609185463" },
    { name: "কাউন্সেলর", number: "01609185463" },
  ];

  const awarenessMaterials = [
    {
      title: "নিজেকে রক্ষা করুন",
      description: "আত্মরক্ষার মূল নীতি ও কৌশলসমূহ",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "আইনি অধিকার",
      description: "আপনার আইনি অধিকার সম্পর্কে জানুন",
      icon: <FileText className="h-6 w-6" />,
    },
    {
      title: "সম্মতির গুরুত্ব",
      description: "সম্মতি কী এবং কেন এটি গুরুত্বপূর্ণ",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: "সহায়তা চাওয়া",
      description: "কীভাবে সাহায্য চাইবেন এবং কার কাছে যাবেন",
      icon: <MessageCircle className="h-6 w-6" />,
    },
  ];

  const awarenessRules = [
    "অপরিচিত কারও সাথে একা না থাকা ভালো।",
    "নিজের অবস্থান এবং নিরাপত্তা সম্পর্কে সবসময় সতর্ক থাকুন।",
    "কাউকে বিশ্বাস করতে সমস্যা হলে অভিভাবকের সাথে আলোচনা করুন।",
    "কোনো অপ্রীতিকর পরিস্থিতি সম্পর্কে বিশ্বস্ত কাউকে জানান",
    "আপনার নিরাপত্তাকে সর্বদা অগ্রাধিকার দিন",
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4 text-red-600">
          🔴 নিরাপত্তা ও সহায়তা কেন্দ্র
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-700">
          আপনি বিপদে থাকলে সাহায্য পেতে নিচের তথ্য অনুসরণ করুন। আমাদের স্কুল
          কমিউনিটির সকল সদস্যের নিরাপত্তা ও সুরক্ষা নিশ্চিত করতে আমরা
          প্রতিশ্রুতিবদ্ধ।
        </p>
      </div>

      <Tabs defaultValue="emergency" className="w-full max-w-5xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="emergency">জরুরি সহায়তা</TabsTrigger>
          <TabsTrigger value="awareness">সচেতনতা</TabsTrigger>
          <TabsTrigger value="report">রিপোর্ট করুন</TabsTrigger>
        </TabsList>

        <TabsContent value="emergency" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-6 w-6 text-red-500" />
                <span>জরুরি যোগাযোগ নম্বর</span>
              </CardTitle>
              <CardDescription>
                যেকোনো জরুরি পরিস্থিতিতে দ্রুত সাহায্য পেতে নিচের নম্বরগুলো
                ব্যবহার করুন।
              </CardDescription>
            </CardHeader>
            <CardContent className="max-h-[80vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {emergencyContacts.map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 "
                  >
                    <div className="font-medium">{contact.name}</div>
                    <div className="flex items-center gap-2 ">
                      <span className="font-bold text-lg text-red-500">
                        {contact.number}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          (window.location.href = `tel:${contact.number}`)
                        }
                      >
                        <span className="hidden md:flex">কল করুন</span>
                        <PhoneCall className="md:hidden text-green-700" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-center">
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-6 text-lg flex items-center gap-2"
                  onClick={() => (window.location.href = "tel:999")}
                >
                  <Bell className="h-5 w-5" />
                  🚨 ৯৯৯-এ জরুরি কল করুন
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-sm text-gray-500">
                জরুরি অবস্থায় সবসময় পরিবার, শিক্ষক বা বিশ্বস্ত
                প্রাপ্তবয়স্কদের সাহায্য নিন।
              </p>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="awareness" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-blue-500" />
                <span>সচেতনতা ও প্রতিরোধ</span>
              </CardTitle>
              <CardDescription>
                নিজেকে এবং আপনার সহপাঠীদের সুরক্ষিত রাখতে এই গুরুত্বপূর্ণ
                তথ্যগুলো জেনে রাখুন।
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {awarenessMaterials.map((material, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <CardHeader className="bg-blue-50 flex flex-row items-center gap-4 pb-2">
                      <div className="bg-blue-100 p-2 rounded-full">
                        {material.icon}
                      </div>
                      <CardTitle className="text-lg">
                        {material.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p>{material.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="w-full">
                        বিস্তারিত দেখুন
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
                  <AlertCircle className="h-5 w-5 text-amber-500" />
                  <span>মনে রাখবেন</span>
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  {awarenessRules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="report" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-purple-500" />
                <span>গোপনীয় অভিযোগ ফর্ম</span>
              </CardTitle>
              <CardDescription>
                যেকোনো অনাকাঙ্ক্ষিত ঘটনা বা সমস্যা সম্পর্কে জানাতে আমাদের
                গোপনীয় রিপোর্টিং ব্যবস্থা ব্যবহার করুন।
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader className="bg-purple-50">
                    <CardTitle className="text-lg">অনলাইন ফর্ম</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p>আপনার পরিচয় গোপন রেখে অনলাইনে সমস্যা রিপোর্ট করুন।</p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      onClick={() => setIsOpen(true)}
                    >
                      ফর্ম পূরণ করুন
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="bg-purple-50">
                    <CardTitle className="text-lg">সরাসরি যোগাযোগ</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p>
                      স্কুলের নির্দিষ্ট দায়িত্বপ্রাপ্ত শিক্ষকের সাথে কথা বলুন।
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      যোগাযোগ তথ্য দেখুন
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border">
                <h3 className="font-medium mb-2">আপনার রিপোর্ট সম্পর্কে</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>আপনার পরিচয় সম্পূর্ণ গোপন রাখা হবে</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>
                      সকল রিপোর্ট অত্যন্ত গুরুত্বের সাথে বিবেচনা করা হয়
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>
                      রিপোর্ট করার কারণে আপনার বিরুদ্ধে কোনো পদক্ষেপ নেওয়া হবে
                      না
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-12 bg-blue-50 p-6 rounded-lg max-w-5xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-center">আমাদের অঙ্গীকার</h2>
        <p className="text-center mb-6">
          আমাদের স্কুল কমিউনিটিতে সকলের নিরাপত্তা ও সম্মান নিশ্চিত করতে আমরা
          প্রতিশ্রুতিবদ্ধ। যৌন হয়রানি ও নির্যাতনের বিরুদ্ধে আমাদের জিরো
          টলারেন্স নীতি রয়েছে।
        </p>
        <div className="flex justify-center">
          <Button className="bg-blue-600 hover:bg-blue-700">
            আমাদের নীতিমালা দেখুন
          </Button>
        </div>
      </div>

      {/* Alert Dialog (Complaint Form) */}
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent className="max-h-[80vh] overflow-y-auto">
          <AlertDialogHeader>
            <AlertDialogTitle>গোপনীয় অভিযোগ ফর্ম</AlertDialogTitle>
            <AlertDialogDescription>
              আপনার অভিযোগ লিখুন এবং নিরাপদ থাকুন। এটি শুধুমাত্র নির্দিষ্ট স্কুল
              কর্তৃপক্ষ দেখতে পারবে।
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="space-y-4">
            <Textarea
              placeholder="আপনার অভিজ্ঞতা লিখুন..."
              value={report}
              onChange={(e) => setReport(e.target.value)}
              className="min-h-32"
            />

            <div className="space-y-2">
              <label className="text-sm text-gray-700 block">
                আপনি কি বেনামে রিপোর্ট করতে চান?
              </label>
              <select
                className="w-full border rounded-lg p-2"
                value={anonymous}
                onChange={(e) => setAnonymous(e.target.value)}
              >
                <option value="yes">হ্যাঁ, আমি বেনামে থাকতে চাই</option>
                <option value="no">না, আমি আমার পরিচয় দিতে চাই</option>
              </select>
            </div>

            {/* Conditional fields that appear when student selects "no" */}
            {anonymous === "no" && (
              <div className="space-y-3 border-t pt-3">
                <h4 className="font-medium text-sm">আপনার পরিচয়:</h4>

                <div>
                  <label className="text-sm text-gray-700 block mb-1">
                    নাম
                  </label>
                  <Input
                    placeholder="আপনার নাম লিখুন"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-700 block mb-1">
                    শ্রেণী
                  </label>
                  <Input
                    placeholder="আপনার শ্রেণী লিখুন"
                    value={studentClass}
                    onChange={(e) => setStudentClass(e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-700 block mb-1">
                    রোল নম্বর
                  </label>
                  <Input
                    placeholder="আপনার রোল নম্বর লিখুন"
                    value={studentRoll}
                    onChange={(e) => setStudentRoll(e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          <AlertDialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              বাতিল করুন
            </Button>
            <Button
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={handleSubmit}
            >
              জমা দিন
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default SafetyAndSupport;
