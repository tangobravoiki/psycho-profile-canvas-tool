
import React from 'react';
import { LoadingAnalysis } from '@/components/LoadingAnalysis';
import { PersonalityAnalysisCard } from '@/components/PersonalityAnalysisCard';
import { ModusOperandiCard } from '@/components/ModusOperandiCard';
import { MotivationCard } from '@/components/MotivationCard';
import { DemographicsCard } from '@/components/DemographicsCard';
import { RiskFactorsCard } from '@/components/RiskFactorsCard';

interface AnalysisDisplayProps {
  profile: any;
  isAnalyzing: boolean;
  onEducationalClick: (content: any) => void;
}

export const AnalysisDisplay: React.FC<AnalysisDisplayProps> = ({
  profile,
  isAnalyzing,
  onEducationalClick
}) => {
  if (isAnalyzing) {
    return <LoadingAnalysis />;
  }

  if (!profile) return null;

  const handleEducationalClick = (section: string) => {
    const educationalContent = {
      bigFive: {
        title: 'Beş Faktör Kişilik Modeli',
        content: 'Beş Faktör Kişilik Modeli (Big Five), kişiliği beş temel boyutta değerlendiren bilimsel bir yaklaşımdır...',
        sections: [
          'Deneyime Açıklık (Openness)',
          'Sorumluluk (Conscientiousness)', 
          'Dışa Dönüklük (Extraversion)',
          'Uyumluluk (Agreeableness)',
          'Duygusal Denge (Neuroticism)'
        ]
      },
      modusOperandi: {
        title: 'Modus Operandi (Suç İşleme Biçimi)',
        content: 'Modus Operandi, bir suçlunun suç işlerken kullandığı karakteristik yöntem ve davranış kalıplarını ifade eder...',
        sections: [
          'Suç öncesi hazırlık',
          'Suç anındaki davranışlar',
          'Suç sonrası eylemler'
        ]
      }
    };

    onEducationalClick(educationalContent[section] || {
      title: 'Eğitim İçeriği',
      content: 'Bu bölüm hakkında detaylı bilgi...'
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">{profile.title}</h2>
        <p className="text-slate-600">{profile.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PersonalityAnalysisCard 
          bigFive={profile.bigFive}
          onEducationalClick={handleEducationalClick}
        />

        <ModusOperandiCard 
          modusOperandi={profile.modusOperandi}
          onEducationalClick={handleEducationalClick}
        />

        <MotivationCard 
          motivations={profile.motivations}
          onEducationalClick={handleEducationalClick}
        />

        <DemographicsCard 
          demographics={profile.demographics}
          onEducationalClick={handleEducationalClick}
        />
      </div>

      <RiskFactorsCard 
        riskFactors={profile.riskFactors}
        psychologicalMarkers={profile.psychologicalMarkers}
        onEducationalClick={handleEducationalClick}
      />
    </div>
  );
};
