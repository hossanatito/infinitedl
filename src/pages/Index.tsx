import { useState } from "react";
import UrlForm from "@/components/UrlForm";
import CourseCard from "@/components/CourseCard";
import LoadingAnimation from "@/components/LoadingAnimation";
import EmptyState from "@/components/EmptyState";
import { toast } from "sonner";
import { NavigationBar } from "@/components/NavigationBar";
import { Cuboid } from "lucide-react";
interface CourseData {
  image: string;
  "Course Title": string;
  Info: string;
  "Course URL": string;
  [key: string]: string | string[];
}
const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [courseData, setCourseData] = useState<CourseData | null>(null);
  const handleSubmit = async (url: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('https://api.cynosurictechlabs.net/webhook/1cdd73e3-5ecb-4328-af02-19b5b8365ecd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apiSecret': 'SecretAccess2025#@!'
        },
        body: JSON.stringify({
          url
        })
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      console.log("API Response:", data); // Debug log
      setCourseData(data);
      toast.success("Course download links generated successfully!");
    } catch (error) {
      console.error('Error fetching course data:', error);
      toast.error("Failed to generate links. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="min-h-screen py-12 px-4 sm:px-6 gradient-background">
      <div className="z-10 relative">
        <NavigationBar />
        
        <header className="mb-12 text-center mt-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent flex items-center justify-center gap-2">
            <span className="transform transition-all hover:scale-110 relative">
              <Cuboid className="text-blue-600 dark:text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.7)]" size={32} strokeWidth={1.5} style={{
              filter: "drop-shadow(0 0 6px rgba(96,165,250,0.5))",
              transform: "perspective(100px) rotateY(-15deg)"
            }} />
            </span>
            InfiniteDL
          </h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-manrope">Your smart download link generator for InfiniteCourses</p>
        </header>

        <div className="mb-12">
          <UrlForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>

        <main className="max-w-6xl mx-auto">
          {isLoading ? <LoadingAnimation /> : courseData ? <CourseCard course={courseData} /> : <EmptyState />}
        </main>

        <footer className="mt-20 text-center text-gray-600 dark:text-gray-500 text-sm">
          <p>© 2025 InfiniteDL - Smart Download Link Generator</p>
        </footer>
      </div>
    </div>;
};
export default Index;