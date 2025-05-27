
import React from 'react';
import { ProfileCard } from '@/components/ProfileCard';
import { TextParser } from '@/components/TextParser';
import { Target } from 'lucide-react';

interface ModusOperandiCardProps {
  modusOperandi: string[];
  onEducationalClick: (section: string) => void;
}

export const ModusOperandiCard: React.FC<ModusOperandiCardProps> = ({
  modusOperandi,
  onEducationalClick
}) => {
  return (
    <ProfileCard
      title="Modus Operandi"
      icon={<Target className="h-6 w-6" />}
      onEducationalClick={() => onEducationalClick('modusOperandi')}
    >
      <div className="space-y-3">
        {modusOperandi.map((item, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-sm">
              <TextParser text={item} />
            </span>
          </div>
        ))}
      </div>
    </ProfileCard>
  );
};
