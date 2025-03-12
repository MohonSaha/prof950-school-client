// import React from "react";
// import {
//   Facebook,
//   Instagram,
//   Twitter,
//   Youtube,
//   Mail,
//   Phone,
//   MapPin,
//   Clock,
//   Github,
//   Linkedin,
//   Globe,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import Image from "next/image";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-900 text-white">
//       {/* Main Footer Content */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* School Info */}
//           <div>
//             <div className="flex items-center mb-6">
//               <Image
//                 src="https://i.ibb.co.com/LD27kXxw/473068280-3922681521336562-55110548601466905-n-fotor-bg-remover-20250312165419.png"
//                 alt="School Logo"
//                 width={60}
//                 height={60}
//                 className="mr-3"
//               />
//               <h3 className="text-md font-bold">
//                 শত্রুজিৎপুর আব্দুল গণি মাধ্যমিক বালিকা বিদ্যালয়
//               </h3>
//             </div>
//             <p className="text-gray-400 mb-6">
//               Empowering young minds since 1975. We strive for academic
//               excellence and holistic development of every student.
//             </p>
//             <div className="flex space-x-4">
//               <a
//                 href="#"
//                 className="text-white hover:text-blue-400 transition-colors"
//               >
//                 <Facebook size={20} />
//               </a>
//               <a
//                 href="#"
//                 className="text-white hover:text-pink-400 transition-colors"
//               >
//                 <Instagram size={20} />
//               </a>
//               <a
//                 href="#"
//                 className="text-white hover:text-blue-400 transition-colors"
//               >
//                 <Twitter size={20} />
//               </a>
//               <a
//                 href="#"
//                 className="text-white hover:text-red-500 transition-colors"
//               >
//                 <Youtube size={20} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
//               Quick Links
//             </h3>
//             <ul className="space-y-3">
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   Admissions
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   Academic Calendar
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   Faculty & Staff
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   Campus Life
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   News & Events
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   Parent Portal
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
//               Contact Us
//             </h3>
//             <ul className="space-y-4">
//               <li className="flex items-start">
//                 <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
//                 <span className="text-gray-400">
//                   123 Education Street, Academic District, City, 12345
//                 </span>
//               </li>
//               <li className="flex items-center">
//                 <Phone className="h-5 w-5 text-blue-400 mr-3" />
//                 <span className="text-gray-400">(123) 456-7890</span>
//               </li>
//               <li className="flex items-center">
//                 <Mail className="h-5 w-5 text-blue-400 mr-3" />
//                 <span className="text-gray-400">
//                   info@excellenceacademy.edu
//                 </span>
//               </li>
//               <li className="flex items-center">
//                 <Clock className="h-5 w-5 text-blue-400 mr-3" />
//                 <span className="text-gray-400">
//                   Mon-Fri: 7:30 AM - 4:00 PM
//                 </span>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
//               Newsletter
//             </h3>
//             <p className="text-gray-400 mb-4">
//               Subscribe to our newsletter to receive updates on school events,
//               news, and announcements.
//             </p>
//             <div className="flex flex-col space-y-3">
//               <Input
//                 type="email"
//                 placeholder="Your email address"
//                 className="bg-gray-800 border-gray-700 focus:border-blue-500"
//               />
//               <Button className="bg-blue-600 hover:bg-blue-700 text-white">
//                 Subscribe
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Developer Credit Section - Redesigned */}
//       <div className="py-8 border-t border-slate-500">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col items-center justify-center">
//             <div className="flex flex-col md:flex-row items-center bg-blue-950 p-6 rounded-lg shadow-lg max-w-3xl w-full border border-blue-700">
//               <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
//                 <div className="mb-4 md:mb-0 md:mr-6 relative">
//                   <div className="h-24 w-24 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 p-1">
//                     <Image
//                       src="https://i.ibb.co.com/31j2YxP/Mohon-Saha-1.jpg"
//                       alt="MohonSaha"
//                       className="h-full w-full rounded-full object-cover border-2 border-white"
//                       width={96}
//                       height={96}
//                     />
//                   </div>
//                   <div className="absolute bottom-1 right-3 bg-green-500 h-5 w-5 rounded-full border-2 border-white"></div>
//                 </div>

