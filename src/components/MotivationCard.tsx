
import React from 'react';
import { ProfileCard } from '@/components/ProfileCard';
import { TextParser } from '@/components/TextParser';
import { Target } from 'lucide-react';

interface MotivationCardProps {
  motivations: string[];
  onEducationalClick: (section: string) => void;
}

export const MotivationCard: React.FC<MotivationCardProps> = ({
  motivations,
  onEducationalClick
}) => {
  return (
    <ProfileCard
      title="Motivasyon Analizi"
      icon={<Target className="h-6 w-6" />}
      onEducationalClick={() => onEducationalClick('motivations')}
    >
      <div className="space-y-3">
        {motivations.map((motivation, index) => (
          <div key={index} className="p-3 bg-blue-50 rounded-lg">
            <span className="text-sm font-medium">
              <TextParser text={motivation} />
            </span>
          </div>
        ))}
      </div>
    </ProfileCard>
  );
};
