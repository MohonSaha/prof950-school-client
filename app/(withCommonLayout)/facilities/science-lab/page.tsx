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
  Beaker,
  Atom,
  Dna,
  Microscope,
  ChevronRight,
  MapPin,
} from "lucide-react";
import Image from "next/image";

// বিজ্ঞান ল্যাব সুবিধাসমূহের তথ্য
const labFacilities = [
  {
    id: "physics",
    title: "পদার্থবিজ্ঞান ল্যাব",
    icon: <Atom className="h-6 w-6" />,
    description:
      "আমাদের অত্যাধুনিক পদার্থবিজ্ঞান ল্যাবে শিক্ষার্থীরা বিভিন্ন ভৌত পরীক্ষা-নিরীক্ষা করতে পারে।",
    equipment: [
      "অপটিক্যাল বেঞ্চ এবং লেন্স সেট",
      "ভাররি উপকরণ এবং পেন্ডুলাম সেট",
      "বৈদ্যুতিক সার্কিট কিট",
      "চৌম্বকীয় অধ্যয়ন সরঞ্জাম",
      "তাপ ও তরঙ্গ অধ্যয়ন সামগ্রী",
    ],
    imageUrl:
      "https://img.freepik.com/free-vector/flat-laboratory-room-with-chemical-structure_23-2148885008.jpg?semt=ais_hybrid",
    time: "সোম-বৃহ: সকাল ১০টা - দুপুর ১টা",
  },
  {
    id: "chemistry",
    title: "রসায়ন ল্যাব",
    icon: <Beaker className="h-6 w-6" />,
    description:
      "আমাদের রসায়ন ল্যাবে শিক্ষার্থীরা নিরাপদ পরিবেশে রাসায়নিক বিক্রিয়া, পরীক্ষা ও গবেষণা করতে পারে।",
    equipment: [
      "অত্যাধুনিক ফিউম হুড",
      "বিভিন্ন রাসায়নিক দ্রব্য ও সলিউশন",
      "দহন ও বিশ্লেষণ সরঞ্জাম",
      "গ্লাসওয়্যার এবং লেবরেটরি উপকরণ",
      "pHমিটার ও টাইট্রেশন সেট",
    ],
    imageUrl:
      "https://img.freepik.com/free-vector/flat-laboratory-room-with-microscope_23-2148885022.jpg",
    time: "সোম-বৃহ: দুপুর ২টা - বিকাল ৪টা",
  },
  {
    id: "biology",
    title: "জীববিজ্ঞান ল্যাব",
    icon: <Dna className="h-6 w-6" />,
    description:
      "জীববিজ্ঞান ল্যাবে শিক্ষার্থীরা মাইক্রোস্কোপিক নিরীক্ষা থেকে শুরু করে জটিল জৈবিক গঠন পর্যন্ত বিভিন্ন বিষয় অধ্যয়ন করতে পারে।",
    equipment: [
      "মাইক্রোস্কোপ সেট (একক ও দ্বি-অক্ষীয়)",
      "মানব দেহের মডেল",
      "স্লাইড প্রস্তুত কিট",
      "বিভিন্ন প্রাণী ও উদ্ভিদের নমুনা",
      "ডিসেকশন কিট ও অঙ্গসংস্থান চার্ট",
    ],
    imageUrl:
      "https://img.freepik.com/free-vector/flat-laboratory-room-illustration_23-2148888190.jpg",
    time: "মঙ্গল-বৃহ: সকাল ১১টা - দুপুর ১টা",
  },
  {
    id: "computer",
    title: "কম্পিউটার ও ডেটা বিশ্লেষণ ল্যাব",
    icon: <Microscope className="h-6 w-6" />,
    description:
      "আমাদের কম্পিউটার ল্যাবে শিক্ষার্থীরা বিজ্ঞান সম্পর্কিত ডেটা সংগ্রহ, বিশ্লেষণ ও মডেলিং করতে পারে।",
    equipment: [
      "আধুনিক কম্পিউটার ও ইন্টারনেট সংযোগ",
      "ডেটা লগিং ডিভাইস",
      "বৈজ্ঞানিক সফটওয়্যার সুইট",
      "গ্রাফিক্যাল অ্যানালাইসিস টুল",
      "সেন্সর ও ডিজিটাল মাপন সরঞ্জাম",
    ],
    imageUrl:
      "https://img.freepik.com/free-vector/cartoon-laboratory-room-with-equipment_52683-59398.jpg?t=st=1741773130~exp=1741776730~hmac=48c73175d8e59dbf3025b2c4f85a3e4221bf021c42b1d4cae4b8ad667a768d41&w=1060",
    time: "সোম-শুক্র: বিকাল ৩টা - সন্ধ্যা ৬টা",
  },
];

// বিজ্ঞান শিক্ষকদের তালিকা
const teachers = [
  {
    name: "ড. সুমন আহমেদ",
    subject: "পদার্থবিজ্ঞান",
    qualification: "পিএইচডি, ঢাকা বিশ্ববিদ্যালয়",
    experience: "১৫ বছরের অভিজ্ঞতা",
  },
  {
    name: "ড. নাজনীন সুলতানা",
    subject: "রসায়ন",
    qualification: "পিএইচডি, বুয়েট",
    experience: "১২ বছরের অভিজ্ঞতা",
  },
  {
    name: "প্রফেসর মিজানুর রহমান",
    subject: "জীববিজ্ঞান",
    qualification: "এমফিল, জাহাঙ্গীরনগর বিশ্ববিদ্যালয়",
    experience: "১৮ বছরের অভিজ্ঞতা",
  },
];