//                 <div className="text-center md:text-left">
//                   <h4 className="font-bold text-xl text-white">MohonSaha</h4>
//                   <p className="text-blue-300 mb-2">Web Software Developer</p>
//                   <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
//                     <span className="bg-blue-800 text-blue-200 px-2 py-1 rounded-full text-xs">
//                       React
//                     </span>
//                     <span className="bg-blue-800 text-blue-200 px-2 py-1 rounded-full text-xs">
//                       Next.js
//                     </span>
//                     <span className="bg-blue-800 text-blue-200 px-2 py-1 rounded-full text-xs">
//                       Tailwind
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex flex-col space-y-3 md:ml-auto">
//                 <div className="flex space-x-3 justify-center md:justify-end">
//                   <a
//                     href="https://github.com/MohonSaha"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
//                   >
//                     <Github size={20} className="text-white" />
//                   </a>
//                   <a
//                     href="https://linkedin.com/in/mohonsaha"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition-colors"
//                   >
//                     <Linkedin size={20} className="text-white" />
//                   </a>
//                   <a
//                     href="https://mohonsaha.dev"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-indigo-700 p-2 rounded-full hover:bg-indigo-600 transition-colors"
//                   >
//                     <Globe size={20} className="text-white" />
//                   </a>
//                   <a
//                     href="https://twitter.com/MohonSaha"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-blue-500 p-2 rounded-full hover:bg-blue-400 transition-colors"
//                   >
//                     <Twitter size={20} className="text-white" />
//                   </a>
//                 </div>
//                 <a
//                   href="https://www.facebook.com/spdmohonsaha/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center md:justify-end text-sm text-blue-300 hover:text-blue-200"
//                 >
//                   <Facebook size={16} className="mr-1" />
//                   Follow Mohon Saha on Facebook
//                 </a>
//                 <a
//                   href="mailto:contact@prod950.com"
//                   className="flex items-center justify-center md:justify-end text-sm text-blue-300 hover:text-blue-200"
//                 >
//                   <Mail size={16} className="mr-1" />
//                   contact@prod950.com
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Secondary Footer - Important Links */}
//       <div className="bg-gray-800 py-4">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center text-sm">
//             <div className="mb-4 md:mb-0">
//               <ul className="flex flex-wrap justify-center md:justify-start gap-4">
//                 <li>
//                   <a href="#" className="text-gray-400 hover:text-white">
//                     Privacy Policy
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-400 hover:text-white">
//                     Terms of Service
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-400 hover:text-white">
//                     Sitemap
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-400 hover:text-white">
//                     Career
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <p className="text-gray-500">
//               © {currentYear} Professor Nine Fifty. All rights reserved.
//               Designed & Developed by{" "}
//               <a
//                 href="https://prod950.com"
//                 className="text-blue-400 hover:text-blue-300 transition-colors"
//               >
//                 Mohon Saha
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Accreditation Banner */}
//       <div className="bg-gray-950 py-3">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap justify-center gap-6 items-center text-xs text-gray-500">
//             <span>Accredited by National Education Board</span>
//             <span>ISO 9001:2015 Certified</span>
//             <span>Member of International Schools Association</span>
//             <span>Green School Initiative Partner</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
  Github,
  Linkedin,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: "প্রধান পাতা", href: "/" },
    { name: "আমাদের সম্পর্কে", href: "/about" },
    { name: "ভর্তি", href: "/admission" },
    { name: "ফলাফল", href: "/results" },
    { name: "রুটিন", href: "/routine" },
    // { name: "নোটিশ", href: "/notices" },
    { name: "গ্যালারি", href: "/gallery" },
    { name: "যোগাযোগ", href: "/contact" },
    { name: "নিরাপত্তা ও সহায়তা", href: "/safety-support" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center mb-6">
              <Image
                src="https://i.ibb.co.com/LD27kXxw/473068280-3922681521336562-55110548601466905-n-fotor-bg-remover-20250312165419.png"
                alt="স্কুল লোগো"
                width={60}
                height={60}
                className="mr-3"
              />
              <h3 className="text-md font-bold">
                শত্রুজিৎপুর আব্দুল গণি মাধ্যমিক বালিকা বিদ্যালয়
              </h3>
            </div>
            <p className="text-gray-400 mb-6">
              ১৯৭৫ সাল থেকে তরুণ প্রজন্মকে শক্তিশালী করে তুলছি। আমরা প্রতিটি
              শিক্ষার্থীর শিক্ষাগত উৎকর্ষতা ও সামগ্রিক বিকাশের জন্য প্রচেষ্টা
              করি।
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-pink-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-red-500 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
              দ্রুত লিংক
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
              যোগাযোগ করুন
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <span className="text-gray-400">
                  ১২৩ শিক্ষা সড়ক, একাডেমিক জেলা, শহর, ১২৩৪৫
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-400">(১২৩) ৪৫৬-৭৮৯০</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-400">
                  info@excellenceacademy.edu
                </span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-400">
                  সোম-শুক্র: সকাল ৭:৩০ - দুপুর ৪:০০
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
              নিউজলেটার
            </h3>
            <p className="text-gray-400 mb-4">
              স্কুলের অনুষ্ঠান, খবর এবং বিজ্ঞপ্তি সম্পর্কে আপডেট পেতে আমাদের
              নিউজলেটারে সাবস্ক্রাইব করুন।
            </p>
            <div className="flex flex-col space-y-3">
              <Input
                type="email"
                placeholder="আপনার ইমেইল ঠিকানা"
                className="bg-gray-800 border-gray-700 focus:border-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                সাবস্ক্রাইব করুন
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Credit Section - Redesigned */}
      <div className="py-8 border-t border-slate-500">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col md:flex-row items-center bg-blue-950 p-6 rounded-lg shadow-lg max-w-3xl w-full border border-blue-700">
              <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
                <div className="mb-4 md:mb-0 md:mr-6 relative">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 p-1">
                    <Image
                      src="https://i.ibb.co.com/31j2YxP/Mohon-Saha-1.jpg"
                      alt="মোহন সাহা"
                      className="h-full w-full rounded-full object-cover border-2 border-white"
                      width={96}
                      height={96}
                    />
                  </div>
                  <div className="absolute bottom-1 right-3 bg-green-500 h-5 w-5 rounded-full border-2 border-white"></div>
                </div>

                <div className="text-center md:text-left">
                  <h4 className="font-bold text-xl text-white">মোহন সাহা</h4>
                  <p className="text-blue-300 mb-2">
                    ওয়েব সফটওয়্যার ডেভেলপার
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                    <span className="bg-blue-800 text-blue-200 px-2 py-1 rounded-full text-xs">
                      Javascript
                    </span>
                    <span className="bg-blue-800 text-blue-200 px-2 py-1 rounded-full text-xs">
                      Next.js
                    </span>
                    <span className="bg-blue-800 text-blue-200 px-2 py-1 rounded-full text-xs">
                      SQL
                    </span>
                    <span className="bg-blue-800 text-blue-200 px-2 py-1 rounded-full text-xs">
                      Typescript
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-3 md:ml-auto">
                <div className="flex space-x-3 justify-center md:justify-end">
                  <a
                    href="https://github.com/MohonSaha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <Github size={20} className="text-white" />
                  </a>
                  <a
                    href="https://linkedin.com/in/mohonsaha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition-colors"
                  >
                    <Linkedin size={20} className="text-white" />
                  </a>
                  <a
                    href="https://mohonsaha.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-700 p-2 rounded-full hover:bg-indigo-600 transition-colors"
                  >
                    <Globe size={20} className="text-white" />
                  </a>
                  <a
                    href="https://twitter.com/MohonSaha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 p-2 rounded-full hover:bg-blue-400 transition-colors"
                  >
                    <Twitter size={20} className="text-white" />
                  </a>
                </div>
                <a
                  href="https://www.facebook.com/spdmohonsaha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-end text-sm text-blue-300 hover:text-blue-200"
                >
                  <Facebook size={16} className="mr-1" />
                  ফেসবুকে মোহন সাহাকে অনুসরণ করুন
                </a>
                <a
                  href={`mailto:mohonsaha108@gmail.com?subject=${encodeURIComponent(
                    "শত্রুজিৎপুর আব্দুল গণি মাধ্যমিক বালিকা বিদ্যালয় - ওয়েবসাইট অনুসন্ধান"
                  )}&body=${encodeURIComponent(
                    "প্রিয় মোহন সাহা,\n\nআমি আপনার ডিজাইন করা শত্রুজিৎপুর আব্দুল গণি মাধ্যমিক বালিকা বিদ্যালয়ের ওয়েবসাইট দেখেছি এবং আপনার সাথে যোগাযোগ করতে চাই।\n\n[আপনার অনুসন্ধান/প্রশ্ন এখানে লিখুন]\n\nধন্যবাদ,\n[আপনার নাম]"
                  )}`}
                  className="flex items-center justify-center md:justify-end text-sm text-blue-300 hover:text-blue-200"
                >
                  <Mail size={16} className="mr-1" />
                  mohonsaha108@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Footer - Important Links */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="mb-4 md:mb-0">
              <ul className="flex flex-wrap justify-center md:justify-start gap-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    গোপনীয়তা নীতি
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    সেবার শর্তাবলী
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    সাইটম্যাপ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    কর্মসংস্থান
                  </a>
                </li>
              </ul>
            </div>
            <p className="text-gray-500">
              © {currentYear} মোহন সাহা সর্বস্বত্ব সংরক্ষিত। ডিজাইন এবং
              ডেভেলপমেন্ট{" "}
              <a
                href="https://prod950.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                মোহন সাহা
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Accreditation Banner */}
      <div className="bg-gray-950 py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 items-center text-xs text-gray-500">
            <span>জাতীয় শিক্ষা বোর্ড দ্বারা স্বীকৃত</span>
            <span>আইএসও ৯০০১:২০১৫ সার্টিফাইড</span>
            <span>আন্তর্জাতিক স্কুল সমিতির সদস্য</span>
            <span>গ্রীন স্কুল উদ্যোগ অংশীদার</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
