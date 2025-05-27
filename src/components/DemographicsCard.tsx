
import React from 'react';
import { ProfileCard } from '@/components/ProfileCard';
import { ClickableTerms } from '@/components/ClickableTerms';
import { Users } from 'lucide-react';
import { getTermExplanation } from '@/data/termExplanations';

interface DemographicsCardProps {
  demographics: {
    ageRange: string;
    education: string;
    socialStatus: string;
  };
  onEducationalClick: (section: string) => void;
}

export const DemographicsCard: React.FC<DemographicsCardProps> = ({
  demographics,
  onEducationalClick
}) => {
  return (
    <ProfileCard
      title="Demografik Tahminler"
      icon={<Users className="h-6 w-6" />}
      onEducationalClick={() => onEducationalClick('demographics')}
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-gray-500 uppercase tracking-wide">Yaş Aralığı</label>
          <p className="text-sm font-medium">{demographics.ageRange}</p>
        </div>
        <div>
          <label className="text-xs text-gray-500 uppercase tracking-wide">Eğitim Seviyesi</label>
          <p className="text-sm font-medium">{demographics.education}</p>
        </div>
        <div className="col-span-2">
          <label className="text-xs text-gray-500 uppercase tracking-wide">
            <ClickableTerms explanation={getTermExplanation('sosyal durum')}>
              Sosyal Durum
            </ClickableTerms>
          </label>
          <p className="text-sm font-medium">{demographics.socialStatus}</p>
        </div>
      </div>
    </ProfileCard>
  );
};
