
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => Math.max(0, prev - 1));
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 opacity-0 animate-fade-in-delay-2">
      <div className="glass-card rounded-2xl p-6 md:p-8">
        <h2 className="text-xl font-medium text-apple-darkgray mb-6">Counter</h2>
        
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            <div className="text-5xl font-light text-apple-darkgray mb-8 transition-all duration-300 animate-scale">
              {count}
            </div>
            
            {/* Pulse ring animation when count changes */}
            <div className={`absolute inset-0 rounded-full ${count > 0 ? 'bg-apple-blue/5 animate-pulse-light' : ''}`}></div>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={decrement}
              className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-apple-darkgray hover:bg-gray-50 transition-all duration-200 active:scale-95"
              disabled={count === 0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            
            <button
              onClick={reset}
              className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-apple-lightgray hover:bg-gray-50 transition-all duration-200 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
              </svg>
            </button>
            
            <button
              onClick={increment}
              className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-apple-darkgray hover:bg-gray-50 transition-all duration-200 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
