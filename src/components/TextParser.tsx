
import React from 'react';
import { ClickableTerms } from '@/components/ClickableTerms';
import { getTermExplanation, termExplanations } from '@/data/termExplanations';

interface TextParserProps {
  text: string;
}

export const TextParser: React.FC<TextParserProps> = ({ text }) => {
  const parseTextWithClickableTerms = (text: string) => {
    const terms = Object.keys(termExplanations);
    const parts = [];
    let lastIndex = 0;
    
    terms.forEach(term => {
      const regex = new RegExp(`\\b${term}\\b`, 'gi');
      let match;
      
      while ((match = regex.exec(text)) !== null) {
        // Add text before the term
        if (match.index > lastIndex) {
          parts.push(text.slice(lastIndex, match.index));
        }
        
        // Add the clickable term
        const explanation = getTermExplanation(term);
        parts.push(
          <ClickableTerms 
            key={`${term}-${match.index}`}
            explanation={explanation}
            term={term}
          >
            {match[0]}
          </ClickableTerms>
        );
        
        lastIndex = match.index + match[0].length;
      }
    });
    
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    
    return parts.length > 0 ? parts : [text];
  };

  return <>{parseTextWithClickableTerms(text)}</>;
};
