
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

interface UrlFormProps {
  onSubmit: (url: string) => void;
  isLoading: boolean;
}

const UrlForm = ({
  onSubmit,
  isLoading
}: UrlFormProps) => {
  const [url, setUrl] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      toast.error("Please enter a valid URL");
      return;
    }

    // Basic URL validation
    try {
      new URL(url);
      onSubmit(url);
    } catch (error) {
      toast.error("Please enter a valid URL");
    }
  };
  
  return <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input 
          type="text" 
          name="url" 
          placeholder="Enter Course URL" 
          value={url} 
          onChange={e => setUrl(e.target.value)} 
          disabled={isLoading} 
          required 
          className="bg-white/50 dark:bg-black/20 border border-purple-200/50 dark:border-white/10 text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 h-12 focus:border-purple-500 focus:ring-purple-500/20" 
        />
        <Button 
          type="submit" 
          disabled={isLoading} 
          className="h-12 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border border-white/10"
        >
          {isLoading ? 
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
              <span>Processing...</span>
            </div> 
            : 
            <div className="flex items-center gap-2 text-white">
              <span>Generate Links</span>
              <ArrowRight size={18} />
            </div>
          }
        </Button>
      </div>
    </form>;
};

export default UrlForm;
