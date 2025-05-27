
import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

interface BigFiveChartProps {
  data: {
    openness: number;
    conscientiousness: number;
    extraversion: number;
    agreeableness: number;
    neuroticism: number;
  };
}

export const BigFiveChart: React.FC<BigFiveChartProps> = ({ data }) => {
  const chartData = [
    { trait: 'Deneyime Açıklık', value: data.openness },
    { trait: 'Sorumluluk', value: data.conscientiousness },
    { trait: 'Dışa Dönüklük', value: data.extraversion },
    { trait: 'Uyumluluk', value: data.agreeableness },
    { trait: 'Duygusal Denge', value: 100 - data.neuroticism }, // Inverted for better visualization
  ];

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={chartData}>
          <PolarGrid />
          <PolarAngleAxis 
            dataKey="trait" 
            tick={{ fontSize: 12, fill: '#64748b' }}
          />
          <PolarRadiusAxis 
            angle={90} 
            domain={[0, 100]} 
            tick={{ fontSize: 10, fill: '#94a3b8' }}
          />
          <Radar
            name="Kişilik Skoru"
            dataKey="value"
            stroke="#2563eb"
            fill="#3b82f6"
            fillOpacity={0.2}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
