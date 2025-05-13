
import { useState } from "react";
import UrlForm from "@/components/UrlForm";
import CourseCard from "@/components/CourseCard";
import LoadingAnimation from "@/components/LoadingAnimation";
import EmptyState from "@/components/EmptyState";
import { toast } from "sonner";

interface CourseData {
  image: string;
  "Course Title": string;
  Info: string;
  "Course URL": string;
  [key: string]: string | string[];
}

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [courseData, setCourseData] = useState<CourseData[]>([]);

  const handleSubmit = async (url: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('https://api.cynosurictechlabs.net/webhook/1cdd73e3-5ecb-4328-af02-19b5b8365ecd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apiSecret': 'SecretAccess2025#@!'
        },
        body: JSON.stringify({ url })
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setCourseData(data);
      toast.success("Course download links generated successfully!");

    } catch (error) {
      console.error('Error fetching course data:', error);
      toast.error("Failed to generate links. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          InfiniteDL
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Your smart download link generator for online courses
        </p>
      </header>

      <div className="mb-12">
        <UrlForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>

      <main className="max-w-6xl mx-auto">
        {isLoading ? (
          <LoadingAnimation />
        ) : courseData.length > 0 ? (
          <div className="space-y-12">
            {courseData.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </main>

      <footer className="mt-20 text-center text-gray-500 text-sm">
        <p>© 2025 InfiniteDL - Smart Download Link Generator</p>
      </footer>
    </div>
  );
};

export default Index;
