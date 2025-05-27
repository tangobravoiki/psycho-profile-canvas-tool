
import React from 'react';
import { ProfileCard } from '@/components/ProfileCard';
import { BigFiveChart } from '@/components/BigFiveChart';
import { ClickableTerms } from '@/components/ClickableTerms';
import { Badge } from '@/components/ui/badge';
import { Brain } from 'lucide-react';
import { getTermExplanation } from '@/data/termExplanations';

interface PersonalityAnalysisCardProps {
  bigFive: any;
  onEducationalClick: (section: string) => void;
}

export const PersonalityAnalysisCard: React.FC<PersonalityAnalysisCardProps> = ({
  bigFive,
  onEducationalClick
}) => {
  return (
    <ProfileCard
      title="Beş Faktör Kişilik Analizi"
      icon={<Brain className="h-6 w-6" />}
      onEducationalClick={() => onEducationalClick('bigFive')}
    >
      <BigFiveChart data={bigFive} />
      <div className="mt-4 space-y-2">
        {Object.entries(bigFive).map(([trait, score]) => (
          <div key={trait} className="flex justify-between items-center">
            <ClickableTerms 
              explanation={getTermExplanation(trait)}
              term={trait}
            >
              <span className="text-sm capitalize">{trait}</span>
            </ClickableTerms>
            <Badge variant={Number(score) > 70 ? 'default' : Number(score) > 40 ? 'secondary' : 'outline'}>
              {Math.round(Number(score))}%
            </Badge>
          </div>
        ))}
      </div>
    </ProfileCard>
  );
};
