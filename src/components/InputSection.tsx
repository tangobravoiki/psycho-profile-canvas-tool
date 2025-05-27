import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Upload, Link, FileText, Search, Youtube } from 'lucide-react';
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
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [selectedProfile, setSelectedProfile] = useState('');

  const extractVideoId = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const extractTranscript = async (videoId: string) => {
    try {
      // YouTube transcript extraction simülasyonu
      // Gerçek uygulamada burası bir API çağrısı olacak
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simüle edilmiş transcript
      const mockTranscript = `
        Bu vakada, 35 yaşındaki bir erkek şüpheli hakkında konuşacağız. 
        Şüpheli, sistematik bir şekilde hareket ediyor ve suçlarını önceden planlıyor.
        Psikolojik profil incelendiğinde, antisosyal kişilik bozukluğu belirtileri görülmektedir.
        Çocukluk travmaları ve aile geçmişi, şu anki davranış kalıplarını açıklayabilir.
        Şüpheli, manipülatif davranışlar sergiliyor ve empati eksikliği gösteriyor.
        Risk değerlendirmesi yüksek seviyede ve tekrar suç işleme olasılığı fazla.
      `;
      
      return mockTranscript;
    } catch (error) {
      console.error('Transcript extraction error:', error);
      throw new Error('YouTube transkripti alınamadı');
    }
  };

  const analyzeTranscript = (transcript: string) => {
    // Basit metin analizi ile profil oluşturma
    const keywords = {
      antisocial: transcript.toLowerCase().includes('antisosyal') || 
                 transcript.toLowerCase().includes('manipülatif') ||
                 transcript.toLowerCase().includes('empati eksikliği'),
      planned: transcript.toLowerCase().includes('sistematik') ||
               transcript.toLowerCase().includes('önceden plan'),
      trauma: transcript.toLowerCase().includes('travma') ||
              transcript.toLowerCase().includes('çocukluk'),
      risk: transcript.toLowerCase().includes('risk') ||
            transcript.toLowerCase().includes('tehlike')
    };

    return {
      id: 'youtube-transcript',
      title: 'YouTube Video Analizi',
      description: 'Video transkripti üzerinden yapılan psikolojik vaka analizi',
      bigFive: {
        openness: keywords.antisocial ? 25 : 65,
        conscientiousness: keywords.planned ? 75 : 45,
        extraversion: 40,
        agreeableness: keywords.antisocial ? 20 : 50,
        neuroticism: keywords.trauma ? 80 : 45
      },
      modusOperandi: [
        keywords.planned ? 'Sistematik suç planlaması' : 'Düzensiz davranış kalıpları',
        keywords.antisocial ? 'Manipülatif yaklaşım' : 'Duygusal yaklaşım',
        'Video içeriğinden çıkarılan davranış desenleri'
      ],
      motivations: [
        keywords.trauma ? 'Çocukluk travması kaynaklı motivasyon' : 'Sosyal faktörler',
        keywords.antisocial ? 'Kontrol ve güç arayışı' : 'Duygusal ihtiyaçlar'
      ],
      demographics: {
        ageRange: '25-45',
        education: 'Orta-Yüksek',
        socialStatus: 'Video analizi temelli tahmin'
      },
      riskFactors: keywords.risk ? 
        ['Yüksek risk seviyesi', 'Tekrar suç işleme olasılığı'] : 
        ['Orta risk seviyesi'],
      psychologicalMarkers: [
        keywords.antisocial ? 'Antisosyal kişilik belirtileri' : 'Normal kişilik özellikleri',
        keywords.trauma ? 'Travma belirtileri' : 'Stabil duygusal durum'
      ]
    };
  };

  const handleAnalyze = async () => {
    onAnalysisStart();
    
    try {
      let profile;
      
      if (inputType === 'predefined') {
        profile = predefinedProfiles.find(p => p.id === selectedProfile);
      } else if (inputType === 'text') {
        profile = generateProfileFromText(textInput);
      } else if (inputType === 'url') {
        profile = generateProfileFromUrl(urlInput);
      } else if (inputType === 'youtube') {
        const videoId = extractVideoId(youtubeUrl);
        if (!videoId) {
          throw new Error('Geçersiz YouTube URL');
        }
        
        const transcript = await extractTranscript(videoId);
        profile = analyzeTranscript(transcript);
      }
      
      if (profile) {
        onProfileSelect(profile);
      }
    } catch (error) {
      console.error('Analysis error:', error);
      alert('Analiz sırasında bir hata oluştu: ' + error.message);
    } finally {
      onAnalysisComplete();
    }
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
    if (inputType === 'youtube') return !youtubeUrl.trim();
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
            variant={inputType === 'youtube' ? 'default' : 'outline'}
            onClick={() => setInputType('youtube')}
            className="flex flex-col items-center p-6 h-auto"
          >
            <Youtube className="h-8 w-8 mb-2" />
            <span className="text-sm">YouTube Video</span>
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

          {inputType === 'youtube' && (
            <div>
              <label className="block text-sm font-medium mb-2">
                YouTube Video URL
              </label>
              <Input
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
                type="url"
              />
              <p className="text-sm text-gray-500 mt-2">
                Video transkripti otomatik olarak çıkarılacak ve psikolojik analiz yapılacak
              </p>
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
          {inputType === 'youtube' ? 'YouTube Video Analizi Başlat' : 'Psikolojik Analizi Başlat'}
        </Button>
      </CardContent>
    </Card>
  );
};
