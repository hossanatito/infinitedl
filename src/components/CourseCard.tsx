
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Download, ExternalLink } from "lucide-react";

export interface CourseData {
  image: string;
  "Course Title": string;
  Info: string;
  "Course URL": string;
  [key: string]: string | string[];
}

interface CourseCardProps {
  course: CourseData;
}

const CourseCard = ({ course }: CourseCardProps) => {
  // Get all download link groups
  const downloadLinkGroups = Object.keys(course).filter(key => 
    key.includes("Download Links") && Array.isArray(course[key])
  );

  return (
    <div className="w-full max-w-3xl mx-auto gradient-card rounded-xl overflow-hidden shadow-2xl border border-white/10">
      {/* Course Image */}
      <div className="w-full h-64 relative overflow-hidden">
        <img 
          src={course.image || "https://placehold.co/600x400?text=Course+Image"} 
          alt={course["Course Title"]} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://placehold.co/600x400?text=Course+Image";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>

      {/* Course Content */}
      <div className="p-6 md:p-8">
        {/* Title and Info */}
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 dark:text-white">
          {course["Course Title"]}
        </h1>
        
        <p className="text-slate-700 dark:text-gray-300 mb-6">
          {course.Info}
        </p>
        
        {/* Original Course URL */}
        <div className="mb-8">
          <a 
            href={course["Course URL"]} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            <ExternalLink size={16} />
            <span>View Original Course</span>
          </a>
        </div>

        {/* Download Links Sections */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 dark:border-white/10 pb-2 text-slate-800 dark:text-white">
            Download Links
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            {downloadLinkGroups.map((groupKey, index) => {
              const links = course[groupKey] as string[];
              // Transform "Download Links X" to "Mirror Links X"
              const displayName = groupKey.replace("Download Links", "Mirror Links");
              
              return (
                <AccordionItem 
                  key={index} 
                  value={`group-${index}`}
                  className="border-gray-200 dark:border-white/10"
                >
                  <AccordionTrigger className="text-lg text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    {displayName.replace(/([0-9]+)/g, ' $1')}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                      {links.map((link, linkIndex) => (
                        <a 
                          key={linkIndex}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="download-button"
                        >
                          <Download size={16} />
                          <span>Download Link {linkIndex + 1}</span>
                        </a>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
