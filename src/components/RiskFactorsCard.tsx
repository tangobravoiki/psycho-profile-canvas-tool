
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ClickableTerms } from '@/components/ClickableTerms';
import { AlertTriangle, HelpCircle } from 'lucide-react';
import { getTermExplanation } from '@/data/termExplanations';

interface RiskFactorsCardProps {
  riskFactors: string[];
  psychologicalMarkers: string[];
  onEducationalClick: (section: string) => void;
}

export const RiskFactorsCard: React.FC<RiskFactorsCardProps> = ({
  riskFactors,
  psychologicalMarkers,
  onEducationalClick
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-6 w-6 text-orange-600" />
            <span>
              <ClickableTerms explanation={getTermExplanation('risk faktörleri')}>
                Risk Faktörleri
              </ClickableTerms>
              {' '}ve{' '}
              <ClickableTerms explanation={getTermExplanation('psikolojik belirteçler')}>
                Psikolojik Belirteçler
              </ClickableTerms>
            </span>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => onEducationalClick('riskFactors')}
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
              {riskFactors.map((factor, index) => (
                <ClickableTerms 
                  key={index}
                  explanation={getTermExplanation(factor)}
                  term={factor}
                >
                  <Badge variant="outline" className="mr-2 mb-2 cursor-help">
                    {factor}
                  </Badge>
                </ClickableTerms>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-blue-800">Psikolojik Belirteçler</h4>
            <div className="space-y-2">
              {psychologicalMarkers.map((marker, index) => (
                <ClickableTerms 
                  key={index}
                  explanation={getTermExplanation(marker)}
                  term={marker}
                >
                  <Badge variant="secondary" className="mr-2 mb-2 cursor-help">
                    {marker}
                  </Badge>
                </ClickableTerms>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
