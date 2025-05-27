
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, ChevronRight } from 'lucide-react';

interface EducationalDialogProps {
  content: {
    title: string;
    content: string;
    sections?: string[];
  };
  onClose: () => void;
}

export const EducationalDialog: React.FC<EducationalDialogProps> = ({
  content,
  onClose
}) => {
  return (
    <Dialog open={!!content} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-xl">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <span>{content.title}</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          <div className="prose prose-sm max-w-none">
            <p className="text-gray-700 leading-relaxed">{content.content}</p>
          </div>

          {content.sections && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-slate-800">Ana Bileşenler</h3>
              <div className="space-y-3">
                {content.sections.map((section, index) => (
                  <Card key={index} className="hover:bg-blue-50 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </div>
                        <span className="font-medium text-slate-700">{section}</span>
                        <ChevronRight className="h-4 w-4 text-gray-400 ml-auto" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Eğitim Notu</h4>
            <p className="text-blue-800 text-sm">
              Bu bilgiler eğitim amaçlıdır ve gerçek forensik analizlerde profesyonel değerlendirme gereklidir.
              Adli psikoloji karmaşık bir alandır ve uzman görüşü alınmalıdır.
            </p>
          </div>

          <div className="flex justify-end space-x-3">
            <Button variant="outline" onClick={onClose}>
              Kapat
            </Button>
            <Button onClick={onClose}>
              Anladım
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
