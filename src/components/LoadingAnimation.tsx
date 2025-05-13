
import { Loader } from "lucide-react";

const LoadingAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center p-12">
      <div className="relative">
        <Loader size={48} className="text-blue-500 animate-spin" />
        <div className="absolute inset-0 h-full w-full animate-pulse-slow rounded-full bg-blue-500/20"></div>
      </div>
      <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 animate-pulse">Fetching course data...</p>
    </div>
  );
};

export default LoadingAnimation;
