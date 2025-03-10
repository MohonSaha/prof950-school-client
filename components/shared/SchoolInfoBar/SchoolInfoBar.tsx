"use client";

import React from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SchoolInfoBarProps {
  className?: string;
}

export function SchoolInfoBar({ className }: SchoolInfoBarProps) {
  return (
    <div
      className={cn(
        "w-full bg-gradient-to-r from-lime-500 to-lime-400 text-lime-950 py-1",
        className
      )}
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* School Name */}
        <div className="font-semibold mb-1 sm:mb-0">
          Wellcome to, Shatrujitpur abdul gani girls school.
        </div>

        {/* Info Items */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm">
          {/* Location */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span className="hidden md:inline">Shatrujitpur, Magura</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>School Location</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Contact Number */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  <span>01609185463</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Contact Number</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* 24/7 Facility */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>(24/7) Facility</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>24/7 Support Available</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
