
import React, { useState } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { InfoIcon } from 'lucide-react';

interface ClickableTermsProps {
  children: React.ReactNode;
  explanation?: string;
  term?: string;
  onClick?: () => void;
}

export const ClickableTerms: React.FC<ClickableTermsProps> = ({
  children,
  explanation,
  term,
  onClick
}) => {
  if (!explanation && !onClick) {
    return <>{children}</>;
  }

  if (explanation) {
    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <span className="cursor-help underline decoration-dotted decoration-blue-500 hover:bg-blue-50 px-1 rounded transition-colors">
            {children}
          </span>
        </HoverCardTrigger>
        <HoverCardContent className="w-80 z-50 bg-white border shadow-lg">
          <div className="space-y-2">
            {term && <h4 className="font-semibold text-blue-700">{term}</h4>}
            <p className="text-sm text-gray-700">{explanation}</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    );
  }

  return (
    <span 
      className="cursor-pointer underline decoration-dotted decoration-blue-500 hover:bg-blue-50 px-1 rounded transition-colors"
      onClick={onClick}
    >
      {children}
    </span>
  );
};
