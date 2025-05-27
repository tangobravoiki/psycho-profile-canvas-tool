
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';

interface ProfileCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onEducationalClick: () => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  title,
  icon,
  children,
  onEducationalClick
}) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-lg">
          <div className="flex items-center space-x-2 text-blue-700">
            {icon}
            <span>{title}</span>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={onEducationalClick}
            className="opacity-60 hover:opacity-100"
          >
            <HelpCircle className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};
