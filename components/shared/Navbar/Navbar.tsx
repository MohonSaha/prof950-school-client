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

const navigation = [
  { name: "প্রধান পাতা", href: "/" },
  { name: "আমাদের সম্পর্কে", href: "/about" },
  // { name: "একাডেমিক", href: "/academic" },
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
    description: "শুরু করার জন্য ধাপে ধাপে টিউটোরিয়াল।",
  },
  {
    title: "শ্রেণি রুটিন",
    href: "/academic/class-routine",
    description: "শুরু করার জন্য ধাপে ধাপে টিউটোরিয়াল।",
  },
  {
    title: "পরীক্ষার সময়সূচি",
    href: "/academic/exam-schedule",
    description: "শুরু করার জন্য ধাপে ধাপে টিউটোরিয়াল।",
  },
  {
    title: "পাঠ্যক্রম",
    href: "/academic/syllabus",
    description: "শুরু করার জন্য ধাপে ধাপে টিউটোরিয়াল।",
  },
  {
    title: "ছাত্র কাউন্সিল",
    href: "/academic/student-council",
    description: "শুরু করার জন্য ধাপে ধাপে টিউটোরিয়াল।",
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
  { title: "লাইব্রেরি", href: "/facilities/library" },
  { title: "বিজ্ঞান ল্যাব", href: "/facilities/science-lab" },
  { title: "কম্পিউটার ল্যাব", href: "/facilities/computer-lab" },
  { title: "খেলার মাঠ", href: "/facilities/playground" },
  { title: "ক্যান্টিন", href: "/facilities/canteen" },
  { title: "পরিবহন", href: "/facilities/transport" },
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
              <span className="inline-block h-6 w-6 rounded-full bg-primary"></span>
              {/* <span className="text-xl font-bold">SAHA AGENCY</span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-4 lg:gap-6">
            {navigation.slice(0, 2).map((item) => (
              <Button
                key={item.name}
                variant={pathname === item.href ? "default" : "ghost"}
                asChild
              >
                <Link href={item.href}>{item.name}</Link>
              </Button>
            ))}

            {/* ShadCN Navigation Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                {/* Resources Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>একাডেমিক</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      {resources.map((resource) => (
                        <ListItem
                          key={resource.title}
                          href={resource.href}
                          title={resource.title}
                        >
                          {resource.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Components Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>সুবিধা সমূহ</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          href={component.href}
                          title={component.title}
                        >
                          UI elements built with Radix and Tailwind.
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {navigation.slice(3, navigation.length).map((item) => (
              <Button
                key={item.name}
                variant={pathname === item.href ? "default" : "ghost"}
                asChild
              >
                <Link href={item.href}>{item.name}</Link>
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
            <Button asChild variant="ghost">
              <Link href="/login">লগইন</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] sm:w-[400px] overflow-y-auto"
              >
                <div className="flex flex-col gap-4 py-4">
                  <Link href="/" className="flex items-center space-x-2 pl-4">
                    <span className="inline-block h-6 w-6 rounded-full bg-primary"></span>
                    {/* <span className="text-xl font-bold">SAHA AGENCY</span> */}
                  </Link>

                  {/* Regular navigation items */}
                  {navigation.slice(0, 3).map((item) => (
                    <Button
                      key={item.name}
                      variant={pathname === item.href ? "default" : "ghost"}
                      className="justify-start"
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href={item.href}>{item.name}</Link>
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
                        className="justify-between w-full px-4"
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
                            className="rounded-md p-2 hover:bg-accent"
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
                        className="justify-between w-full px-4"
                      >
                        <span>সুবিধা সমূহ</span>
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
                              <div className="font-medium">
                                {component.title}
                              </div>
                              <p className="text-sm text-muted-foreground">
                                UI elements built with Radix and Tailwind.
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
                      className="justify-start"
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href={item.href}>{item.name}</Link>
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
