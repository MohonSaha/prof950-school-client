"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { SchoolInfoBar } from "../SchoolInfoBar/SchoolInfoBar";
import Image from "next/image";

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

const resources = [
  {
    title: "শিক্ষক মণ্ডলী",
    href: "/academic/teachers",
    description: "আমাদের সম্মানিত শিক্ষক মণ্ডলীর তালিকা এবং তাদের বিবরণ দেখুন।",
  },
  {
    title: "শ্রেণি রুটিন",
    href: "/academic/class-routine",
    description:
      "আপনার শ্রেণির সময়সূচি এবং ক্লাসের বিস্তারিত তথ্য এখানে পাবেন।",
  },
  {
    title: "পরীক্ষার সময়সূচি",
    href: "/academic/exam-schedule",
    description:
      "সাম্প্রতিক পরীক্ষার সময়সূচি এবং গুরুত্বপূর্ণ তথ্য এখানে পাবেন।",
  },
  {
    title: "পাঠ্যক্রম",
    href: "/academic/syllabus",
    description:
      "বিভিন্ন শ্রেণির জন্য প্রযোজ্য পাঠ্যক্রম এবং শিক্ষাসূচি সম্পর্কে জানুন।",
  },
  {
    title: "ছাত্র কাউন্সিল",
    href: "/academic/student-council",
    description:
      "ছাত্র কাউন্সিল সম্পর্কে জানুন এবং তাদের কার্যক্রম অনুসরণ করুন।",
  },
];

// const admissionDropdown = [
//   { title: "ভর্তি নীতিমালা", href: "/admission/policy" },
//   { title: "ভর্তি ফর্ম", href: "/admission/form" },
//   { title: "ফি কাঠামো", href: "/admission/fees" },
//   { title: "ভর্তি পরীক্ষা", href: "/admission/entrance-exam" },
//   { title: "প্রায়শই জিজ্ঞাসিত প্রশ্ন", href: "/admission/faq" },
// ];

const components = [
  {
    title: "লাইব্রেরি",
    href: "/facilities/library",
    description: "বই, গবেষণা উপকরণ এবং শিক্ষার জন্য সমৃদ্ধ লাইব্রেরি।",
  },
  {
    title: "বিজ্ঞান ল্যাব",
    href: "/facilities/science-lab",
    description:
      "আধুনিক সরঞ্জামসমৃদ্ধ বিজ্ঞান ল্যাব গবেষণা এবং পরীক্ষা-নিরীক্ষার জন্য।",
  },
  {
    title: "কম্পিউটার ল্যাব",
    href: "/facilities/computer-lab",
    description:
      "উন্নত প্রযুক্তিসম্পন্ন কম্পিউটার ল্যাব শিক্ষার্থীদের অনুশীলনের জন্য।",
  },
  {
    title: "খেলার মাঠ",
    href: "/facilities/playground",
    description: "শিক্ষার্থীদের খেলাধুলা এবং বিনোদনের জন্য প্রশস্ত খেলার মাঠ।",
  },
  {
    title: "ক্যান্টিন",
    href: "/facilities/canteen",
    description:
      "পরিষ্কার ও স্বাস্থ্যকর খাবার পরিবেশনকারী ক্যাম্পাস ক্যান্টিন।",
  },
  {
    title: "পরিবহন",
    href: "/facilities/transport",
    description: "নিরাপদ এবং সুবিধাজনক শিক্ষার্থী পরিবহন ব্যবস্থা।",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = React.useState(false);
  const [mobileComponentsOpen, setMobileComponentsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="md:sticky md:px-10 px-4 left-0 top-0 z-50 w-full bg-background/100 backdrop-blur supports-[backdrop-filter]:bg-background/100">
        <SchoolInfoBar className="relative z-50 bg-white border-b" />
        <div className="container flex h-16 items-center justify-between border-b">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <div className="h-[70px] w-[70px] rounded-full p-1 -ml-3">
                  <Image
                    src="https://i.ibb.co.com/LD27kXxw/473068280-3922681521336562-55110548601466905-n-fotor-bg-remover-20250312165419.png"
                    alt="Mohon Saha"
                    width={70}
                    height={70}
                    className="h-full w-full rounded-full object-cover border-2 border-white"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-4 lg:gap-6">
            {navigation.slice(0, 2).map((item) => (
              <Button
                className={` ${
                  pathname === item.href ? "bg-green-700" : "ghost"
                }`}
                key={item.name}
                variant={pathname === item.href ? "default" : "ghost"}
                asChild
              >
                <Link className="text-green-600" href={item.href}>
                  {item.name}
                </Link>
              </Button>
            ))}

            {/* ShadCN Navigation Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                {/* Resources Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-green-600">
                    একাডেমিক
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      {resources.map((resource) => (
                        <ListItem
                          key={resource.title}
                          href={resource.href}
                          title={resource.title}
                          className="text-green-700"
                        >
                          <span className="text-gray-600">
                            {resource.description}
                          </span>
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Components Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-green-600">
                    সুবিধা সমূহ
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          href={component.href}
                          title={component.title}
                          className="text-green-700"
                        >
                          <span className="text-gray-600">
                            {component.description}
                          </span>
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {navigation.slice(3, navigation.length).map((item) => (
              <Button
                className={` ${
                  pathname === item.href ? "bg-green-700" : "ghost"
                }`}
                key={item.name}
                variant={pathname === item.href ? "default" : "ghost"}
                asChild
              >
                <Link className="text-green-600" href={item.href}>
                  {item.name}
                </Link>
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* User Dropdown */}
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="md:h-10 md:w-10 h-8 w-8 cursor-pointer">
                    <AvatarImage
                      src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                      alt="User"
                    />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
            <Button asChild variant="ghost" className="text-green-600">
              <Link href="/login">লগইন</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="default"
                  size="icon"
                  className="md:hidden text-green-600  bg-gray-300 hover:bg-gray-400"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] sm:w-[400px] overflow-y-auto"
              >
                <div className="flex flex-col gap-4 py-4">
                  <Link href="/" className="flex items-center -mt-3">
                    <div className="relative">
                      <div className="h-[60px] w-[60px] rounded-full ">
                        <Image
                          src="https://i.ibb.co.com/LD27kXxw/473068280-3922681521336562-55110548601466905-n-fotor-bg-remover-20250312165419.png"
                          alt="Mohon Saha"
                          width={70}
                          height={70}
                          className="h-full w-full rounded-full object-cover border-2 border-white"
                        />
                      </div>
                    </div>
                  </Link>

                  {/* Regular navigation items */}
                  {navigation.slice(0, 3).map((item) => (
                    <Button
                      key={item.name}
                      variant={pathname === item.href ? "default" : "ghost"}
                      className={`justify-start ${
                        pathname === item.href ? "bg-green-700" : "ghost"
                      }`}
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <Link className="text-green-600" href={item.href}>
                        {item.name}
                      </Link>
                    </Button>
                  ))}

                  {/* Mobile Resources Dropdown */}
                  <Collapsible
                    open={mobileResourcesOpen}
                    onOpenChange={setMobileResourcesOpen}
                    className="w-full"
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className="justify-between w-full px-4 text-green-600"
                      >
                        <span>একাডেমিক</span>
                        {mobileResourcesOpen ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4">
                      <div className="flex flex-col space-y-2 pt-2">
                        {resources.map((resource) => (
                          <div
                            key={resource.title}
                            className="rounded-md p-2 hover:bg-accent text-green-700"
                          >
                            <Link
                              href={resource.href}
                              className="block"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="font-medium">
                                {resource.title}
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {resource.description}
                              </p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Mobile Components Dropdown */}
                  <Collapsible
                    open={mobileComponentsOpen}
                    onOpenChange={setMobileComponentsOpen}
                    className="w-full"
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className="justify-between w-full px-4 text-green-600"
                      >
                        <span className="">সুবিধা সমূহ</span>
                        {mobileComponentsOpen ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4">
                      <div className="flex flex-col space-y-2 pt-2">
                        {components.map((component) => (
                          <div
                            key={component.title}
                            className="rounded-md p-2 hover:bg-accent"
                          >
                            <Link
                              href={component.href}
                              className="block"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="font-medium text-green-700">
                                {component.title}
                              </div>
                              <p className="text-sm text-muted-foreground ">
                                {component.description}
                              </p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Remaining navigation items */}
                  {navigation.slice(3, navigation.length).map((item) => (
                    <Button
                      key={item.name}
                      variant={pathname === item.href ? "default" : "ghost"}
                      className={`justify-start ${
                        pathname === item.href ? "bg-green-700" : "ghost"
                      }`}
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <Link className="text-green-600" href={item.href}>
                        {item.name}
                      </Link>
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
