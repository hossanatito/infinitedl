import { Home, Mail } from "lucide-react";
import { Link } from "react-router-dom";
export const NavigationBar = () => {
  return <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between py-4 px-6 sm:px-10 backdrop-blur-lg bg-black/20 border-b border-white/5">
      <div className="flex items-center space-x-1 text-white font-manrope font-bold text-lg">
        <Home size={20} className="text-white-400" />
        <Link to="/">InfiniteDL</Link>
      </div>
      
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
          
          <span className="font-manrope">home</span>
        </Link>
        
        <a href="mailto:cynosurictechlabs@gmail.com" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
          <Mail size={16} />
          <span className="font-manrope">contact me</span>
        </a>
      </div>
    </nav>;
};