// ল্যাব ব্যবহারের নিয়মাবলী
const labRules = [
  "সব সময় ল্যাব কোট ও সুরক্ষা চশমা পরিধান করতে হবে",
  "ল্যাবে খাবার ও পানীয় নিষিদ্ধ",
  "উপস্থিত শিক্ষকের অনুমতি ছাড়া কোন পরীক্ষা শুরু করবেন না",
  "ব্যবহারের পর সমস্ত সরঞ্জাম পরিষ্কার করে নির্দিষ্ট স্থানে রাখুন",
  "যেকোনো দুর্ঘটনা বা সমস্যা অবিলম্বে শিক্ষককে জানান",
  "ল্যাবের কোন সরঞ্জাম ল্যাব থেকে বাইরে নিয়ে যাওয়া নিষিদ্ধ",
  "সব সময় ল্যাবে শান্ত ও শৃঙ্খলাবদ্ধ আচরণ বজায় রাখুন",
];

// বিজ্ঞান ল্যাব সুবিধা পেইজ কম্পোনেন্ট
const ScienceLabFacilitiesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* হেডার সেকশন */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          আমাদের বিজ্ঞান ল্যাব সুবিধাসমূহ
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          আমাদের স্কুলের অত্যাধুনিক বিজ্ঞান ল্যাবগুলি শিক্ষার্থীদের হাতে-কলমে
          শিক্ষার মাধ্যমে বিজ্ঞানে দক্ষতা অর্জনে সাহায্য করে।
        </p>
      </div>

      {/* ল্যাব ট্যাব সেকশন */}
      <Tabs defaultValue="physics" className="mb-16">
        <TabsList className="grid md:grid-cols-4 grid-cols-4 mb-8 ">
          {labFacilities.map((lab) => (
            <TabsTrigger
              key={lab.id}
              value={lab.id}
              className="flex items-center gap-2 px-6 md:px-2"
            >
              {lab.icon}
              <span className="hidden md:inline">{lab.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {labFacilities.map((lab) => (
          <TabsContent key={lab.id} value={lab.id}>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      {lab.icon}
                      <CardTitle>{lab.title}</CardTitle>
                    </div>
                    <CardDescription>{lab.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-medium text-lg mb-3">
                      উপলব্ধ সরঞ্জাম:
                    </h3>
                    <ul className="space-y-2">
                      {lab.equipment.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 bg-muted p-3 rounded-lg flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>
                        <strong>ল্যাবের সময়সূচি:</strong> {lab.time}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <img
                  src={lab.imageUrl}
                  alt={`${lab.title} এর ছবি`}
                  className="w-full h-full object-cover"
                />

                {/* <Image
                  src={lab.imageUrl}
                  alt={`${lab.title} এর ছবি`}
                  layout="fill"
                  objectFit="w-full h-full cover"
                /> */}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* শিক্ষক এবং নিয়মাবলী সেকশন */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* শিক্ষক সেকশন */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">আমাদের বিজ্ঞান শিক্ষকগণ</CardTitle>
            <CardDescription>
              আমাদের অভিজ্ঞ শিক্ষকগণ শিক্ষার্থীদের হাতে-কলমে বিজ্ঞান শিক্ষায়
              সহায়তা করেন
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {teachers.map((teacher, idx) => (
                <div key={idx} className="border-b pb-4 last:border-0">
                  <h3 className="font-bold text-lg">{teacher.name}</h3>
                  <p className="text-primary">{teacher.subject}</p>
                  <div className="mt-2 text-sm text-gray-600">
                    <p>{teacher.qualification}</p>
                    <p>{teacher.experience}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* নিয়মাবলী সেকশন */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              ল্যাব ব্যবহারের নিয়মাবলী
            </CardTitle>
            <CardDescription>
              সকল শিক্ষার্থীদের নিরাপদ ও ফলপ্রসূ ল্যাব অভিজ্ঞতার জন্য এই
              নিয়মগুলি অনুসরণ করতে হবে
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {labRules.map((rule, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 mr-3 text-sm font-medium">
                    {idx + 1}
                  </span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* যোগাযোগ সেকশন */}
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="pt-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              ল্যাব সম্পর্কিত তথ্যের জন্য যোগাযোগ করুন
            </h3>
            <p className="mb-6">
              ল্যাব ব্যবহার, সময়সূচি ও বিশেষ ব্যবস্থা সম্পর্কে জানতে আমাদের
              সাথে যোগাযোগ করুন
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="bg-primary-foreground text-primary rounded-lg px-6 py-3 font-medium">
                ফোন: ০১৭১২-৩৪৫৬৭৮
              </div>
              <div className="bg-primary-foreground text-primary rounded-lg px-6 py-3 font-medium">
                ইমেইল: science.lab@ourschool.edu.bd
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScienceLabFacilitiesPage;
