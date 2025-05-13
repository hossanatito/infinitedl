
import { ArrowDown } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="mb-6 p-6 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-600/20">
        <div className="text-6xl">✨</div>
      </div>
      <h2 className="text-2xl font-bold mb-3 text-white">Smart Download Link Generator</h2>
      <p className="max-w-md text-gray-300 mb-6">
        Generate organized, multi-source download links for your online courses by entering the course URL below.
      </p>
      <ArrowDown size={24} className="text-gray-400 animate-bounce" />
    </div>
  );
};

export default EmptyState;
