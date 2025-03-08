
import React from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="py-6 mb-6">
      <div className="container px-4 mx-auto">
        <div className="opacity-0 animate-fade-in">
          {subtitle && (
            <span className="inline-block text-apple-blue text-sm font-medium tracking-wide mb-1">
              {subtitle}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-apple-darkgray">
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
