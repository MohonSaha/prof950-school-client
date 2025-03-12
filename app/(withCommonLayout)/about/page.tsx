import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// School data in Bangla
const schoolData = {
  name: "শত্রুজিৎপুর আব্দুল গণি মাধ্যমিক বালিকা বিদ্যালয়",
  establishedYear: "১৯৮৫",
  motto: "জ্ঞান, বিজ্ঞান ও মূল্যবোধ",
  intro:
    "শত্রুজিৎপুর আব্দুল গণি মাধ্যমিক বালিকা বিদ্যালয় বাংলাদেশের অন্যতম শ্রেষ্ঠ শিক্ষা প্রতিষ্ঠান। আমরা শিক্ষার্থীদের জ্ঞান, দক্ষতা ও মূল্যবোধের সমন্বয়ে একজন সম্পূর্ণ মানুষ হিসেবে গড়ে তুলতে প্রতিশ্রুতিবদ্ধ।",
  mission:
    "আমাদের মিশন হল শিক্ষার্থীদের একটি সমৃদ্ধ, বহুমুখী এবং আধুনিক শিক্ষা প্রদান করা যা তাদেরকে বিশ্বের যেকোনো প্রতিযোগিতায় সফল হতে সাহায্য করবে।",
  vision:
    "আমাদের ভিশন হল এমন একটি প্রজন্ম তৈরি করা যারা জাতীয় ও আন্তর্জাতিক পরিমণ্ডলে সফলতার সাথে অবদান রাখতে সক্ষম হবে।",
  history: [
    {
      year: "১৯৮৫",
      title: "প্রতিষ্ঠা",
      description:
        "মাত্র ৫০ জন শিক্ষার্থী এবং ১০ জন শিক্ষক নিয়ে আদর্শ বিদ্যাপিঠের যাত্রা শুরু হয়।",
    },
    {
      year: "১৯৯৫",
      title: "প্রথম বড় সাফল্য",
      description: "জাতীয় শিক্ষা সপ্তাহে সেরা বিদ্যালয়ের পুরস্কার অর্জন।",
    },
    {
      year: "২০০৫",
      title: "নতুন ক্যাম্পাস",
      description: "বর্তমান আধুনিক ক্যাম্পাসে স্থানান্তর।",
    },
    {
      year: "২০১৫",
      title: "ত্রিশ বছর পূর্তি",
      description: "শিক্ষার তিন দশক উদযাপন এবং ডিজিটাল শিক্ষা পদ্ধতি চালু।",
    },
    {
      year: "২০২১",
      title: "আন্তর্জাতিক স্বীকৃতি",
      description:
        "এশিয়ার সেরা ১০০টি শিক্ষা প্রতিষ্ঠানের তালিকায় অন্তর্ভুক্তি।",
    },
  ],
  boardMembers: [
    {
      name: "ড. আব্দুল করিম",
      position: "প্রধান পরিচালক",
      bio: "ড. করিম ৩০ বছরের অভিজ্ঞতা সম্পন্ন একজন শিক্ষাবিদ। তিনি দেশের শিক্ষাক্ষেত্রে উল্লেখযোগ্য অবদান রেখেছেন এবং বেশ কয়েকটি জাতীয় পুরস্কার অর্জন করেছেন।",
      imageUrl: "/api/placeholder/400/400",
    },
    {
      name: "প্রফেসর নাজমা বেগম",
      position: "অধ্যক্ষ",
      bio: "প্রফেসর নাজমা বেগম ২০ বছর ধরে এই প্রতিষ্ঠানের সাথে যুক্ত আছেন। তার নেতৃত্বে বিদ্যালয় অনেক সাফল্য অর্জন করেছে।",
      imageUrl: "/api/placeholder/400/400",
    },
    {
      name: "ইঞ্জিনিয়ার মাহমুদুল হাসান",
      position: "ট্রাস্টি বোর্ডের সদস্য",
      bio: "ইঞ্জিনিয়ার মাহমুদুল হাসান একজন বিশিষ্ট শিল্পপতি এবং সমাজসেবক। তিনি শিক্ষা উন্নয়নে নিরন্তর অবদান রেখে চলেছেন।",
      imageUrl: "/api/placeholder/400/400",
    },
    {
      name: "ডা. সালমা আক্তার",
      position: "ট্রাস্টি বোর্ডের সদস্য",
      bio: "ডা. সালমা আক্তার একজন বিশিষ্ট চিকিৎসক এবং শিক্ষানুরাগী। তিনি স্কুলের চিকিৎসা বিভাগ তত্ত্বাবধানে গুরুত্বপূর্ণ ভূমিকা পালন করেন।",
      imageUrl: "/api/placeholder/400/400",
    },
  ],
  facts: [
    { label: "শিক্ষার্থী সংখ্যা", value: "২,৫০০+" },
    { label: "শিক্ষক সংখ্যা", value: "১২০+" },
    { label: "মোট ক্যাম্পাস", value: "৩টি" },
    { label: "গড় শিক্ষার্থী-শিক্ষক অনুপাত", value: "২০:১" },
  ],
};

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Hero Section */}
      <section className="relative py-24 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {schoolData.name}
          </h1>
          <p className="text-xl md:text-2xl font-light mb-6">
            {schoolData.motto}
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-8">{schoolData.intro}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-black ">
            <span className="inline-flex justify-center items-center px-4 py-2 bg-white text-black bg-opacity-20 rounded-lg">
              প্রতিষ্ঠিত {schoolData.establishedYear}
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-lg justify-center text-center">
              রেজিস্ট্রেশন ১২৩৪৫৬
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto md:px-0 px-4 py-16">
        {/* Modern Tabs */}
        <Tabs defaultValue="about" className="mb-16">
          <TabsList className="flex justify-center w-full max-w-xl mx-auto mb-8">
            <TabsTrigger value="about">পরিচিতি</TabsTrigger>
            <TabsTrigger value="history">ইতিহাস</TabsTrigger>
            <TabsTrigger value="leadership">ম্যানেজমেন্ট কমিটি</TabsTrigger>
          </TabsList>

          {/* About Tab - Modern Design */}
          <TabsContent value="about">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl font-bold mb-6 text-green-700">
                    আমাদের পরিচয়
                  </h2>
                  <p className="text-lg mb-6 text-gray-700">
                    {schoolData.intro}
                  </p>

                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-3 text-green-600">
                        আমাদের লক্ষ্য
                      </h3>
                      <p className="text-gray-700">{schoolData.mission}</p>
                    </div>

                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-3 text-green-600">
                        আমাদের দর্শন
                      </h3>
                      <p className="text-gray-700">{schoolData.vision}</p>
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="grid grid-cols-2 gap-4">
                    {schoolData.facts.map((fact, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center text-center"
                      >
                        <span className="text-3xl font-bold text-green-600 mb-2">
                          {fact.value}
                        </span>
                        <span className="text-gray-600">{fact.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 relative rounded-lg overflow-hidden h-64">
                    <Image
                      src="https://i.ibb.co.com/Z1Xc7pr8/image-1.jpg"
                      alt="School campus"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* History Tab - Modern Design */}
          <TabsContent value="history">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center text-green-800">
                আমাদের ইতিহাস
              </h2>

              <div className="space-y-6">
                {schoolData.history.map((event, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-none w-24 h-24 bg-green-600 text-white rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold">{event.year}</div>
                      </div>
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-lg shadow">
                      <h3 className="text-xl font-bold text-green-700 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Leadership Tab - Modern Design */}
          <TabsContent value="leadership">
            <div className=" mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center text-green-800">
                আমাদের নেতৃবৃন্দ
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {schoolData.boardMembers.map((member, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-72 w-full">
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-green-800 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-green-600 mb-3">{member.position}</p>
                      <p className="text-gray-600">{member.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AboutPage;
