
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Upload, Link, FileText, Search } from 'lucide-react';
import { predefinedProfiles } from '@/data/profiles';

interface InputSectionProps {
  onProfileSelect: (profile: any) => void;
  onAnalysisStart: () => void;
  onAnalysisComplete: () => void;
}

export const InputSection: React.FC<InputSectionProps> = ({
  onProfileSelect,
  onAnalysisStart,
  onAnalysisComplete
}) => {
  const [inputType, setInputType] = useState('predefined');
  const [textInput, setTextInput] = useState('');
  const [urlInput, setUrlInput] = useState('');
  const [selectedProfile, setSelectedProfile] = useState('');

  const handleAnalyze = async () => {
    onAnalysisStart();
    
    // Simulate analysis delay
    setTimeout(() => {
      let profile;
      
      if (inputType === 'predefined') {
        profile = predefinedProfiles.find(p => p.id === selectedProfile);
      } else if (inputType === 'text') {
        profile = generateProfileFromText(textInput);
      } else if (inputType === 'url') {
        profile = generateProfileFromUrl(urlInput);
      }
      
      if (profile) {
        onProfileSelect(profile);
      }
      onAnalysisComplete();
    }, 2000);
  };

  const generateProfileFromText = (text: string) => {
    // Simple text analysis simulation
    return {
      id: 'custom-text',
      title: 'Metin Tabanlı Analiz',
      description: 'Girilen metin üzerinden yapılan psikolojik analiz',
      bigFive: {
        openness: Math.random() * 100,
        conscientiousness: Math.random() * 100,
        extraversion: Math.random() * 100,
        agreeableness: Math.random() * 100,
        neuroticism: Math.random() * 100
      },
      modusOperandi: [
        'Metinsel analiz temelli',
        'Dil kullanım desenleri',
        'Psikolojik belirtiler'
      ],
      motivations: [
        'Analiz edilen içerik temelli motivasyon',
        'Duygusal ifade analizi'
      ],
      demographics: {
        ageRange: '25-45',
        education: 'Orta-Yüksek',
        socialStatus: 'Değişken'
      },
      riskFactors: ['Metin analizi sınırlılıkları'],
      psychologicalMarkers: ['Dil kullanım desenleri']
    };
  };

  const generateProfileFromUrl = (url: string) => {
    // URL analysis simulation
    return {
      id: 'custom-url',
      title: 'URL Tabanlı Analiz',
      description: 'Web içeriği üzerinden yapılan psikolojik analiz',
      bigFive: {
        openness: Math.random() * 100,
        conscientiousness: Math.random() * 100,
        extraversion: Math.random() * 100,
        agreeableness: Math.random() * 100,
        neuroticism: Math.random() * 100
      },
      modusOperandi: [
        'Dijital ayak izi analizi',
        'İçerik tercihleri',
        'Çevrimiçi davranış desenleri'
      ],
      motivations: [
        'Dijital kimlik arayışı',
        'Sosyal medya etkileşimi'
      ],
      demographics: {
        ageRange: '20-40',
        education: 'Orta-Yüksek',
        socialStatus: 'Aktif dijital kullanıcı'
      },
      riskFactors: ['Çevrimiçi gizlilik eksikliği'],
      psychologicalMarkers: ['Dijital davranış desenleri']
    };
  };

  const isAnalyzeDisabled = () => {
    if (inputType === 'predefined') return !selectedProfile;
    if (inputType === 'text') return !textInput.trim();
    if (inputType === 'url') return !urlInput.trim();
    return true;
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Search className="h-6 w-6 text-blue-600" />
          <span>Analiz Giriş Seçenekleri</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button
            variant={inputType === 'predefined' ? 'default' : 'outline'}
            onClick={() => setInputType('predefined')}
            className="flex flex-col items-center p-6 h-auto"
          >
            <FileText className="h-8 w-8 mb-2" />
            <span className="text-sm">Örnek Vakalar</span>
          </Button>
          
          <Button
            variant={inputType === 'text' ? 'default' : 'outline'}
            onClick={() => setInputType('text')}
            className="flex flex-col items-center p-6 h-auto"
          >
            <FileText className="h-8 w-8 mb-2" />
            <span className="text-sm">Metin Girişi</span>
          </Button>
          
          <Button
            variant={inputType === 'url' ? 'default' : 'outline'}
            onClick={() => setInputType('url')}
            className="flex flex-col items-center p-6 h-auto"
          >
            <Link className="h-8 w-8 mb-2" />
            <span className="text-sm">URL Analizi</span>
          </Button>
          
          <Button
            variant={inputType === 'file' ? 'default' : 'outline'}
            onClick={() => setInputType('file')}
            className="flex flex-col items-center p-6 h-auto"
          >
            <Upload className="h-8 w-8 mb-2" />
            <span className="text-sm">Dosya Yükle</span>
          </Button>
        </div>

        <div className="space-y-4">
          {inputType === 'predefined' && (
            <div>
              <label className="block text-sm font-medium mb-2">
                Örnek Vaka Seçin
              </label>
              <Select value={selectedProfile} onValueChange={setSelectedProfile}>
                <SelectTrigger>
                  <SelectValue placeholder="Bir vaka seçin..." />
                </SelectTrigger>
                <SelectContent>
                  {predefinedProfiles.map((profile) => (
                    <SelectItem key={profile.id} value={profile.id}>
                      {profile.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {inputType === 'text' && (
            <div>
              <label className="block text-sm font-medium mb-2">
                Analiz edilecek metni girin
              </label>
              <Textarea
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Psikolojik analiz için metin içeriğini buraya yazın..."
                className="min-h-32"
              />
            </div>
          )}

          {inputType === 'url' && (
            <div>
              <label className="block text-sm font-medium mb-2">
                Analiz edilecek URL
              </label>
              <Input
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://example.com"
                type="url"
              />
            </div>
          )}

          {inputType === 'file' && (
            <div>
              <label className="block text-sm font-medium mb-2">
                Dosya Yükle
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Dosyayı buraya sürükleyin veya tıklayın</p>
                <Input type="file" className="hidden" />
              </div>
            </div>
          )}
        </div>

        <Button
          onClick={handleAnalyze}
          disabled={isAnalyzeDisabled()}
          className="w-full"
          size="lg"
        >
          Psikolojik Analizi Başlat
        </Button>
      </CardContent>
    </Card>
  );
};
