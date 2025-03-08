
import React from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Counter from '../components/Counter';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-apple-gray">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <Header 
          title="React Assignment" 
          subtitle="Simple & Beautiful Components"
        />
        
        <div className="grid gap-10 md:gap-16">
          <Profile 
            initialName="John Appleseed" 
            initialEmail="john@example.com" 
          />
          
          <Counter />
          
          <div className="text-center text-sm text-apple-lightgray mt-10 opacity-0 animate-fade-in">
            <p>Built with React, Tailwind CSS and attention to detail.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
