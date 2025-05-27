
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { InputSection } from '@/components/InputSection';
import { AnalysisDisplay } from '@/components/AnalysisDisplay';
import { EducationalDialog } from '@/components/EducationalDialog';
import { ProfileProvider } from '@/contexts/ProfileContext';

const Index = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [educationalContent, setEducationalContent] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  return (
    <ProfileProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        
        <main className="container mx-auto px-4 py-8 space-y-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              Adli Psikoloji Eğitim Aracı
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Suçlu profillemesi ve adli psikoloji analizi için interaktif eğitim platformu. 
              Gerçek vakalar üzerinden psikolojik değerlendirme yapın ve öğrenin.
            </p>
          </div>

          <InputSection 
            onProfileSelect={setSelectedProfile}
            onAnalysisStart={() => setIsAnalyzing(true)}
            onAnalysisComplete={() => setIsAnalyzing(false)}
          />

          {selectedProfile && (
            <AnalysisDisplay 
              profile={selectedProfile}
              isAnalyzing={isAnalyzing}
              onEducationalClick={setEducationalContent}
            />
          )}

          {educationalContent && (
            <EducationalDialog 
              content={educationalContent}
              onClose={() => setEducationalContent(null)}
            />
          )}
        </main>
      </div>
    </ProfileProvider>
  );
};

export default Index;
