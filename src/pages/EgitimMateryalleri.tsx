
import React from 'react';
import { Header } from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Video, FileText, Download, Clock, Users } from 'lucide-react';

const EgitimMateryalleri = () => {
  const modules = [
    {
      id: 1,
      title: "Adli Psikolojiye Giriş",
      description: "Adli psikolojinin temel kavramları, tarihi gelişimi ve uygulama alanları",
      duration: "45 dakika",
      level: "Başlangıç",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      type: "video"
    },
    {
      id: 2,
      title: "Kişilik Teorileri",
      description: "Beş faktör modeli, psikopatoloji ve kişilik bozuklukları",
      duration: "60 dakika",
      level: "Orta",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      type: "text"
    },
    {
      id: 3,
      title: "Suçlu Profilleme Teknikleri",
      description: "Davranışsal analiz, coğrafi profilleme ve modus operandi değerlendirmesi",
      duration: "90 dakika",
      level: "İleri",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      type: "video"
    }
  ];

  const documents = [
    {
      title: "Adli Psikoloji El Kitabı",
      description: "Kapsamlı referans dokümanı",
      pages: "150 sayfa",
      format: "PDF"
    },
    {
      title: "Vaka Analizi Şablonları",
      description: "Standart değerlendirme formları",
      pages: "25 sayfa", 
      format: "DOC"
    },
    {
      title: "Etik Kurallar Rehberi",
      description: "Adli psikolojide etik standartlar",
      pages: "30 sayfa",
      format: "PDF"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Eğitim Materyalleri</h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Adli psikoloji alanındaki en güncel eğitim içerikleri, videolar ve dokümanlar. 
            Uzmanlar tarafından hazırlanan kapsamlı eğitim programları.
          </p>
        </div>

        <Tabs defaultValue="modules" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="modules">Eğitim Modülleri</TabsTrigger>
            <TabsTrigger value="videos">Video Dersler</TabsTrigger>
            <TabsTrigger value="documents">Dokümanlar</TabsTrigger>
          </TabsList>

          <TabsContent value="modules" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module) => (
                <Card key={module.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={module.image} 
                      alt={module.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-2 right-2 bg-blue-600">
                      {module.type === 'video' ? 'Video' : 'Metin'}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                    <p className="text-sm text-slate-600">{module.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 text-sm text-slate-500">
                        <Clock className="h-4 w-4" />
                        <span>{module.duration}</span>
                      </div>
                      <Badge variant="outline">{module.level}</Badge>
                    </div>
                    <Button className="w-full">Başla</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Video className="h-5 w-5" />
                    <span>Adli Görüşme Teknikleri</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-slate-100 rounded-lg mb-4 flex items-center justify-center">
                    <Video className="h-12 w-12 text-slate-400" />
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    Suçlular ve mağdurlarla etkili görüşme yapma teknikleri
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">35 dakika</span>
                    <Button size="sm">İzle</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Video className="h-5 w-5" />
                    <span>Psikolojik Test Uygulamaları</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-slate-100 rounded-lg mb-4 flex items-center justify-center">
                    <Video className="h-12 w-12 text-slate-400" />
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    Adli bağlamda kullanılan psikolojik testlerin uygulanması
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">50 dakika</span>
                    <Button size="sm">İzle</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((doc, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <span className="text-lg">{doc.title}</span>
                    </CardTitle>
                    <p className="text-sm text-slate-600">{doc.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-slate-500">{doc.pages}</span>
                      <Badge variant="outline">{doc.format}</Badge>
                    </div>
                    <Button className="w-full" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      İndir
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default EgitimMateryalleri;
