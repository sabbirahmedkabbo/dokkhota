import React, { useState } from 'react';
import { Sparkles, X, RefreshCw } from 'lucide-react';

const DemoModeBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-brand-green-dark text-white text-sm py-2 px-4 relative flex items-center justify-center">
      <div className="flex items-center gap-2 max-w-7xl mx-auto">
        <Sparkles className="w-4 h-4 text-yellow-300" />
        <span className="font-medium">✨ Demo Mode</span>
        <span className="hidden sm:inline text-gray-300 mx-2">|</span>
        <span className="hidden sm:inline">This is an illustrative AI MVP prototype. Fictional profile loaded.</span>
        
        <button 
          onClick={() => {
            // Simulated reset
            alert('Demo profile reset successfully!');
          }}
          className="ml-4 flex items-center gap-1 text-xs bg-white/20 hover:bg-white/30 px-2 py-1 rounded transition-colors"
        >
          <RefreshCw className="w-3 h-3" />
          Reset Demo
        </button>
      </div>
      
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default DemoModeBanner;
