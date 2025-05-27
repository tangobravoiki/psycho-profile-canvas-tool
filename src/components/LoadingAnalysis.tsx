
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export const LoadingAnalysis: React.FC = () => {
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
};
