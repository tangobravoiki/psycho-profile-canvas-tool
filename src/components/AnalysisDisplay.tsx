
import React from 'react';
import { ProfileCard } from '@/components/ProfileCard';
import { BigFiveChart } from '@/components/BigFiveChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Brain, Target, Users, AlertTriangle, HelpCircle } from 'lucide-react';

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
    return (
      <div className="w-full max-w-4xl mx-auto">
        <Card>
          <CardContent className="p-8 text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold mb-2">Psikolojik Analiz Yapılıyor...</h3>
            <p className="text-gray-600 mb-4">Profil verileri işleniyor ve değerlendiriliyor</p>
            <Progress value={66} className="w-full max-w-md mx-auto" />
          </CardContent>
        </Card>
      </div>
    );
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
        {/* Big Five Personality Analysis */}
        <ProfileCard
          title="Beş Faktör Kişilik Analizi"
          icon={<Brain className="h-6 w-6" />}
          onEducationalClick={() => handleEducationalClick('bigFive')}
        >
          <BigFiveChart data={profile.bigFive} />
          <div className="mt-4 space-y-2">
            {Object.entries(profile.bigFive).map(([trait, score]) => (
              <div key={trait} className="flex justify-between items-center">
                <span className="text-sm capitalize">{trait}</span>
                <Badge variant={score > 70 ? 'default' : score > 40 ? 'secondary' : 'outline'}>
                  {Math.round(score)}%
                </Badge>
              </div>
            ))}
          </div>
        </ProfileCard>

        {/* Modus Operandi */}
        <ProfileCard
          title="Modus Operandi"
          icon={<Target className="h-6 w-6" />}
          onEducationalClick={() => handleEducationalClick('modusOperandi')}
        >
          <div className="space-y-3">
            {profile.modusOperandi.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </ProfileCard>

        {/* Motivations */}
        <ProfileCard
          title="Motivasyon Analizi"
          icon={<Target className="h-6 w-6" />}
          onEducationalClick={() => handleEducationalClick('motivations')}
        >
          <div className="space-y-3">
            {profile.motivations.map((motivation, index) => (
              <div key={index} className="p-3 bg-blue-50 rounded-lg">
                <span className="text-sm font-medium">{motivation}</span>
              </div>
            ))}
          </div>
        </ProfileCard>

        {/* Demographics */}
        <ProfileCard
          title="Demografik Tahminler"
          icon={<Users className="h-6 w-6" />}
          onEducationalClick={() => handleEducationalClick('demographics')}
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-500 uppercase tracking-wide">Yaş Aralığı</label>
              <p className="text-sm font-medium">{profile.demographics.ageRange}</p>
            </div>
            <div>
              <label className="text-xs text-gray-500 uppercase tracking-wide">Eğitim Seviyesi</label>
              <p className="text-sm font-medium">{profile.demographics.education}</p>
            </div>
            <div className="col-span-2">
              <label className="text-xs text-gray-500 uppercase tracking-wide">Sosyal Durum</label>
              <p className="text-sm font-medium">{profile.demographics.socialStatus}</p>
            </div>
          </div>
        </ProfileCard>
      </div>

      {/* Risk Factors */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
              <span>Risk Faktörleri ve Psikolojik Belirteçler</span>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => handleEducationalClick('riskFactors')}
            >
              <HelpCircle className="h-4 w-4" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-orange-800">Risk Faktörleri</h4>
              <div className="space-y-2">
                {profile.riskFactors.map((factor, index) => (
                  <Badge key={index} variant="outline" className="mr-2 mb-2">
                    {factor}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-800">Psikolojik Belirteçler</h4>
              <div className="space-y-2">
                {profile.psychologicalMarkers.map((marker, index) => (
                  <Badge key={index} variant="secondary" className="mr-2 mb-2">
                    {marker}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
